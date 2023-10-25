let btn = document.querySelector(".startbutton");
let inputList = document.querySelector("#inputList");
const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

btn.addEventListener("click", async () => {
  const inputValues = inputList.value.split(",").map(Number);
  await insertionSort(inputValues);
});

async function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      updateBars(arr, j + 1);
      await sleep(1000);
      j--;
    }
    arr[j + 1] = key;
    updateBars(arr, j + 1);
    await sleep(1000);
  }
}

function updateBars(arr, index) {
  const div = document.querySelector(".pdiv");
  div.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let newElement = document.createElement("div");
    let h3 = document.createElement("h3");
    newElement.classList.add("bar");
    h3.textContent = arr[i];
    newElement.appendChild(h3);
    newElement.style.height = `${(arr[i] / 50) * 400}px`;

    if (i === index) {
      newElement.style.backgroundColor = "yellow";
    }

    div.appendChild(newElement);
  }
}
pauseButton.addEventListener("click", () => {
  clearInterval(sortInterval);
});
stopButton.addEventListener("click", () => {
  clearInterval(sortInterval);
  div.innerHTML = "";
});
