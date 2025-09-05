emailjs.init({publicKey: "qhsxUESmK8n4qP5XI"}); // Replace with your actual public key

function sendSOS() {
  const siren = document.getElementById("siren");
  if (siren) {
    siren.play();
  }

  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const message = `Emergency! Location: https://www.google.com/maps?q=${latitude},${longitude}`;

      const templateParams = {
        to_email: "jeevankishore.9490@gmail.com",
        message: message
      };

      emailjs.send("service_05bh4fj", "template_ddlc3uq", templateParams)
        .then(() => alert("SOS sent successfully!"))
        .catch(error => alert("Failed to send SOS: " + JSON.stringify(error)));
    },
    function(error) {
      alert("Unable to retrieve your location: " + error.message);
    }
  );
}
