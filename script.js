"use strict";
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const bnt = document.querySelector("button");

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch" },
  //   { name: "Bosch 2000", link: "/hvidevarer/vaskemaskiner/bosch/bosch_2000" },
  //hvis der tilføjes flere items til dette array, bliver de blot tilføjet til breadcrumb-stien. Ligesom hvis man klikkede yderligere ind på en hjemmeside og der derved blev tilføjet flere krummer.
];

bnt.addEventListener("click", breadcrumbsGen);

function breadcrumbsGen() {
  //   console.log("breadcrumbs");
  bnt.removeEventListener("click", breadcrumbsGen);
  bnt.addEventListener("click", removeBread);
  nav.classList.remove("hide");
  nav.classList.add("show");

  bnt.textContent = "Remove breadcrumbs";

  bc.forEach((each) => {
    if (each === bc[bc.length - 1]) {
      ul.innerHTML += `<li>${each.name}</li>`;
    } else {
      ul.innerHTML += `<li><a href="${each.link}">${each.name}</a></li><p>/</p>`;
    }
    //bc[bc.length-1] = Dette viser det sidste item i vores array, da bc.length giver længden på vores array, hvilket er ligmed 3 originalt.
    //Herefter trækker vi 1 fra, da dette så vil give 2, hvilket er den sidste items pladsnummer. Og sådan vil det altid være lige meget hvor mange items, der bliver tilføjet til vores array.
    //Så hvis vores forEach bliver kørt med det sidste item, så skal den ikke lave det til et link.
  });
}

function removeBread() {
  nav.classList.add("hide");
  ul.innerHTML = "";
  bnt.textContent = "Generate breadcrumbs";
  bnt.removeEventListener("click", removeBread);
  bnt.addEventListener("click", breadcrumbsGen);
}
//removeBread() er blot en funktion, der fjerner stien igen. Bare for sjovt, så der efter der første gang er blevet trykket på knappen ikke er en ubruglig knap og så det hele kan ske igen uden at reloade siden :-)
