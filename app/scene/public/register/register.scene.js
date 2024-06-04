import { navigateTo } from "../../../Router";
import { fetchApi } from "../../../helpers/fetch.api";


export function RegisterScene() {
    const root = document.getElementById('root');

    root.innerHTML = `
        <div>
            <h1>Register</h1>
        </div>
        <form id="register-form">
            <input type="text" placeholder="Name" autocomplete="name" />
            <input type="email" placeholder="johndoe@example.com" autocomplete="email" />
            <input type="date"  />
            <input type="password" placeholder="Password" autocomplete="new-password" />
            <button>Register</button>
        </form>
    `;
    let role = 'user'
    const $nameHtml = root.querySelector('input[type="text"]');
    const $emailHtml = root.querySelector('input[type="email"]');
    const $dateHtml = root.querySelector('input[type="date"]');
    const $passHtml = root.querySelector('input[type="password"]');

    const $myForm = root.getElementsByTagName('form')[0];

    $myForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!$nameHtml.value || !$emailHtml.value || !$passHtml.value) {
            alert("Please fill all fields");
            return;
        }




        const userCreated = await fetchApi('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: $nameHtml.value,
                email: $emailHtml.value,
                birthdate: $dateHtml.value,
                password: $passHtml.value,
                role: role
            })
        })

        if (userCreated) {
            alert('User created successfully');
            navigateTo('/login');
        }
    });

}
