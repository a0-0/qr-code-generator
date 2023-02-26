// Function to generate the QR code
function generateQR() {
  // Get the user input from the input field
  var input = document.getElementById('qr-input').value;

  // Check if the input field is empty
  if (!input) {
    alert('Please enter some input to generate a QR code');
    return;
  }

  // Generate the QR code URL using the Google Charts API
  var url = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=' + encodeURIComponent(input);

  // Create an image element with the QR code URL as the source
  var img = document.createElement('img');
  img.onload = function () {
    // Add the image element to the QR code div
    var qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = '';
    qrCodeDiv.appendChild(img);
  }
  img.onerror = function () {
    alert('Failed to generate the QR code');
  }
  img.src = url;
}