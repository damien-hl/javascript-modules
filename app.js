import { sayHello } from './utils.js'

const helloForm = document.getElementById('hello-form');
const result = document.getElementById('result');

helloForm.addEventListener('submit', e => {
    e.preventDefault();


    const formData = new FormData(e.target);
    const { name } = Object.fromEntries(formData);

    result.textContent = sayHello(name);
})