const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

function copyToClipboard() {
    const email = 'mherd.work@gmail.com';
    const button = document.getElementById('email-btn');
    
    navigator.clipboard.writeText(email).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy Email to Clipboard';
        }, 2000);
    }).catch(err => {
        console.error('Copy failed:', err);
        alert('Email: mherd.work@gmail.com');
    });
}

