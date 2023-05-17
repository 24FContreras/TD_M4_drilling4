console.log("🟢 Connected!");

const checkboxes = document.querySelectorAll("input[type=checkbox]");
const inputs = document.querySelectorAll("input[type=text]");

let tareasSet = new Set();
let checkSet = new Set();

const updateSets = (inputs) => {
  tareasSet.clear();
  checkSet.clear();

  inputs.forEach((input) => {
    if (input.value.trim()) {
      tareasSet.add(input.value);
      checkSet.add(input.name);
    }
  });
};

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    if (tareasSet.has(e.target.value)) {
      alert("Esta tarea ya existe");
      return;
    }

    updateSets(inputs);
  });
});

//EL DOCUMENTO DEL DRILLING SE MOSTRABA QUE SE REALIZABA FORMA INDIVIDUAL AL MARCAR CADA CASILLA, ASÍ QUE LO IMPLEMENTÉ DE ESA FORMA
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    const tareasArray = Array.from(tareasSet);
    const checkArray = Array.from(checkSet);

    if (checkSet.has(e.target.dataset.tarea) && checkbox.checked) {
      const index = checkArray.findIndex(
        (item) => item === checkbox.dataset.tarea
      );

      let mapa = new Map();
      mapa.set(checkbox.dataset.tarea, tareasArray[index]);
      console.log(mapa);
    }
  });
});
