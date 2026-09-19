// 1. LOGIN & LOGOUT HANDLER
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('loginScreen').style.display = 'none';
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    document.getElementById('loginScreen').style.display = 'flex';
});

// 2. WORKING TABS FUNCTIONALITY (Overview, Posts, Performance, Settings)
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons and contents
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked button & corresponding content
        this.classList.add('active');
        const targetTab = this.getAttribute('data-tab');
        document.getElementById(targetTab).classList.add('active');
    });
});

// 3. ADMIN EDIT MODE (તમે સાઈટ પર લાઈવ આંકડા અને લખાણ બદલી શકશો)
let isAdminEditing = false;
const toggleAdminBtn = document.getElementById('toggleAdminBtn');

toggleAdminBtn.addEventListener('click', function() {
    isAdminEditing = !isAdminEditing;
    const editableElements = document.querySelectorAll('[contenteditable]');

    editableElements.forEach(el => {
        el.setAttribute('contenteditable', isAdminEditing ? 'true' : 'false');
    });

    if (isAdminEditing) {
        this.innerHTML = '<i class="fa-solid fa-check"></i> Save Changes';
        this.style.background = '#06b6d4';
        alert('Admin Edit Mode ON: તમે હવે આંકડા અને ટેબલના લખાણ પર ક્લિક કરીને તેને એડિટ/બદલી શકો છો!');
    } else {
        this.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Admin Edit Mode';
        this.style.background = '#10b981';
        alert('તમારા ફેરફારો સેવ થઈ ગયા છે!');
    }
});

// 4. ACTION BUTTONS (Create Campaign & Post)
document.getElementById('createCampaignBtn').addEventListener('click', function() {
    alert('નવી માર્કેટિંગ ઝુંબેશ (Campaign) બનાવવાની વિન્ડો અહીં ખોલશે.');
});

document.getElementById('createPostBtn').addEventListener('click', function() {
    alert('નવી સોશિયલ મીડિયા પોસ્ટ શેડ્યૂલ કરવાનો ઓપ્શન અહીં ખોલશે.');
});
