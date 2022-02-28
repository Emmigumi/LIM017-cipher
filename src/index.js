import cipher from './cipher.js';

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    alert("Gracias por su amor y compromiso con el prójimo");
    document.getElementById("ONROUP").style.display="none";
    document.getElementById("section1").style.display="block";

    var textName = document.getElementById("name").value
    document.getElementById("greet").innerHTML = "Hola " + textName;
  });

  document.getElementById('btn2').addEventListener("click",function() {
    let string= document.getElementById("message1").value;
    let offset= parseInt(document.getElementById("desplazamiento").value);
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

    function selectText() {
      let Text = document.getElementById("message2");
      return Text.select();
    }

    document.getElementById("btn4").addEventListener("click", () => {
      selectText();
    });

  function toUpDate() {
  let restart = document.location.reload();
  return restart;
}
document.getElementById("btn6").addEventListener("click", function(){
toUpDate();
});
