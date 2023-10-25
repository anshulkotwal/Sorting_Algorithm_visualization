let btn = document.querySelector(".startbutton");
let div = document.querySelector(".pdiv");
let inputList = document.querySelector("#inputList");

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

btn.addEventListener("click", async () => {
  const inputValues = inputList.value.split(",").map(Number);
  await mergeSort(inputValues, 0, inputValues.length - 1);
});

async function mergeSort(arr, left, right) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);

    await mergeSort(arr, left, mid);
    await mergeSort(arr, mid + 1, right);
    await merge(arr, left, mid, right);
    updateBars(arr, left, right);
    await sleep(1000);
  }
}

async function merge(arr, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;
  const L = new Array(n1);
  const R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
  }

  let i = 0,
    j = 0,
    k = left;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}
function updateBars(arr, left, right) {
  const div = document.querySelector(".pdiv");
  div.innerHTML = "";

  setTimeout(() => {
    for (let i = left; i <= right; i++) {
      let newElement = document.createElement("div");
      let h3 = document.createElement("h3");
      newElement.classList.add("bar");
      h3.textContent = arr[i];
      newElement.appendChild(h3);
      newElement.style.height = `${(arr[i] / 50) * 400}px`;
      div.appendChild(newElement);
    }
  }, 500);
}
pauseButton.addEventListener("click", () => {
  clearInterval(sortInterval);
});
stopButton.addEventListener("click", () => {
  clearInterval(sortInterval);
  div.innerHTML = "";
});
