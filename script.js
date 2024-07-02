document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const status = document.getElementById('status');
    const form = event.target;

    status.textContent = 'Sending...';

    emailjs.sendForm('service_vnec8f4', 'template_mxzhr3m', this)
        .then(function() {
            status.textContent = 'Message sent successfully!';
            form.reset();
            setTimeout(function() {
                status.textContent = '';
            }, 5000)
        }, function(error) {
            console.error('Failed to send the message:', error);
            alert('Failed to send the message. Please try again later.');
        
        });
    
});

