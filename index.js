const setup = () => {
  if (!('BarcodeDetector' in window)) {
    document
      .getElementById('unsupported-browser-message')
      .style.display = 'block';

    return;
  }
}

const detect = async (e) => {
  const barcodeDetector = new BarcodeDetector({ formats: ['qr_code'] });

  const barcodes = await barcodeDetector.detect(e.files[0]);

  const values = barcodes.map((barcode) => barcode.rawValue);

  alert(values.join('\n'));
}

document
  .getElementById('img')
  .addEventListener('change', detect);

setup();
