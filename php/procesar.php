<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    # FIX: Replace this email with recipient email
<<<<<<< HEAD
    $mail_to = "Leads@any2cloud.com";
=======
    $mail_to = "INGRESAR DIRECCION DE DESTINO";
>>>>>>> 7d89d36f129b3afff4dc75c4a0772b46dcc4eb5a

    # Sender Data
    $name = str_replace(array("\r", "\n"), array(" ", " "), strip_tags(trim($_POST["nombre"])));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["comentarios"]);
    $subject = "Mensaje de $name desde el sitio web";

    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        # Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    # Mail Content
    $content = "Nombre: $name\n";
    $content .= "Email: $email\n\n";
    $content .= "Mensaje:\n$message\n";

    # email headers.
<<<<<<< HEAD
    $headers = "From: Leads@any2cloud.com\nReply-To:" . $email . "\n";
=======
    $headers = "From: INGRESAR DIRECCION DE DESTINO\nReply-To:" . $email . "\n";
>>>>>>> 7d89d36f129b3afff4dc75c4a0772b46dcc4eb5a
    $headers .= "Mime-Version: 1.0\n";
    $headers .= "Content-Type: text/plain";

    # Send the email.
    $success = mail($mail_to, $subject, $content, $headers);
    if ($success) {
        # Set a 200 (okay) response code.
        http_response_code(200);
<<<<<<< HEAD
        header("Location: #success");
=======
        header("Location: http://electrocasac.com.ar/index.html#success");
>>>>>>> 7d89d36f129b3afff4dc75c4a0772b46dcc4eb5a
        /*echo "Thank You! Your message has been sent.";*/
    } else {
        # Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong, we couldn't send your message.";
    }

} else {
    # Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>

