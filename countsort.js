let btn = document.querySelector(".startbutton");
let div = document.querySelector(".pdiv");
let inputList = document.querySelector("#inputList");

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

btn.addEventListener("click", async () => {
  const inputValues = inputList.value.split(",").map(Number);
  await countSort(inputValues);
});

async function countSort(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;

  const count = new Array(range).fill(0);
  const output = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
    updateBars(output, i);
    await sleep(1000);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
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
