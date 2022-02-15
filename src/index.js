import cipher from './cipher.js';

console.log(cipher);

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    alert("Gracias por su amor y compromiso con el prójimo");
    document.getElementById("ONROUP").style.display="none";
    document.getElementById("section1").style.display="block";
    
    var nombre = document.getElementById("name").value
    document.getElementById("greet").innerHTML = "Hola " + nombre;
  });

  const string= document.getElementById("message1");


    const bot1 = document.getElementById("bnt2");
    bot1.addEventListener('click',( ) => {
      const cifrador = cipher.encode;
console.log(cifrador);
      return cifrador;
    });

    const bot2 = document.getElementById("bnt3");
    bot2.addEventListener('click',( ) => {
      const descifrador = cipher.decode;
      return descifrador;
    });
 
 //addEventListener("click",//FUNCION)