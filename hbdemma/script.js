        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart-bg');
            heart.innerHTML = '❤';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            document.body.appendChild(heart);
            setTimeout(() => { heart.remove(); }, 5000);
        }
        setInterval(createHeart, 300);

        function showLove() {
            const msg = document.getElementById('hiddenMessage');
            if(msg.style.display === 'block') return;
            
            msg.style.display = 'block';
            setTimeout(() => { msg.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, 100);

            for(let i=0; i<30; i++) { setTimeout(createEmoji, i * 50); }
        }

        function createEmoji() {
            const emojis = ['🐱', '💖', '🎂', '🥺', '💰'];
            const el = document.createElement('div');
            el.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            el.style.position = 'absolute';
            el.style.left = '50%';
            el.style.top = '50%';
            el.style.transform = 'translate(-50%, -50%)';
            el.style.fontSize = '30px';
            el.style.transition = 'all 1s ease';
            el.style.zIndex = '100';
            document.body.appendChild(el);

            setTimeout(() => {
                const x = (Math.random() - 0.5) * 500;
                const y = (Math.random() - 0.5) * 500;
                el.style.transform = `translate(${x}px, ${y}px)`;
                el.style.opacity = '0';
            }, 50);

            setTimeout(() => el.remove(), 1000);
        }