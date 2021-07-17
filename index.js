const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const items = document.querySelectorAll(".lista li")

  items.forEach(el => el.remove())

  cosasQueAprendimos.map((obj) => {
    const lista = document.querySelector(".lista")
    const newLi = document.createElement("li")
    newLi.textContent = obj.tema

    if (obj.class != "") {
      newLi.classList.add(obj.class)
    } 
    
    return lista.appendChild(newLi)
  })
}

main();
