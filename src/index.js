import cipher from './cipher.js';

console.log(cipher);

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    alert("Gracias por su amor y compromiso con el prójimo");
    document.getElementById("section1").style.display="none";
    document.getElementById("section2").style.display="block";

  });

  const empezar = () => {
    document.getElementById("root").className = "page1";
    document.getElementById("section1").className = "page1";
    
    };
    
  //var string= document.getElementById("message").charCodeAt() 
