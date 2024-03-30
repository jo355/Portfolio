

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    submitForm(form);
  });
});

function submitForm(form) {
  var formData = new FormData(form);
  fetch('http://127.0.0.1:5500/#', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      console.log('Form submitted successfully');
      form.reset();
    } else {
      console.error('Form submission failed');
    }
  })
  .catch(error => console.error('Error:', error));
}