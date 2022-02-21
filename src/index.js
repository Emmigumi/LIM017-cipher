import cipher from './cipher.js';

/* console.log(cipher); */


const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    alert("Gracias por su amor y compromiso con el prójimo");
    document.getElementById("ONROUP").style.display="none";
    document.getElementById("section1").style.display="block";
    
    var nombre = document.getElementById("name").value
    document.getElementById("greet").innerHTML = "Hola " + nombre;
  });
  
  document.getElementById('btn2').addEventListener("click",function() {
    let string= document.getElementById("message1").value;
    /* console.log(string); */
    let offset= parseInt(document.getElementById("desplazamiento").value);
    /* console.log(offset); */
    document.getElementById('message2').value= cipher.encode(offset, string);
  });
   
  
  document.getElementById("message1").addEventListener("keyup",function(){
    this.value = this.value.toUpperCase();
  },true);
   
    
  document.getElementById("btn3").addEventListener("click",function() {
    let string = document.getElementById("message1").value;
    let offset= parseInt(document.getElementById("desplazamiento").value);
    document.getElementById("message2").value= cipher.decode(offset, string);
    });  

    function seleccionarTexto() {
      let Texto = document.getElementById("message2");
      let desde = Texto.selectionStart;
      let hasta = Texto.selectionEnd;
      let sel = Texto.value.substring(desde, hasta);
    
      if (sel.length > 0) {// si hay algo seleccionado
        return sel;
      } else { // de lo contrario selecciona todo el texto
        return Texto.select();
      }
    }
    
    document.getElementById("btn4").addEventListener("click", () => {
      
      seleccionarTexto();
    
      try {
        let exito = document.execCommand("copy"); // devuelve true o false
        let msg = exito ? "\xe9xito" : "error";
        return "Hay "+ msg;
       /*  console.log("Hay " + msg); */
      } catch (error) {
        let err = error;
        return err + " No fue posible copiar el texto seleccionado";
       /*  console.log("No fue posible copiar el texto seleccionado!"); */
      }
    });

 function Actualizar() {
   let reiniciar = document.location.reload();
   return reiniciar;
  /*  console.log(reiniciar); */
 }
 document.getElementById("btn5").addEventListener("click", function(){
   Actualizar();
 });
     
