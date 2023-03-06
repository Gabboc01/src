form.addEventListener('submit',function(e) {  //intercettare il submit
    e.preventDefault();
    e.stopPropagation();    //bloccare comportamento default
    console.log(valoreemail.value);
    console.log(valorepassword.value);  //prendere il valore presente nel campo imput
});


