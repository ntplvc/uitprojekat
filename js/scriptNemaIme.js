function errorLista() 
{
        let ul = document.getElementById('errorUl');
        let li = document.createElement('li');
        li.textContent = 'GREŠKA';
        ul.appendChild(li);
}
setInterval(errorLista, 20);