// Interactive ROI Calculator Logic
const adBudgetInput = document.getElementById('adBudget');
const budgetValueDisplay = document.getElementById('budgetValue');
const industrySelect = document.getElementById('industrySelect');
const estimatedRevenueDisplay = document.getElementById('estimatedRevenue');
const roasMultipleDisplay = document.getElementById('roasMultiple');

function calculateROI() {
    const budget = parseFloat(adBudgetInput.value);
    const industry = industrySelect.value;
    
    let roas = 4.0;
    if (industry === 'ecommerce') roas = 4.2;
    if (industry === 'saas') roas = 3.8;
    if (industry === 'services') roas = 5.0;

    const estimatedRevenue = budget * roas;

    budgetValueDisplay.innerText = '$' + budget.toLocaleString();
    roasMultipleDisplay.innerText = roas.toFixed(1) + 'x';
    estimatedRevenueDisplay.innerText = '$' + estimatedRevenue.toLocaleString();
}

adBudgetInput.addEventListener('input', calculateROI);
industrySelect.addEventListener('change', calculateROI);

// Contact Form Backend API Call
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const responseMsg = document.getElementById('responseMsg');

    responseMsg.style.color = "#06b6d4";
    responseMsg.innerText = "Sending your request...";

    try {
        const response = await fetch('https://my-python-backend.onrender.com/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            responseMsg.style.color = "#22c55e";
            responseMsg.innerText = "Thank you! Your request has been received.";
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

// Free Audit Form Handler
document.getElementById('auditForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const auditResponseMsg = document.getElementById('auditResponseMsg');
    auditResponseMsg.style.color = "#22c55e";
    auditResponseMsg.innerText = "Audit requested! Check your inbox in 24 hours.";
    this.reset();
});
