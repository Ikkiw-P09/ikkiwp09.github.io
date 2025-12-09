function generateUID(length = 15) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uid = '';
    for (let i = 0; i < length; i++) {
        uid += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return uid;
}

function displayUID() {
    const uidElement = document.getElementById('uid');
    uidElement.textContent = generateUID();
}

function copyUID() {
    const uidElement = document.getElementById('uid');
    const uid = uidElement.textContent;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(uid)
            .then(() => {
                alert(translations[currentLanguage].copiedAlert);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                alert(translations[currentLanguage].copyFailedAlert);
            });
    } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = uid;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
            alert(translations[currentLanguage].copiedAlert);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
            alert(translations[currentLanguage].copyFailedAlert);
        }

        document.body.removeChild(textarea);
    }
}

let currentLanguage = 'en'; // Default language

const translations = {
    en: {
        heading: 'UID Generator',
        copyButton: 'Copy UID',
        languageButton: 'ภาษาไทย',
        copiedAlert: 'UID copied to clipboard!',
        copyFailedAlert: 'Failed to copy UID.',
        uidIs: 'Your UID is: '
    },
    th: {
        heading: 'เครื่องมือสร้างรหัส UID',
        copyButton: 'คัดลอกรหัส UID',
        languageButton: 'English',
        copiedAlert: 'คัดลอกรหัส UID ไปยังคลิปบอร์ดแล้ว!',
        copyFailedAlert: 'ไม่สามารถคัดลอกรหัส UID ได้',
        uidIs: 'รหัส UID ของคุณคือ: '
    }
};

function updateText() {
    const headingElement = document.getElementById('heading');
    const copyButtonElement = document.getElementById('copyButton');
    const languageButtonElement = document.getElementById('languageButton');
    const uidTextElement = document.getElementById('uidText'); // Select the text span

    headingElement.textContent = translations[currentLanguage].heading;
    copyButtonElement.textContent = translations[currentLanguage].copyButton;
    languageButtonElement.textContent = translations[currentLanguage].languageButton;
    uidTextElement.textContent = translations[currentLanguage].uidIs; // Set the text of the span

    displayUID(); // This will update the UID inside the span
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'th' : 'en';
    updateText();
}

// Initial UID generation on page load
updateText(); // Initialize text based on default language