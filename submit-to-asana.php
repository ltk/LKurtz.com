<?php
if( isset( $_POST ) ) {

    $fields = array(
        'email',
        'skype',
        'message'
        );

    foreach( $fields as $field ) {
        $$field = NULL;
        if( isset( $_POST[$field] ) ) {
            $$field = mysql_real_escape_string( $_POST[$field] );
        }
    }
    $message = "From: " . $email . "\n"
             . "Skype: " . $skype . "\n"
             . "Message: " . $message;

    mail( 'lawson.kurtz@gmail.com', 'Contact Submission from LKurtz.com', $message );  
}
header('Location: index.html');