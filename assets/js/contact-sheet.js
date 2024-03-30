const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL ="https://script.google.com/macros/s/AKfycbwdF6ew8ePtq03tfyWqf6E9iLv6Y8Xmh0yjWyLi9TZnk4Gez9O-lkT0HSrD0wQ0yUvN7A/exec"
form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
      .then(response => {
         alert('Success!', response)
         submitButton.disabled = false
        })
      .catch(error => {
      alert('Error!', error.message)
        submitButton.disabled = false

      }
      )
    })