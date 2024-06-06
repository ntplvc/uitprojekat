function ucitajIme()
{
    const osoba = JSON.parse(sessionStorage.getItem('osoba'));
    console.log(osoba);

    const h1 = document.getElementById('dobrodoslica');
    console.log(osoba.ime);
    h1.textContent = (`Zdravo, ${osoba.ime}!`);
}

function prikaziMeni() {
    document.getElementById('meni').style.display = 'block'
    document.getElementById('meni').style.opacity = '1';
}

function linkuj()
{
        let dpMeni = document.getElementById("dropdown");
        let izabrano = dpMeni.options[dpMeni.selectedIndex].value;
        switch (izabrano) {
            case "mars":
                url = "../../html/sadrzaj/mars.html";
                break;
            case "mesec":
                url = "../html/sadrzaj/mesec.html";
                break;
            case "jupiter":
                url = "../../html/sadrzaj/jupiter.html";
                break;
            case "zvezde":
                url = "../../html/sadrzaj/zvezde.html";
                break;
            case "magline":
                url = "../../html/sadrzaj/magline.html";
                break;
            case "crne-rupe":
                url = "../../html/sadrzaj/crneRupe.html";
                break;
            case "kvazari":
                url = "../../html/sadrzaj/kvazari.html";
                break;
            case "galaksije":
                url = "../../html/sadrzaj/galaksije.html";
                break;
            default:
                url = "";
        }
        window.location.href = url;
}