

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('data-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    submitForm(form);
  });
});

function submitForm(form) {
  var formData = new FormData(form);
  fetch('https://jyothi-k-c.netlify.app/#contact', {
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