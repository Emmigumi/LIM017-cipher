const cipher = {
  encode: (offset, string) => {
    for (let i= 0; i<(string.length); i++) {
      let asciiPosition = string.charCodeAt(i);
      let enCodexString = (asciiPosition-65 + offset) %26 + 65;
      let result = String.fromCharCode(enCodexString);
    };
    let desplazamiento= document.getElementById("offset1");
    return result;
    }, 
  decode: (offset, string) => {
    for (let i= 0; i<(string.length); i++) {
      let asciiPosition = string.charCodeAt(i);
      let enCodexString = (asciiPosition-65 + offset) %26 + 65;
      let result = String.fromCharCode(enCodexString);
      
    };
    let desplazamiento = document.getElementById("ofsset1");
    return result;
  },
};

  //decode()

export default cipher;

