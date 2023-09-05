/*  
This <script> block contains the JavaScript code that interacts with the HTML elements.
const is used to declare variables that will hold references to various HTML elements.
updatePreview() is a function that calculates and sets the gradient color in the color preview.
Event listeners are added to color and orientation inputs to call updatePreview() when they change.
The "Copy Color" button's event listener copies the gradient color to the clipboard and displays an alert.
The "Random" button's event listener generates random colors and orientation, updates the UI, and calls updatePreview().
Finally, the initial preview is set by calling updatePreview().
**/
  
  
  
  // Getting references to various elements using their IDs and classes
  const color1Input = document.getElementById('color1');
  const color2Input = document.getElementById('color2');
  const orientationInput = document.getElementById('orientation');
  const colorPreview = document.getElementById('colorPreview');

  // Defining a function to update the color preview
  function updatePreview() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const orientation = orientationInput.value;

    colorPreview.style.background = `linear-gradient(${orientation}deg, ${color1}, ${color2})`;
  }

  // Adding event listeners to the color and orientation inputs
  color1Input.addEventListener('input', updatePreview);
  color2Input.addEventListener('input', updatePreview);
  orientationInput.addEventListener('input', () => {
    document.querySelector('.orientation-value').textContent = orientationInput.value;
    updatePreview();
  });

  // Adding event listener to the "Copy Color" button
  const copyColorBtn = document.querySelector('.copy-color-btn');
  copyColorBtn.addEventListener('click', () => {
    const selectedColor = colorPreview.style.background;
    navigator.clipboard.writeText(selectedColor).then(() => {
      alert('Color copied to clipboard: ' + selectedColor);
    });
  });

  // Adding event listener to the "Random" button
  const randomBtn = document.querySelector('.random-btn');
  randomBtn.addEventListener('click', () => {
    color1Input.value = '#' + Math.floor(Math.random() * 16777215).toString(16);
    color2Input.value = '#' + Math.floor(Math.random() * 16777215).toString(16);
    orientationInput.value = Math.floor(Math.random() * 361);
    document.querySelector('.orientation-value').textContent = orientationInput.value;
    updatePreview();
  });

  // Initial update of the color preview
  updatePreview();