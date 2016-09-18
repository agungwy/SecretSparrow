<?php
if(!empty($_POST))
{
	$first_name = 'First Name: '.$_POST['first_name']."\n";
	$contact_no = 'Last Name: '.$_POST['contact_no']."\n";
	$email = 'E-mail: '.$_POST['contact_email']."\n";
	$message = 'Message: '.$_POST['contact_message']."\n";
	
	/* Mail Sending */
	$message = "We will contact you soon as possible - Here is your details\n ".$first_name."".$contact_no."".$email."".$message;
	$to = $email;
	$subject = "New contact Request";
	$headers = "From: admin@demo.com" . "\r\n" .
			"CC: admin@demo.com";
//	mail($to,$subject,$message,$headers);
}
?>