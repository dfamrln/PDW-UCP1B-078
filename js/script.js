let anggota = [
    { nama: "Andi", email: "andi@gmail.com", minat: "Web Development" },
    { nama: "Budi", email: "budi@gmail.com", minat: "Cyber Security" },
    { nama: "Citra", email: "citra@gmail.com", minat: "UI/UX Design" }
];

function tampilkanAnggota() {

    let tabel = document.getElementById("tabelAnggota");

    if (!tabel) return;

    anggota.forEach(a => {

        let row = tabel.insertRow();

        row.insertCell(0).innerHTML = a.nama;
        row.insertCell(1).innerHTML = a.email;
        row.insertCell(2).innerHTML = a.minat;

    });

}

window.onload = tampilkanAnggota;

function tambahAnggota(event) {

    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let minat = document.getElementById("minat").value;

    let data = {
        nama: nama,
        email: email,
        minat: minat
    };

    anggota.push(data);

    alert("Data berhasil ditambahkan!");

    document.getElementById("hasil").innerHTML =
        "Nama: " + nama + "<br>Email: " + email + "<br>Minat: " + minat;

}

let gambarList = [
    "https://picsum.photos/400",
    "https://picsum.photos/401",
    "https://picsum.photos/402",
    "https://picsum.photos/403"
];

let index = 0;

function gantiGambar() {

    index++;

    if (index >= gambarList.length) {
        index = 0;
    }

    document.getElementById("gambar").src = gambarList[index];

}

function playAudio() {
    document.getElementById("audio").play();
}

function pauseAudio() {
    document.getElementById("audio").pause();
}   