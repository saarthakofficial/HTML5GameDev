<?php

// Load the SendGrid library
require 'vendor/autoload.php';

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set the recipient email address
$to = 'saarthak2k@gmail.com';

// Set the email subject
$subject = 'New message from ' . $name;

// Build the email message
$body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

// Create a new SendGrid client
$sendgrid = new SendGrid(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);

// Create a new Email object
$message = new SendGrid\Email();

// Set the email properties
$message->setFrom($email)
        ->addTo($to)
        ->setSubject($subject)
        ->setText($body);

// Send the email
$response = $sendgrid->send($message);

// Check the response status code
if ($response->getStatusCode() == 202) {
  // The email was sent successfully
  echo 'success';
} else {
  // There was an error sending the email
  echo 'error';
}