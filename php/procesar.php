<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $empresa = $_POST["empresa"];
  $email = $_POST["email"];
  $telefono = $_POST["telefono"];
  $pais = $_POST["pais"];
  $interes = $_POST["interes"];
  $comentarios = $_POST["comentarios"];
  
  $destinatarios = "rafaelrendon@any2cloud.com, sebastianalfaro@any2cloud.com";
  $asunto = "Nuevo mensaje del formulario de contacto";
  $mensaje = "Nombre y apellido: $nombre\nEmpresa: $empresa\nEmail: $email\nTeléfono: $telefono\nPaís: $pais\nInterés en: $interes\nComentarios: $comentarios";
  
  // Configurar cabeceras del correo
  $cabeceras = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
  
  // Enviar el correo
  mail($destinatarios, $asunto, $mensaje, $cabeceras);
}
?>
