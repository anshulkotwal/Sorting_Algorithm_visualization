let btn = document.querySelector(".startbutton");
let div = document.querySelector(".pdiv");

// let isSortingPaused = false;
// function pauseSorting() {
//   isSortingPaused = !isSortingPaused;
// }

function bblSort(arr) {
  let i = 0;
  let j = 0;
  const n = arr.length;
  const sortInterval = setInterval(() => {
    if (i < n) {
      if (j < n - i - 1) {
        if (isSortingPaused) return;
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          updateBars(arr, j, n - i);
        }
        j++;
      } else {
        i++;
        j = 0;
      }
    } else {
      clearInterval(sortInterval);
    }
  }, 1000);
}

let inputList = document.querySelector("input");

btn.addEventListener("click", () => {
  inputList = inputList.value.split(",").map(Number);
  bblSort(inputList);
});

function updateBars(arr, index, lastIndex) {
  const div = document.querySelector(".pdiv");
  div.innerHTML = "";

  for (let i in arr) {
    let newElement = document.createElement("div");
    let h3 = document.createElement("h3");
    newElement.classList.add("bar");
    h3.textContent = arr[i];
    newElement.appendChild(h3);
    newElement.style.height = `${(arr[i] / 50) * 400}px`;
    console.log(i, lastIndex);
    if (i == index || i == index + 1) {
      newElement.style.backgroundColor = "yellow";
    }
    div.appendChild(newElement);
  }
}

