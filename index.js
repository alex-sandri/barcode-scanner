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

  const file = e.target.files[0];

  if (file === undefined) {
    return;
  }

  const barcodes = await barcodeDetector.detect(await createImageBitmap(file));

  const values = barcodes.map((barcode) => barcode.rawValue);

  if (values.length === 0) {
    alert('No barcodes found.');

    return;
  }

  alert(values.join('\n'));
}

document
  .getElementById('img')
  .addEventListener('change', detect);

setup();
