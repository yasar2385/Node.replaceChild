// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const noSelect = document.getElementById('no');
const yesSelect = document.getElementById('yes');
const noBtn = document.getElementById('to-no');
const yesBtn = document.getElementById('to-yes');

yesBtn.addEventListener('click', () => {
  const selectedTransferOptions =
    document.querySelectorAll('#no option:checked');
  const existingYesOptions = document.querySelectorAll('#yes option');
  yesSelect.replaceChildren(...selectedTransferOptions, ...existingYesOptions);
});

noBtn.addEventListener('click', () => {
  const selectedTransferOptions = document.querySelectorAll(
    '#yes option:checked'
  );
  const existingNoOptions = document.querySelectorAll('#no option');
  noSelect.replaceChildren(...selectedTransferOptions, ...existingNoOptions);
});
let del = document.querySelectorAll('del');
if (del.length > 0) {
  del.forEach((element) => {
    element.tagName == 'INSERT'
      ? element.parentElement.removeChild(element)
      : element.after(...element.childNodes),
      element.parentElement.removeChild(element);
  });
}
