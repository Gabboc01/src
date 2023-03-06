/*il problema è che il for-loop arriva all'ultimo elemento e tiene quel valore dell'indice
 della collection per togliere la riga corrispondente. Come risolvere? Vedremo/
/*
var listButton = document.body.querySelectorAll('.btn');
for(var i = 0; i<listButton.length; i=i+1){
    console.log(i);
    console.log(elem = listButton[i]);
    var par = elem.parentNode.parentNode;
    console.log(par);
}; 
var es = elem.addEventListener("click", () => {
    par.remove();
});
*/
//soluzione//

var listButton = document.body.querySelectorAll('.btn');

for(var i = 0; i<listButton.length; i=i+1){
    listButton[i].addEventListener("click", function(e){
        e.target.parentElement.parentElement.remove();
    })
}; 
/* e sempre per mettere l'argomento come parametro della funzione (callback, richiamo della funzione)
 * target prende solamente l'elemento che subisce l'evento
 */

//xmlhttprequest/

var xhr = new XMLHttpRequest();

xhr.open("GET", "  http://localhost:3000/users/");
xhr.addEventListener("load", function(){
    var users = JSON.parse(xhr.responseText);
    var tbody = document.querySelector("tbody");
    users.forEach(function(user){
        tbody.innerHTML = tbody.innerHTML.concat(
            '<tr class="riga" data-user-id="',user.id,'">', //se voglio classificare le righe, posso dare alla riga un data-attribute come data-user-id= "',user.id,'"/
                    '<td class="user">', user.id, '</td>',
                    '<td class="email">', user.email, '</td>',
                    '<td class="name">', user.name,  '</td>',
                    '<td>',
                        '<button class="btn"> Elimina </button>',
                    '</td>',
                '</tr>'
        )
    });
//se messo fuori non parte/
    var listButton = document.body.querySelectorAll('.btn');

    for(var i = 0; i<listButton.length; i=i+1){
        listButton[i].addEventListener("click", function(e){
            var row = e.target.parentElement.parentElement;
            var xhr = new XMLHttpRequest();
            //queste nuove cose sono chiamate sotto verbo delete per togliere le righe. 200 è la risposta del BackEnd per effettuata cancellazione/
            xhr.open("DELETE","  http://localhost:3000/users/".concat(row.dataset.userId));
            xhr.addEventListener("load", function(){
                if(xhr.status === 200){
                    row.remove()
                } else{
                    console.error("Errore");
                }
            }); 
            xhr.send();
        });
    }; 
});

xhr.send();

