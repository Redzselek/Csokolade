var csokik = [
    {
        nev: "Milka",
        kep: "Milka.png",
        kiszereles: "100g",
        orszag: "Német"
    },
    {
        nev: "MrBeast Csokis",
        kep: "MrBeast.png",
        kiszereles: "100g",
        orszag: "USA"
    },
    {
        nev: "Boci",
        kep: "Boci.png",
        kiszereles: "100g",
        orszag: "Magyarország"
    },
    {
        nev: "RizsCsoki",
        kep: "RizsCsoki.png",
        kiszereles: "100g",
        orszag: "250g"
    },
    {
        nev: "Bere Nándi",
        kep: "berenandi.png",
        kiszereles: "70kg",
        orszag: "Magyarország"
    }
]

var kep = 0;

Kirajzol = (t, x) => {
    var s = "";
    s = "<img class=' animate__animated animate__slideInLeft  w-100' src='assets/images/"+t[x].kep+"'>"
    s += "<h1 class='animate__animated animate__fadeInLeft'>"+t[x].nev+"</h1>"
    s += "<p class='animate__animated animate__fadeInRight'>"+t[x].kiszereles+"</p>"
    s += "<p class='orszag'>"+t[x].orszag+"</p>"
    document.getElementById("kep").innerHTML = s
/*     document.getElementById("kep").style.display = "none"
    document.getElementById("kep").style.display = "block" */

    
}

Kirajzol(csokik,kep)

const Lapoz =(irany) => {
    kep += irany
    if (kep<0) {
        kep = csokik.length-1
    }
    else if (kep == csokik.length)
    {
        kep = 0
    }
    Kirajzol(csokik, kep)
}