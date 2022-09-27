import cipher from './cipher.js';

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    document.getElementById("ONROUP").style.display="none";
    document.getElementById("section1").style.display="block";

    var textName = document.getElementById("name").value
    document.getElementById("greet").innerHTML = "Hola " + textName;
  });

  document.getElementById('cifrar').addEventListener("click",function() {
    let string= document.getElementById("add-text").value;
    let offset= parseInt(document.getElementById("desplazamiento").value);
    document.getElementById('resultado').value= cipher.encode(offset, string);
  });

  document.getElementById("add-text").addEventListener("keyup",function(){
    this.value = this.value.toUpperCase();
  },true);

  document.getElementById("descifrar").addEventListener("click",function() {
    let string = document.getElementById("add-text").value;
    let offset= parseInt(document.getElementById("desplazamiento").value);
    document.getElementById("resultado").value= cipher.decode(offset, string);
    });

    function selectText() {
      document.getElementById('add-text').value = document.getElementById('resultado').value;
    }

    document.getElementById("copiar").addEventListener("click", () => {
      selectText();
      document.getElementById('resultado').select();
    });

  function toUpDate() {
  let restart = document.querySelectorAll('.texts');
  for(let i =0; i< restart.length; i++){
    restart[i].value="";
  }
  return restart;
}

document.getElementById("limpiar").addEventListener("click", function(){
toUpDate();
});
