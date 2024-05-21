//Haz tú validación en javascript acá
const nombre=document.querySelector(".input__nombre");
const email=document.querySelector(".input__email");
const asunto=document.querySelector(".input__asunto");
const mensaje=document.querySelector(".input__mensaje");


function submitMail(e){
    e.preventDefault();
    
    Email.send({
        SecureToken : "33942b7e-dd2c-4759-bc70-b4c5a629f34b",
        To : 'angelajaraespinoza@gmail.com',
        From : "angelajaraespinoza@gmail.com",
        Subject : `Form submitted: ${asunto.value}`,
        Body : `<strong>Email:</strong> ${email.value}<br/>
                <strong>Nombre:</strong> ${nombre.value}<br/>
                <strong>Mensaje:</strong> ${mensaje.value}`
    }).then(
      message => alert(message)
    );
}
