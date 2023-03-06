
function fattoriale(num){
    if(num>1){ 
        return num*fattoriale(num-1);
    } 
    return num;
}

console.log(fattoriale(3));