document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const responseMsg = document.getElementById('responseMsg');

    responseMsg.style.color = "#06b6d4";
    responseMsg.innerText = "Sending your request...";

    try {
        // Replace with your Render Python Backend API URL
        const response = await fetch('https://my-python-backend.onrender.com/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            responseMsg.style.color = "#22c55e";
            responseMsg.innerText = "Thank you! Your strategy session request has been received.";
            document.getElementById('contactForm').reset();
        } else {
            responseMsg.style.color = "#ef4444";
            responseMsg.innerText = "Something went wrong. Please try again.";
        }
    } catch (error) {
        responseMsg.style.color = "#ef4444";
        responseMsg.innerText = "Unable to connect to the server.";
    }
});
