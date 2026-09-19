// Login and Dashboard Hide/Show Logic
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Hide Login Screen and Show Dashboard
    document.getElementById('loginScreen').style.display = 'none';
});

// Logout Logic
document.getElementById('logoutBtn').addEventListener('click', function() {
    document.getElementById('loginScreen').style.display = 'flex';
});
