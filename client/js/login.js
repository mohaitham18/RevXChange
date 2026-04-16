 function flipCard() {
      document.getElementById('card').classList.toggle('flipped');
    }

    function checkStrength(val) {
      const segs = [document.getElementById('s1'), document.getElementById('s2'), document.getElementById('s3'), document.getElementById('s4')];
      segs.forEach(s => { s.className = 'strength-seg'; });
      if (val.length === 0) return;
      let score = 0;
      if (val.length >= 6) score++;
      if (val.length >= 10) score++;
      if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;
      const cls = score <= 1 ? 'weak' : score === 2 ? 'medium' : 'strong';
      for (let i = 0; i < score; i++) segs[i].classList.add(cls);
    }

    // Generate particles
    const container = document.getElementById('particles');
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (8 + Math.random() * 12) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      p.style.width = p.style.height = (1 + Math.random() * 2) + 'px';
      container.appendChild(p);
    }