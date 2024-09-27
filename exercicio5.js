function inverterString(str){
    let res = "";

    for(let i = str.length - 1; i>=0; i--){
        res += str[i];
    }

    return res;
}

const strDef = "Olá Mundo!";

const strInv = inverterString(strDef);
console.log(`String original: ${strDef}`); 
console.log(`String invertida: ${strInv}`); 