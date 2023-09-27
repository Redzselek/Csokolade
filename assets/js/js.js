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
        nev: "",
        kep: "Boci.png",
        kiszereles: "100g",
        orszag: "Magyarország"
    }
]

var kep = 0;

Kirajzol = (t, x) => {
    var s = "";
    s = "<img class='w-100' src='assets/images/"+t[x].kep+"'>"
    s += "<h1>"+t[x].nev+"</h1>"
    s += "<p>"+t[x].kiszereles+"</p>"
    s += "<p class='orszag'>"+t[x].orszag+"</p>"
    document.getElementById("kep").innerHTML = s
}

Kirajzol(csokik,kep)
