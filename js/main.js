const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", function () {
  nav.classList.toggle("open");
});

$(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    var nombre = $('#nombre').val().trim();
    var empresa = $('#empresa').val().trim();
    var email = $('#email').val().trim();
    var telefono = $('#telefono').val().trim();
    var pais = $('#pais').val().trim();
    var intereses = [];
    $('input[name="interes[]"]:checked').each(function() {
      intereses.push($(this).val());
    });
    var comentarios = $('#comentarios').val().trim();
    var captcha = $('#captcha').val().trim();

    var errors = [];
    if (nombre == '') {
      errors.push('El campo de Nombre y Apellido es obligatorio.');
    }
    if (empresa == '') {
      errors.push('El campo de Empresa es obligatorio.');
    }
    if (email == '') {
      errors.push('El campo de Email es obligatorio.');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.push('El campo de Email no es válido.');
    }
    if (telefono == '') {
      errors.push('El campo de Teléfono es obligatorio.');
    } else if (!/^\d{10}$/.test(telefono)) {
      errors.push('El campo de Teléfono no es válido. Debe ser un número de 10 dígitos sin espacios ni guiones.');
    }
    if (pais == '') {
      errors.push('El campo de País es obligatorio.');
    }
    if (intereses.length == 0) {
      errors.push('Debes seleccionar al menos un interés.');
    }
    if (captcha == '') {
      errors.push('El campo de Captcha es obligatorio.');
    } else if (captcha != '42') {
      errors.push('El valor del campo Captcha no es correcto.');
    }

    if (errors.length > 0) {
      var message = '<ul>';
      for (var i = 0; i < errors.length; i++) {
        message += '<li>' + errors[i] + '</li>';
      }
      message += '</ul>';
      Toastify({
        text: message,
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        backgroundColor: "#e74c3c",
        stopOnFocus: true,
      }).showToast();
      return;
    }

    $.post('send_from.php', $('form').serialize(), function(data) {
      Toastify({
        text: "¡Gracias por completar el formulario!",
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        backgroundColor: "#27ae60",
        stopOnFocus: true,
      }).showToast();

      $('form')[0].reset();
    });
  });
});

$(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    var form_data = $(this).serialize();
    
    $.ajax({
      type: "POST",
      url: "send_form.php",
      data: form_data,
      dataType: "json",
      success: function (response) {
        Toastify({
          text: response.message,
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top",
          position: "center",
          backgroundColor: "#27ae60",
          stopOnFocus: true,
        }).showToast();
      },
      
      error: function (xhr, status, error) {
        Toastify({
          text: "Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top",
          position: "center",
          backgroundColor: "#e74c3c",
          stopOnFocus: true,
        }).showToast();
      },
      
    });
  });
});
