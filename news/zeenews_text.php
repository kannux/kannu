<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
function decode($encryptedText, $key) {
    $salt = substr($encryptedText, 0, 6);
    $key = $salt . $key;
    $encryptedText = base64_decode(substr($encryptedText, 6));
    return implode('', array_map(function($c, $i) use ($key) {
        return chr(ord($c) ^ ord($key[$i % strlen($key)]));
    }, str_split($encryptedText), array_keys(str_split($encryptedText))));
}

function validate_input($input) {
    return htmlspecialchars(strip_tags($input));
}

function respond($status, $result, $code = 200) {
    http_response_code($code);
    echo json_encode(['status' => $status, 'result' => $result]);
    exit;
}

$developer_email = isset($_REQUEST['key']) ? decode(validate_input($_REQUEST['key']), '090@Clock') : '';
$developer_data = json_decode(file_get_contents('dev.json'), true);

if (!$developer_email) {
    respond(false, 'Missing required parameters.', 400);
}

if (!isset($developer_data[$developer_email]['zeenews'])) {
    respond(false, 'You are not authorized!', 401);
}

$lang = $_GET['lang'] ?? 'hindi';
$param = $_GET['news'] ?? $_GET['category'] ?? null;
$baseUrl = ($lang === 'english') 
    ? "https://zeenews.india.com/mobileapi/" 
    : "https://zeenews.india.com/$lang/mobileapi/";
$url = $param 
    ? $baseUrl . 
      ($_GET['news'] ? "newsdetail.php?newsid=$param" : "sectionnews.php?sectionid=$param") 
    : "https://st3.zeenews.com/liveapi/$lang/section_new.json";
$data = json_decode(file_get_contents($url), true);
function cleanContent($content) {
    $content = preg_replace(
        '/<p><a\s+href="https?:\/\/[^"]*zeenews[^"]*\/\d+"[^>]*><strong>.*?<\/strong><\/a><\/p>\s*<p><span\s+style="font-size:22px;"[^>]*><strong>.*?<\/p>/si',
        '',
        $content ?? ''
    );
    return trim($content);
}

if(isset($_GET['news'])){
    echo json_encode([
        "title" => $data["NewsDetail"]["title"] ?? null,
        "timestamp" => $data["NewsDetail"]["timestamp"] ?? null,
        "content" => cleanContent($data["NewsDetail"]["content"] ?? '')
    ]);
}elseif(isset($_GET['category'])){
    echo json_encode(array_values(array_map(fn($n) => [
        "id" => $n["id"], 
        "title" => $n["title"], 
        "timestamp" => $n["timestamp"]
    ], array_filter($data["news"] ?? [], fn($n) => ($n["news_type"] ?? '') === "news"))));
}else{
    echo json_encode(array_values(array_map(
        fn($s) => ["id" => $s["id"], "title" => $s["title"]],
        array_filter($data["sections"] ?? [], fn($s) => ($s["news_type"] ?? '') === "news")
    )));
}
?>
