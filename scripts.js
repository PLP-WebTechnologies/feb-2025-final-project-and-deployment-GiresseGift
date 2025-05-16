document.getElementById('contactForm').addEventListener('submit', function(event) {  
    event.preventDefault();  
    alert('Form submitted! Thank you, ' + document.getElementById('name').value);  
});  