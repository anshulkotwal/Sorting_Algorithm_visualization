let btn = document.querySelector(".startbutton");
let div = document.querySelector(".pdiv");
let inputList = document.querySelector("#inputList");

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

btn.addEventListener("click", async () => {
  const inputValues = inputList.value.split(",").map(Number);
  await radixSort(inputValues);
});

async function radixSort(arr) {
  const max = Math.max(...arr);
  const maxDigitCount = max.toString().length;

  for (let digitPlace = 1; digitPlace <= maxDigitCount; digitPlace++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      const digit = Math.floor(arr[i] / Math.pow(10, digitPlace - 1)) % 10;
      buckets[digit].push(arr[i]);
    }

    arr = buckets.flat();
    updateBars(arr);
    await sleep(1000);
  }
}

function updateBars(arr) {
  const div = document.querySelector(".pdiv");
  div.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let newElement = document.createElement("div");
    let h3 = document.createElement("h3");
    newElement.classList.add("bar");
    h3.textContent = arr[i];
    newElement.appendChild(h3);
    newElement.style.height = `${(arr[i] / 50) * 400}px`;

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
