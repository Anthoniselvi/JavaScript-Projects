const textInput = document.getElementById("text-input");
const generateButton = document.getElementById("generate-btn");
const qrCodeDiv = document.getElementById("qr-code");

generateButton.addEventListener("click", generateQRCode);

function generateQRCode() {
  const text = textInput.value;
  if (!text) {
    alert("Please enter text or a URL.");
    return;
  }

  // Clear previous QR code, if any
  qrCodeDiv.innerHTML = "";

  // Generate a new QR code using the qrcode.js library
  const qrcode = new QRCode(qrCodeDiv, {
    text: text,
    width: "128",
    height: 128,
  });

  qrCodeDiv.classList.remove("hidden");
}
