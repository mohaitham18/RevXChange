 function flipCard() {
      document.getElementById('card').classList.toggle('flipped');
    }

function checkStrength(val) {
    // Get all 4 strength bar segments
    const segs = [
        document.getElementById('s1'), 
        document.getElementById('s2'), 
        document.getElementById('s3'), 
        document.getElementById('s4')
    ];


    
    // Reset all segments to default gray
    segs.forEach(s => { s.className = 'strength-seg'; });
    
    // If password is empty, do nothing else
    if (val.length === 0) return;
    
    // Calculate strength score (0-4)
    let score = 0;
    if (val.length >= 6) score++;      // At least 6 characters
    if (val.length >= 10) score++;     // At least 10 characters
    if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;  // Has uppercase AND number
    if (/[^A-Za-z0-9]/.test(val)) score++;  // Has special character
    
    // Determine strength level based on score
    const cls = score <= 1 ? 'weak' : score === 2 ? 'medium' : 'strong';
    
    // Color the segments based on score
    for (let i = 0; i < score; i++) {
        segs[i].classList.add(cls);  // Adds 'weak', 'medium', or 'strong' class
    }


}

function signIn() {
    const email = document.querySelector('.card-front input[type="email"]').value.trim();
    const password = document.querySelector('.card-front input[type="password"]').value.trim();

    if (email === 'user@revxchange.com' && password === '123456') {
        localStorage.setItem('role', 'user');
        localStorage.setItem('rxUser', 'Ali');  
        window.location.href = '../index.html';
        return;
    }
    else if (email === 'admin@revxchange.com' && password === '123456') {
        localStorage.setItem('role', 'admin');
        localStorage.setItem('rxUser', 'Admin');
        window.location.href = 'admin.html';
        return;
    }
    else {
        alert('Invalid email or password');
    }
}

document.querySelector('.btn-primary').addEventListener('click', () => {
    localStorage.setItem('rxUser', 'Ali'); // replace 'Ali' with real name later
    window.location.href = '../index.html';
});
