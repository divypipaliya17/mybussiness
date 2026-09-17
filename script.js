document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const responseMsg = document.getElementById('responseMsg');

    responseMsg.style.color = "blue";
    responseMsg.innerText = "મોકલી રહ્યું છે...";

    try {
        // Python બેકએન્ડ API ની લિંક અહીં ઉમેરવી
        const response = await fetch('https://my-python-backend-cnsd.onrender.com/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();
        if (response.ok) {
            responseMsg.style.color = "green";
            responseMsg.innerText = "આભાર! તમારો સંદેશ મળી ગયો છે.";
            document.getElementById('contactForm').reset();
        } else {
            responseMsg.style.color = "red";
            responseMsg.innerText = "કંઈક ભૂલ થઈ, ફરી પ્રયાસ કરો.";
        }
    } catch (error) {
        responseMsg.style.color = "red";
        responseMsg.innerText = "સર્વર સાથે કનેક્ટ નથી થઈ શક્યું.";
    }
});