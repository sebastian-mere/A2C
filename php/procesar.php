<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    # FIX: Replace this email with recipient email
    $mail_to = "Leads@any2cloud.com";

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
    $content .= "Email: $email\n";
    $content .= "Empresa: " . ($_POST["empresa"] ?? "") . "\n";
    $content .= "Teléfono: " . ($_POST["telefono"] ?? "") . "\n";
    $content .= "País: " . ($_POST["pais"] ?? "") . "\n";
    $content .= "Interés en: " . ($_POST["interes"] ?? "") . "\n\n";
    $content .= "Mensaje:\n$message\n";

    # email headers.
    $headers = "From: Leads@any2cloud.com\nReply-To:" . $email . "\n";
    $headers .= "Mime-Version: 1.0\n";
    $headers .= "Content-Type: text/plain";

    # Send the email.
    $success = mail($mail_to, $subject, $content, $headers);
    if ($success) {
        # Set a 200 (okay) response code.
        http_response_code(200);
        header("Location: https://any2cloud.com/index.html#success");
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
