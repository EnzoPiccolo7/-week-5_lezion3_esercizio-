let form1 = [];

function Dati(nome, cognome,citta) {
    this.nome = nome;
    this.cognome = cognome;
    this.citta = citta;
}

let addbutton = document.querySelector('#myForm button');

addbutton.onclick = function() {
    let nome = document.querySelector('#myForm input[name="nome"]');
    let cognome = document.querySelector('#myForm input[name="cognome"]');
    let citta = document.querySelector('#myForm input[name="citta"]');
    let obj = new Dati(nome.value, cognome.value, citta.value);
    form1.push(obj);
    nome.value = '';
    cognome.value = '';
    citta.value = '';
    stampa();

}

function stampa(){
    let ol = document.querySelector('#list ol')
    ol.innerHTML = '';
    form1.forEach((u) => {
        let li = document.createElement('li');
        li.innerHTML = u.nome + ' '+ u.cognome + ' ' + u.citta;
        ol.appendChild(li);
    })
    
}




