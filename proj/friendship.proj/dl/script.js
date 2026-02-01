document.addEventListener('DOMContentLoaded', () => {
    // Cursor glow effect
    const cursorGlow = document.getElementById('cursor-glow');
    
    // ตรวจสอบว่ามี element cursorGlow อยู่จริง
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            // ใช้ transform แทน left/top เพื่อประสิทธิภาพที่ดีกว่า
            // e.clientX และ e.clientY คือตำแหน่งของเคอร์เซอร์
            // - (cursorGlow.offsetWidth / 2) เพื่อจัดจุดศูนย์กลางของ glow ให้อยู่ที่เคอร์เซอร์
            cursorGlow.style.transform = `translate(${e.clientX - (cursorGlow.offsetWidth / 2)}px, ${e.clientY - (cursorGlow.offsetHeight / 2)}px)`;
            cursorGlow.style.opacity = '1'; // ทำให้ glow แสดงขึ้น
        });
        
        // ซ่อน glow effect เมื่อเมาส์ออกจากพื้นที่ body
        document.body.addEventListener('mouseleave', () => {
            cursorGlow.style.opacity = '0';
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    const threshold = 100; // Pixels to scroll before header changes

    window.addEventListener('scroll', () => {
        if (window.scrollY > threshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Developer card scroll animation (Intersection Observer)
    const cards = document.querySelectorAll('.dev-card-animation');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // หยุด observe เมื่อแสดงแล้ว
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    cards.forEach(card => {
        observer.observe(card);
    });
});