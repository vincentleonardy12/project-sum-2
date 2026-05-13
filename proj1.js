document.getElementById('tampil').onclick = function() {
var nama = document.getElementById('name').value.trim().toLowerCase();
var kelas = document.getElementById('class').value.trim().toLowerCase();
var cca = document.getElementsByName('cca');
var jadwal = document.getElementsByName('jadwal');
var listCCA = "";
for (var i = 0; i < cca.length; i++) {
if (cca[i].checked) {
listCCA += cca[i].value + " ";
}
}
var listJadwal = "";
for (var i = 0; i < jadwal.length; i++) {
if (jadwal[i].checked) {
listJadwal = jadwal[i].value;
}
}
document.getElementById('hasil').className = "kotak2";
document.getElementById('hasil').innerText =
"Name: " + nama + "\n" +
"Class: " + kelas + "\n" +
"CCA: " + listCCA + "\n" +
"Schedule: " + listJadwal;
document.getElementById('name').value = "";
document.getElementById('class').value = "";
for (var i = 0; i < cca.length; i++) {
cca[i].checked = false;
}
for (var i = 0; i < jadwal.length; i++) {
jadwal[i].checked = false;
}
};
document.getElementById('reset').onclick = function() {
document.getElementById('name').value = "";
document.getElementById('class').value = "";
var cca = document.getElementsByName('cca');
for (var i = 0; i < cca.length; i++) {
cca[i].checked = false;
}
var jadwal = document.getElementsByName('jadwal');
for (var i = 0; i < jadwal.length; i++) {
jadwal[i].checked = false;
}
document.getElementById('hasil').innerText = "";
document.getElementById('hasil').className = "";
};
var menuItems = document.querySelectorAll(".menu ul li");

menuItems.forEach(function(item) {
    item.addEventListener("click", function(e) {
        var submenu = this.querySelector(".submenu");
        if (submenu) {
            submenu.style.display =
                submenu.style.display === "flex" ? "none" : "flex";
            e.stopPropagation();
        }
    });
});
document.getElementById("teacherMenu").onclick = function() {
    document.querySelector(".kotak").style.display = "none"; // hide student form
    document.getElementById("teacherForm").style.display = "block";
};