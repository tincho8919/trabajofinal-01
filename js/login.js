
let administrador = {
    userAdmin: 'pepe@gmail.com',
    passAdmin: '12345'
}

console.log(administrador);
console.log(administrador.userAdmin);
console.log(administrador.passAdmin);

const loginAdmin = () => {

    let userAdmin = 'pepe@gmail.com';
    let passAdmin = '12345';

    let userEmail = document.getElementById("emailLogin").value;
    let userPassword = document.getElementById("passwordLogin").value;

    console.log(userAdmin, passAdmin);
    console.log(userEmail, userPassword);


    if (administrador.userAdmin == userEmail && passAdmin == userPassword) {
    alert('Bienvenido pepe');
    window.location.href = '../page/compras.html';
    }else{
        alert('user o password incorrecta')
        window.location.href = '../page/error.html';
    }
    
}