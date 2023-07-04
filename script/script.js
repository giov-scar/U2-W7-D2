const textReference = document.getElementById("exampleFormControlInput1");

const saveButton = document.getElementById("save");
const resetButton = document.getElementById("reset");

const save = function () {
  const textContent = textReference.value;
  localStorage.setItem("name-memory", textContent);
  alert("Contenuto salvato!");
};

const reset = function () {
  textReference.value = "";
  localStorage.removeItem("name-memory");
  alert("Nome eliminato");
};

const list = function (valore) {
  const names = document.getElementById("name-list");
  names.textContent = valore;
};

saveButton.addEventListener("click", save);
resetButton.addEventListener("click", reset);

// Funzione per avviare il contatore
function startTimer() {
  let passedTime = sessionStorage.getItem("passedTime");

  // Verifica se il valore è già presente in sessionStorage
  if (passedTime) {
    passedTime = parseInt(passedTime, 10);
  } else {
    passedTime = 0;
  }

  // Incrementa il valore ogni secondo
  setInterval(function () {
    passedTime++;
    sessionStorage.setItem("passedTime", passedTime);

    document.getElementById("contatore").textContent = passedTime;
  }, 1000);
}

startTimer();
