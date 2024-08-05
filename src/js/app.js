/* ======================================================================
                            VARIABLES
====================================================================== */

const inputBill = document.querySelector("#bill");
const inputPeople = document.querySelector("#people");
const inputCustom = document.querySelector("#custom");
const btnsTip = document.querySelectorAll(".btn");
const btnReset = document.querySelector("#btnReset");
const alert = document.querySelector("#alert");

const resultTipValue = document.querySelector("#resultTipValue");
const resultTotalValue = document.querySelector("#resultTotalValue");

const values = {
  bill: inputBill.value,
  tip: 5,
  people: inputPeople.value,
};

/* ======================================================================
                            EVENT LISTENERS
====================================================================== */

btnsTip.forEach((btnTip) => {
  btnTip.addEventListener("click", function () {
    // Eliminar el estado activo de los botones
    removeActive();

    // Agregar clase de activo al boton seleccionado
    this.classList.add("btn-active");

    // Guardar valor del boton seleccionado
    values.tip = parseInt(this.textContent.slice(0, -1));

    // Calcular Tip Amount y Total
    calculate();
  });
});

// Actualizar BILL
inputBill.addEventListener("input", function () {
  values.bill = parseFloat(this.value);

  if (!isNaN(values.bill)) {
    calculate();
  }
});

// Actualizar CUSTOM TIP
inputCustom.addEventListener("click", function () {
  // Eliminar el estado activo de los botones
  removeActive();
});
inputCustom.addEventListener("input", function () {
  // Actualizar valor de TIP
  values.tip = parseFloat(this.value);

  if (!isNaN(this.value)) {
    calculate();
  }
});

// Actualizar personas
inputPeople.addEventListener("input", function () {
  values.people = parseInt(this.value);

  if (values.people == 0 || isNaN(values.people)) {
    // Mostrar Alerta
    showAlert(inputPeople);
  } else {
    // Quitar Alerta
    cleanAlert(inputPeople);
    // Calcular resultado
    calculate();
  }
});

// Boton de reiniciar valores
btnReset.addEventListener("click", function () {
  // Resetear valores del objeto
  values.bill = 0;
  values.tip = 5;
  values.people = 1;

  // Resetear inputs
  inputBill.value = 0;
  inputCustom.value = 0;
  inputPeople.value = 1;
  resultTipValue.textContent = "$0.00";
  resultTotalValue.textContent = "$0.00";
  calculate();
});

/* ======================================================================
                            FUNCIONES
===================================================================== */

function removeActive() {
  btnsTip.forEach((btnTip) => {
    btnTip.classList.remove("btn-active");
  });
}

function reset() {}

function calculate() {
  // Desfragmentamos objeto
  const { bill, tip, people } = values;
  // Calcular Tip Amount
  resultTipValue.innerText = `$${((bill * tip) / 100 / people).toFixed(2)}`;

  // Calcular Total
  resultTotalValue.innerText = `$${(
    ((bill * tip) / 100 + bill) /
    people
  ).toFixed(2)}`;
}

function showAlert(reference) {
  alert.textContent = "Can`t be zero";

  reference.classList.remove("border-none");
  reference.classList.add("border-[2px]", "border-[#CA8073]");

  reference.previousElementSibling.classList.remove("block");
  reference.previousElementSibling.classList.add(
    "flex",
    "justify-between",
    "w-full"
  );
}

function cleanAlert(reference) {
  alert.textContent = "";

  reference.classList.add("border-none");
  reference.classList.remove("border-[2px]", "border-[#CA8073]");

  reference.previousElementSibling.classList.add("block");
  reference.previousElementSibling.classList.remove(
    "flex",
    "justify-between",
    "w-full"
  );
}
