// document.writeln("<p>saya sedang belajar dom </p>");
// document.writeln("<h2>semoga harimu menyenangkan</h2>");

let judul = document.getElementById("judul");
judul.style.backgroundColor = "gold";
judul.style.textAlign = "center";
judul.style.borderRadius = "4px";
judul.style.padding = "4px";

// select paragraf
let paragraf = document.getElementsByClassName("paragraf");
paragraf[0].style.backgroundColor = "red";
paragraf[1].style.backgroundColor = "gold";
paragraf[2].style.backgroundColor = "green";
setTimeout(() => {
  for (let i = 0; i <= paragraf.length; i++) {
    paragraf[i].style.backgroundColor = "black";
    paragraf[i].style.color = "white";
  }
}, 2000);

let element = document.createElement("h1");
element.textContent = "pekerjaan saya adalah";
document.body.append(element);

setTimeout(() => {
  element.style.color = "gold";
}, 3000);
