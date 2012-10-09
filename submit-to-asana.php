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
            $$field = filter_var( $_POST[$field], FILTER_SANITIZE_STRING );
        }
    }
    $message = "From: " . $email . "\n"
             . "Skype: " . $skype . "\n"
             . "Message: " . $message;

    if( mail( 'lawson.kurtz@gmail.com', 'Contact Submission from LKurtz.com', $message ) ) {
        echo "yep";
    } else {
        echo "nope";
    }
} else {
    echo "nope";
}
