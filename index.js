const recognition = new webkitSpeechRecognition()
recognition.lang = 'es-ES'
recognition.continuous = true
recognition.onresult = event => {
	for (const result of event.results) {
		console.log(result[0].transcript)
	}
}
document.body.onclick = function () {
  recognition.start();
  console.log("Lista para escuchar.");
};
recognition.onspeechend = function () {
	recognition.stop();
  console.log("Parado. Pulsa en la página para volver a escuchar");
};
recognition.onerror = function(event) {
  console.log("Ha ocurrido un error durante el reconocimiento de voz: " + event.error");
}
