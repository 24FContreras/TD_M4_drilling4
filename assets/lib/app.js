"use strict";

console.log("🟢 Connected!");

var checkboxes = document.querySelectorAll("input[type=checkbox]");
var inputs = document.querySelectorAll("input[type=text]");

var tareasSet = new Set();
var checkSet = new Set();

var updateSets = function updateSets(inputs) {
  tareasSet.clear();
  checkSet.clear();

  inputs.forEach(function (input) {
    if (input.value.trim()) {
      tareasSet.add(input.value);
      checkSet.add(input.name);
    }
  });
};

inputs.forEach(function (input) {
  input.addEventListener("change", function (e) {
    if (tareasSet.has(e.target.value)) {
      alert("Esta tarea ya existe");
      return;
    }

    updateSets(inputs);
  });
});

//EL DOCUMENTO DEL DRILLING SE MOSTRABA QUE SE REALIZABA FORMA INDIVIDUAL AL MARCAR CADA CASILLA, ASÍ QUE LO IMPLEMENTÉ DE ESA FORMA
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function (e) {
    var tareasArray = Array.from(tareasSet);
    var checkArray = Array.from(checkSet);

    if (checkSet.has(e.target.dataset.tarea) && checkbox.checked) {
      var index = checkArray.findIndex(function (item) {
        return item === checkbox.dataset.tarea;
      });

      var mapa = new Map();
      mapa.set(checkbox.dataset.tarea, tareasArray[index]);
      console.log(mapa);
    }
  });
});