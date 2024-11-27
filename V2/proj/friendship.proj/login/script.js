const initialUsers = [
    { username: 'MeowMeow0995', password: 'pass12345', uuid: 'S0101' },
    { username: 'MuMuChan', password: 'pass12345', uuid: 'S0102' },

];

// Initialize localStorage with users if not already set
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(initialUsers));
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Store user data in sessionStorage
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        errorElement.textContent = '';
        // Redirect to user data page
        window.location.href = 'user-data.html';
    } else {
        errorElement.textContent = 'Invalid username or password';
    }
});
    
