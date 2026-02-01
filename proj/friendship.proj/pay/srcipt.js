// srcipt.js
let IPADDR = '';

async function fetchIPAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        IPADDR = data.ip;
        console.log('User IP Address:', IPADDR);

        // Make IPADDR accessible to HTML
        document.getElementById('ip-display').textContent = IPADDR;
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}

// Call the function to fetch the IP address
fetchIPAddress();