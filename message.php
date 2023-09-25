<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];
    if (!empty($email) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $receiver = "chiranjeevkashyap2019@gamil.com";
            $subject = "From: $name <$email>";
            $body = "Name: $name\nEmail: $email\nPhone: $phone\nwebsite: $website\nmessage: $message";
            $sender = "From: $email";
            if (mail($receiver, $subject, $body, $sender)) {
                echo "Your message has been sent, Thank you for Conact us.";
            } else {
                echo "Sorry, failed to send your message!";
            }
        } else {
            echo "Enter a valid email address!";
        }
    } else {
        echo "Email and Message are required!"; 
    }
?>