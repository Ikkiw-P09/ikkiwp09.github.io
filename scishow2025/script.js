document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('bingo-board');
  const button = document.getElementById('generate-card');
  const winPopup = document.getElementById('win-popup');
  const restartButton = document.getElementById('restart-button');
  const rulesOverlay = document.getElementById('rules-overlay');
  const closeRulesButton = document.getElementById('close-rules');


  // Define the cyber symbols as image URLs
  const programIcons = [
      'images/Word.svg', 'images/Excel.svg', 'images/PowerPoint.svg', 'images/Adobe_Photoshop.svg',
      'images/Adobe_Illustrator.svg', 'images/Adobe_Premiere_Pro.svg', 'images/Audacity.png', 'images/Blender.svg',
      'images/Visual_Studio_Code.svg', 'images/FileZilla.svg', 'images/WinRAR.png', 'images/VLC.svg',
      'images/Discord.svg', 'images/Steam.svg', 'images/OBS_Studio.svg', 'images/OneNote.svg',
      'images/Google_Chrome.svg', 'images/Firefox.svg', 'images/Spotify.svg', 'images/Netflix.svg',
      'images/Notepad++.svg', 'images/7ziplogo.svg', 'images/Gimp.svg', 'images/Inkscape.svg',
      'images/Krita.svg', 'images/DaVinci_Resolve_Studio.png', 'images/Unity_2021.svg', 'images/Unreal_Engine.svg',
      'images/Telegram_2019.svg', 'images/Slack_Technologies.svg', 'images/Zoom.svg', 'images/githubdesktop.ico'
  ];

  const showWinPopup = () => {
    winPopup.style.display = 'flex'; // Show popup using flexbox
  };

  const closeWinPopup = () => {
    winPopup.style.display = 'none'; // Hide popup
  };

  const restartGame = () => {
    location.reload(); // Reload the browser
  };

  restartButton.addEventListener('click', restartGame);

  // Show rules on page load
  rulesOverlay.style.display = 'flex';

  closeRulesButton.addEventListener('click', () => {
      rulesOverlay.style.display = 'none';
  });

  const generateCard = () => {
    board.innerHTML = ''; // Clear previous card
    const selectedSymbols = shuffle(programIcons).slice(0, 25);

    for (let i = 0; i < selectedSymbols.length; i++) {
      const cell = document.createElement('div');
      cell.className = 'bingo-cell';

      // Create an img element for each symbol
      const img = document.createElement('img');
      img.src = selectedSymbols[i];
      img.alt = 'Bingo Symbol';
      cell.appendChild(img);

      cell.addEventListener('click', () => {
        cell.classList.toggle('selected');
        checkWin();
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


  const checkWin = () => {
    const cells = document.querySelectorAll('.bingo-cell');
    const winningCombinations = [
       //rows
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
       //columns
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
       //diagonals
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20],

    ];
    for (const combination of winningCombinations) {
      if (combination.every(index => cells[index].classList.contains('selected'))) {
         showWinPopup();
          board.style.pointerEvents = 'none'; // optional prevent further interaction
          return true;
      }
    }
    return false;
  };


  // Initial card generation
  generateCard();

  // Generate new card on button click
  button.addEventListener('click', generateCard);
});