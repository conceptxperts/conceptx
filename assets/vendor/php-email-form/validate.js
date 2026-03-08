/**
* PHP Email Form Validation - v3.9
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {

      let thisForm = this;
      let emailField = thisForm.querySelector('input[name="email"]');
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // reset messages
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      // validate email
      if (emailField && !emailPattern.test(emailField.value)) {
        event.preventDefault();
        displayError(thisForm, "Please enter a valid email address.");
        return;
      }

      // validate required fields
      let requiredFields = thisForm.querySelectorAll("[required]");
      for (let field of requiredFields) {
        if (!field.value.trim()) {
          event.preventDefault();
          displayError(thisForm, "Please fill all required fields.");
          return;
        }
      }

      // show loading spinner
      thisForm.querySelector('.loading').classList.add('d-block');

      // allow normal form submit (FormSubmit will handle email)
    });
  });

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();