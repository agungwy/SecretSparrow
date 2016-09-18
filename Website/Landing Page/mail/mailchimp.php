<?php
if(!empty($_POST))
{
	
	/*  Mail Chimp code */
	$data = [
	'subscriber_email'     => $_POST['subscriber_email'],
	'status'    => 'subscribed'
	];
	
	$apiKey = '';										// 	MailChimp API key
	$listId = '';										//	List ID
	
	$memberId = md5(strtolower($data['subscriber_email']));
	$dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
	$url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listId . '/members/' . $memberId;
	
	$json = json_encode([
			'email_address' => $data['subscriber_email'],
			'status'        => $data['status'] // "subscribed","unsubscribed","cleaned","pending"
			]);
	
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
	curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_TIMEOUT, 10);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
	
	$result = curl_exec($ch);
	echo $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
	curl_close($ch);
	
	/* End of Mailchimp subscriber code */
}
?>