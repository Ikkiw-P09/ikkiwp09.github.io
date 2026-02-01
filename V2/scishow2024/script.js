document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('bingo-board');
    const button = document.getElementById('generate-card');
    
    // Define the cyber symbols as image URLs
    const symbols = [
        'images/access.jfif', // Laptop
        'images/adobeillus.png', // Desktop computer
        'images/adobeps.png', // Printer
        'images/android.webp', // Smartphone
        'images/avira.png',
        'images/canva.png', // Technologist
        'images/chrome.webp', // Lock
        'images/dreamweaver.png', // Key
        'images/esetnod32.png', // Floppy disk
        'images/googleplay.png', // Satellite antenna
        'images/linux.png', // Globe with meridians
        'images/manjaro.png', // Keyboard
        'images/mspaint.png', // Mouse
        'images/ppt.webp', // Trackball
        'images/prpro.png', // Laptop (repeated)
        'images/scratch.png', // Detective
        'images/ubuntu.png', // Shield
        'images/VLC.svg', // Wrench
        'images/windows7.png', // Hammer and wrench
        'images/winword.jfif', // Gear
        'images/access.jfif', // Laptop
        'images/adobeillus.png', // Desktop computer
        'images/adobeps.png', // Printer
        'images/android.webp', // Smartphone
        'images/avira.png',
        'images/canva.png', // Technologist
        'images/chrome.webp', // Lock
        'images/dreamweaver.png', // Key
        'images/esetnod32.png', // Floppy disk
        'images/googleplay.png', // Satellite antenna
        'images/linux.png', // Globe with meridians
        'images/manjaro.png', // Keyboard
        'images/mspaint.png', // Mouse
        'images/ppt.webp', // Trackball
        'images/prpro.png', // Laptop (repeated)
        'images/scratch.png', // Detective
        'images/ubuntu.png', // Shield
        'images/VLC.svg', // Wrench
        'images/windows7.png', // Hammer and wrench
        'images/winword.jfif', // Gear
        
    ];

    const generateCard = () => {
        board.innerHTML = ''; // Clear previous card
        const selectedSymbols = shuffle(symbols).slice(0, 16); 
        
        for (let i = 0; i < 16; i++) {
            const cell = document.createElement('div');
            cell.className = 'bingo-cell';
            
            // Create an img element for each symbol
            const img = document.createElement('img');
            img.src = selectedSymbols[i];
            img.alt = 'Bingo Symbol';
            cell.appendChild(img);
            
            cell.addEventListener('click', () => {
                cell.classList.toggle('selected');
            });
            board.appendChild(cell);
        }
    };
    
    // Shuffle function
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    
    // Initial card generation
    generateCard();
    
    // Generate new card on button click
    button.addEventListener('click', generateCard);
});