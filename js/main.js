const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");

const paises = {
      "93": "Afganistán",
      "355": "Albania",
      "49": "Alemania",
      "376": "Andorra",
      "244": "Angola",
      "1 264": "Anguila",
      "672": "Antártida",
      "1 268": "Antigua y Barbuda",
      "966": "Arabia Saudita",
      "213": "Argelia",
      "54": "Argentina",
      "374": "Armenia",
      "297": "Aruba",
      "61": "Australia",
      "43": "Austria",
      "994": "Azerbaiyán",
      "32": "Bélgica",
      "1 242": "Bahamas",
      "973": "Bahréin",
      "880": "Bangladesh",
      "1 246": "Barbados",
      "501": "Belice",
      "229": "Benín",
      "975": "Bhután",
      "375": "Bielorrusia",
      "95": "Birmania",
      "591": "Bolivia",
      "387": "Bosnia y Herzegovina",
      "267": "Botsuana",
      "55": "Brasil",
      "673": "Brunéi",
      "359": "Bulgaria",
      "226": "Burkina Faso",
      "257": "Burundi",
      "238": "Cabo Verde",
      "855": "Camboya",
      "237": "Camerún",
      "1": "Canadá",
      "235": "Chad",
      "56": "Chile",
      "86": "China",
      "357": "Chipre",
      "39": "Ciudad del Vaticano",
      "57": "Colombia",
      "269": "Comoras",
      "242": "República del Congo",
      "243": "República Democrática del Congo",
      "850": "Corea del Norte",
      "82": "Corea del Sur",
      "225": "Costa de Marfil",
      "506": "Costa Rica",
      "385": "Croacia",
      "53": "Cuba",
      "5999": "Curazao",
      "45": "Dinamarca",
      "1 767": "Dominica",
      "593": "Ecuador",
      "20": "Egipto",
      "503": "El Salvador",
      "971": "Emiratos Árabes Unidos",
      "291": "Eritrea",
      "421": "Eslovaquia",
      "386": "Eslovenia",
      "34": "España",
      "1": "Estados Unidos de América",
      "372": "Estonia",
      "251": "Etiopía",
      "63": "Filipinas",
      "358": "Finlandia",
      "679": "Fiyi",
      "33": "Francia",
      "241": "Gabón",
      "220": "Gambia",
      "995": "Georgia",
      "233": "Ghana",
      "350": "Gibraltar",
      "1 473": "Granada",
      "30": "Grecia",
      "299": "Groenlandia",
      "590": "Guadalupe",
      "1 671": "Guam",
      "502": "Guatemala",
      "594": "Guayana Francesa",
      "44": "Guernsey",
      "224": "Guinea",
      "240": "Guinea Ecuatorial",
      "245": "Guinea-Bissau",
      "592": "Guyana",
      "509": "Haití",
      "504": "Honduras",
      "852": "Hong Kong",
      "36": "Hungría",
      "91": "India",
      "62": "Indonesia",
      "98": "Irán",
      "964": "Irak",
      "353": "Irlanda",
      "44": "Isla de Man",
      "61": "Isla de Navidad",
      "672": "Isla Norfolk",
      "354": "Islandia",
      "1 441": "Islas Bermudas",
      "1 345": "Islas Caimán",
      "61": "Islas Cocos (Keeling)",
      "682": "Islas Cook",
      "358": "Islas de Åland",
      "298": "Islas Feroe",
      "500": "Islas Georgias del Sur y Sandwich del Sur",
      "7": "Rusia",
      "212": "Sahara Occidental",
      "685": "Samoa",
      "1 684": "Samoa Americana",
      "590": "San Bartolomé",
      "1 869": "San Cristóbal y Nieves",
      "378": "San Marino",
      "1 599": "San Martín (Francia)",
      "508": "San Pedro y Miquelón",
      "1 784": "San Vicente y las Granadinas",
      "290": "Santa Elena, Ascensión y Tristán de Acuña",
      "1 758": "Santa Lucía",
      "239": "Santo Tomé y Príncipe",
      "221": "Senegal",
      "381": "Serbia",
      "248": "Seychelles",
      "232": "Sierra Leona",
      "65": "Singapur",
      "1 721": "Sint Maarten",
      "963": "Siria",
      "252": "Somalia",
      "94": "Sri Lanka",
      "27": "Sudáfrica",
      "249": "Sudán",
      "46": "Suecia",
      "41": "Suiza",
      "597": "Surinam",
      "47": "Svalbard y Jan Mayen",
      "268": "Swazilandia",
      "992": "Tayikistán",
      "66": "Tailandia",
      "886": "Taiwán",
      "255": "Tanzania",
      "246": "Territorio Británico del Océano Índico",
      "670": "Timor Oriental",
      "228": "Togo",
      "690": "Tokelau",
      "676": "Tonga",
      "1 868": "Trinidad y Tobago",
      "216": "Túnez",
      "993": "Turkmenistán",
      "90": "Turquía",
      "688": "Tuvalu",
      "380": "Ucrania",
      "256": "Uganda",
      "598": "Uruguay",
      "998": "Uzbekistán",
      "678": "Vanuatu",
      "58": "Venezuela",
      "84": "Vietnam",
      "681": "Wallis y Futuna",
      "967": "Yemen",
      "253": "Yibuti",
      "260": "Zambia",
      "263": "Zimbabue"
  };

