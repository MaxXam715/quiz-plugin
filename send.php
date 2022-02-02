<?php

$settings = include('settings.php');

// отправка ответа на запрос
function sendResponse($isSuccess){
    echo json_encode([
        'result' => $isSuccess ? 'success' : 'error'
    ]);
}

// формирование тела письма
function createEmailTemplate($inputData){

    $body  = "Пользователь: {$inputData['username']}\r\n";
    $body .= "Номер телефона: {$inputData['username']}\r\n";
    $body .= "\r\n\r\n";

    foreach ($inputData['quiz'] as $item){
        $body .= "{$item['question']}\r\n{$item['answer']} \r\n";
    }

    return $body;
}


// проверка корректности запроса, и фильтрация вводных данных
function checkResponse(){

    if(!@$_POST['username'] || !@$_POST['phone'] || !@is_array($_POST['quiz'])){
        return null;
    }

    $result = [];

    $result['username'] = strip_tags($_POST['username']);
    $result['phone'] = strip_tags($_POST['phone']);
    $result['quiz'] = [];

    foreach ($_POST['quiz'] as $quizRow){
        $question = strip_tags($quizRow["question"]);
        $answer = strip_tags($quizRow["answer"]);
        $result['quiz'][] = [
            'question' => $question,
            'answer' => $answer,
        ];
    }

    return $result;
}


// отсылка письма
$data = checkResponse();
if(!$data){
    sendResponse(false);
} else {
    $message = createEmailTemplate($data);
    sendResponse(mail($settings['address'], $settings['subject'], $message));
}