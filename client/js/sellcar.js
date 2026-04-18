document.addEventListener('DOMContentLoaded', () => {

    // ─── Pill Groups Logic ─────────────────────────────────────────
    const pillGroups = document.querySelectorAll('.sc-pills');

    pillGroups.forEach(group => {
        const pills = group.querySelectorAll('.sc-pill');
        
        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                // Remove active class from all pills in this specific group
                pills.forEach(p => p.classList.remove('active'));
                // Add active class to the clicked pill
                pill.classList.add('active');
            });
        });
    });

    // ─── Color Picker Logic ────────────────────────────────────────
    const colorGroup = document.querySelector('.sc-colors');
    if (colorGroup) {
        const colorItems = colorGroup.querySelectorAll('.sc-color-item');
        
        colorItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active from all colors
                colorItems.forEach(c => c.classList.remove('active'));
                // Add active to selected
                item.classList.add('active');
            });
        });
    }

});