hamburgerMenu.addEventListener("click", function () {
  nav.classList.toggle("open");
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  const nombre = document.getElementById("nombre").value;
  const empresa = document.getElementById("empresa").value;
  const email = document.getElementById("email").value;
  const codigo_pais = document.getElementById("codigo_pais").value;
  const telefono = document.getElementById("telefono").value;
  const pais = document.getElementById("pais").value;
  const interes = document.getElementById("interes").value;
  const comentarios = document.getElementById("comentarios").value
  

  // Validar el campo nombre
  if (!nombre) {
    event.preventDefault();
    document.getElementById("msgNombre").textContent = "El nombre es requerido";
  } else {
    document.getElementById("msgNombre").textContent = "";
  }

  // Validar el campo empresa
  if (!empresa) {
    event.preventDefault();
    document.getElementById("msgEmpresa").textContent =
      "La empresa es requerida";
  } else {
    document.getElementById("msgEmpresa").textContent = "";
  }

  // Validar el campo email
  if (!email) {
    event.preventDefault();
    document.getElementById("msgEmail").textContent = "El email es requerido";
  } else if (!/^[^@\s]+@((?!gmail\.com|hotmail\.com|outlook\.com)[\w-]+\.)+[\w]{2,}$/.test(email)) {
    event.preventDefault();
    document.getElementById("msgEmail").textContent = "Ingrese un email válido con un dominio diferente a gmail.com, hotmail.com u outlook.com";
  } else {
    document.getElementById("msgEmail").textContent = "";
  }

  //Validar el campo Código de país
    if (!paises[codigo_pais]) {
      event.preventDefault();
      msgCodPais.textContent = 'Por favor, ingresa un código de país válido.';
  } else {
    msgCodPais.textContent = '';
  }

  // Validar el campo telefono
  if (!telefono) {
    event.preventDefault();
    document.getElementById("msgTelefono").textContent =
      "El teléfono es requerido";
  } else if (isNaN(telefono) || telefono.length < 6) {
    event.preventDefault();
    document.getElementById("msgTelefono").textContent =
      "Ingrese un número de teléfono válido";
  } else {
    document.getElementById("msgTelefono").textContent = "";
  }

  // Validar el campo pais
  if (!pais) {
    event.preventDefault();
    document.getElementById("msgPais").textContent = "El país es requerido";
  } else {
    document.getElementById("msgPais").textContent = "";
  }

  // Validar el campo interes
  if (!interes) {
    event.preventDefault();
    document.getElementById("msgInteres").textContent =
      "El interés es requerido";
  } else {
    document.getElementById("msgInteres").textContent = "";
  }

  // Validar el campo comentarios
  if (!comentarios) {
    event.preventDefault();
    document.getElementById("msgComentarios").textContent =
      "Los comentarios son requeridos";
  } else {
    document.getElementById("msgComentarios").textContent = "";
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var windowHeight = window.innerHeight;
  var fullHeight = document.body.offsetHeight;
  var scrolled = window.scrollY;
  if (scrolled > 0.5 * (fullHeight - windowHeight)) {
    document.getElementById("btn-subir").style.display = "block";
    document.getElementById("btn-subir").classList.add("fade-in");
  } else {
    document.getElementById("btn-subir").style.display = "none";
    document.getElementById("btn-subir").classList.remove("fade-in");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function completePais(input) {
  const codigoPais = input.value;
  let pais = "";

  if (paises[codigoPais]) {
    pais = paises[codigoPais];
  }

  document.getElementById("pais").value = pais;
}