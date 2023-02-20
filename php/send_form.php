<?php

// Datos de correo electrónico
$to = "rafaelrendon@any2cloud.com, sebastianalfaro@any2cloud.com";
$subject = "Nuevo formulario de contacto";
$headers = "From: formulario@any2cloud.com";

// Datos del formulario
$nombre = $_POST["nombre"];
$empresa = $_POST["empresa"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$pais = $_POST["pais"];
$interes = implode(", ", $_POST["interes"]);
$comentarios = $_POST["comentarios"];

// Mensaje de correo electrónico
$message = "Nombre y Apellido: $nombre\n\n";
$message .= "Empresa: $empresa\n\n";
$message .= "Email: $email\n\n";
$message .= "Teléfono: $telefono\n\n";
$message .= "País: $pais\n\n";
$message .= "Interés en: $interes\n\n";
$message .= "Comentarios: $comentarios\n\n";

// Envío de correo electrónico
mail($to, $subject, $message, $headers);

// Redireccionamiento después del envío
header('Content-Type: application/json');
echo json_encode(['status' => 'success', 'message' => '¡Gracias por contactarnos!']);
exit;

?>