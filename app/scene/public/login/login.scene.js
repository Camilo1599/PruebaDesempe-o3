import { navigateTo } from "../../../Router";

export function LoginScene() {
    const root = document.getElementById('root');

    root.innerHTML = `
        <div>
            <h1>Login</h1>
        </div>
        <form id="login-form">
            <input type="email" placeholder="johndoe@example.com" autocomplete="email" />
            <input type="password" placeholder="Password" autocomplete="new-password" />
            <button type="submit">Login</button>
            <button id="registerBtn">Register</button>
        </form>
    `;

    const $emailHtml = document.querySelector('input[type="email"]');
    const $passHtml = document.querySelector('input[type="password"]');

    const $myForm = root.getElementsByTagName('form')[0];

    $myForm.addEventListener('submit')




    const RegisterButton = document.getElementById("registerBtn");
    RegisterButton.addEventListener('click', (event) => {
        navigateTo('/register')
    })
}