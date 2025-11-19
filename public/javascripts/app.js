const btnIrLogin = document.getElementById('btn-login-mostrar');
const btnIrRegistro = document.getElementById('btn-registro-mostrar');

const panelLogin = document.getElementById('panel-login');
const panelRegistro = document.getElementById('panel-registro');

const botonesCancelar = document.querySelectorAll('.accion-cancelar');

const formularioLogin = document.querySelector('#panel-login form');
const formularioRegistro = document.querySelector('#panel-registro form');

btnIrLogin.addEventListener('click', () => {
    btnIrLogin.classList.add('oculto');
    panelLogin.classList.remove('oculto');
});

btnIrRegistro.addEventListener('click', () => {
    btnIrRegistro.classList.add('oculto');
    panelRegistro.classList.remove('oculto');
});

botonesCancelar.forEach(boton => {
    boton.addEventListener('click', () => {
        if (panelLogin.contains(boton)) {
            panelLogin.classList.add('oculto');
            btnIrLogin.classList.remove('oculto');
        } else if (panelRegistro.contains(boton)) {
            panelRegistro.classList.add('oculto');
            btnIrRegistro.classList.remove('oculto');
        }
    });
});

formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Enviando correo!');
});

formularioRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Enviando correo!');
});