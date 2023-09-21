<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
header("Access-Control-Allow-Origin:*");
 
$num = $_GET['num'];
 
$news = array(
	array('chapter'=>'第一章','title'=>'CSS','date'=>'2023-1-6'),
	array('chapter'=>'第二章','title'=>'JS','date'=>'2023-2-6'),
	array('chapter'=>'第三章','title'=>'Vue.js','date'=>'2023-3-20'),
	array('chapter'=>'第四章','title'=>'HTML5','date'=>'2023-3-20'),
	
);
 
echo json_encode(array_slice($news, 0, $num));