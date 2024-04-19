const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
         registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        });

        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';

            if (isUsernameExists(username)) {
                 alert('Username already exists. Please choose a different one.');
                 } else {
                  
                  alert('Successful registration! Redirecting to secured page...');
                  
                    window.location.href = 'secured.html';
                   }
        });
