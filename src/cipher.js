const cipher = {
  encode: (offset, string) => {
  if (typeof offset !== 'number'){throw new TypeError("Elige un nivel de seguridad");}
  if (typeof string !== 'string'){throw new TypeError("Escribe el texto");}
    let result="";
      for (let i= 0; i<(string.length); i++){
      let codeAscii = string.charCodeAt(i);
        if (codeAscii >=65 && codeAscii <=90){
          result += String.fromCharCode(((codeAscii-65+offset)%26)+65);
        }
        else {
          result += string[i];
        }
    }
    return result;

  },
  decode: (offset, string) => {
    if (typeof offset !== 'number'){throw new TypeError("Elige un nivel de seguridad");}
    if (typeof string !== 'string'){throw new TypeError("Escribe el texto");}
    let result="";
      for (let i= 0; i<(string.length); i++){
      let codeAscii = string.charCodeAt(i);
        if (codeAscii >=65 && codeAscii <=90){
        result += String.fromCharCode(((codeAscii+65-offset)%26)+65);
        }
        else {
          result+=string[i];
        }
    }
    return result;
  }
};
export default cipher;

