const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})

$('#rthym').click(function() {
    $('#green').slideToggle();
    if ($('#rthym').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
   });

   $('#color').click(function(){
    $('#red').slideToggle();
    if($('#color').text()=="Read more"){
        $(this).text("Read less")
    }else{
        $(this).text("Read more")
    }
   });
   $('#Read').click(function(){
    $('#me').slideToggle();
    if($('#Read').text()=="Read More"){
        $(this).text("Read less")
    }else{
        $(this).text("Read more")
    }
   })
    
   
   const emailInput = document.getElementById('email-input');
   const emailIcon = document.querySelector('.fa-envelope');
   const emailErrorMessage = document.getElementById('email-error-message');
   const submitButton = document.getElementById('submit-button');
   
   function validateEmail(email) {
     const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
     return regex.test(email);
   }
   
   function showError(input, message) {
     input.classList.add('error');
     emailIcon.classList.add('error');
     emailErrorMessage.textContent = message;
     emailErrorMessage.style.display = 'block';
   }
   
   function hideError(input) {
     input.classList.remove('error');
     emailIcon.classList.remove('error');
     emailErrorMessage.style.display = 'none';
   }
   
   function validateForm(event) {
     event.preventDefault();
     
     const emailValue = emailInput.value.trim();
     
     if (!emailValue) {
       showError(emailInput, 'Email address is required');
     } else if (!validateEmail(emailValue)) {
       showError(emailInput, 'Please enter a valid email address');
     } else {
       hideError(emailInput);
       
     }
   }
   
   emailInput.addEventListener('blur', function() {
     const emailValue = emailInput.value.trim();
     
     if (!emailValue) {
       showError(emailInput, 'Email address is required');
     } else if (!validateEmail(emailValue)) {
       showError(emailInput, 'Please enter a valid email address');
     } else {
       hideError(emailInput);
     }
   });
   
   submitButton.addEventListener('click', validateForm);
   