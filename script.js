//faz o efeito de mudança entre sign in e sign up

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

document.getElementById('login').addEventListener('click', function() {
    document.getElementById('container').classList.remove('container-active');
});

document.getElementById('register').addEventListener('click', function() {
    document.getElementById('container').classList.add('container-active');
});

