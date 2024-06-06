function zapamtiImePrezime()
{
    const osoba = {}
    osoba.ime = document.getElementById('ime').value;
    osoba.prezime = document.getElementById('prezime').value;

    if (osoba.ime === '' || osoba.prezime ==='' )  {
        window.open('nemaIme.html', '_blank');
    }

    else {
        sessionStorage.setItem('osoba', JSON.stringify(osoba));
        console.log(osoba);
        window.open('stablo.html', '_blank');
    }
}