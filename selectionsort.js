// const btn = document.querySelector(".startbutton");
// const div = document.querySelector(".pdiv");

// const sleep = (time) => {
//   return new Promise((resolve) => setTimeout(resolve, time));
// };

// function selectionSort(arr) {

//   const n = arr.length;
//   const sortInterval = setInterval(() => {
//     for (let i = 0; i < n - 1; i++) {
//       let minIndex = i;
  
//       for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }
  
//       if (minIndex !== i) {
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//       }
//       updateBars(arr, i, n - i);
//     }
//   }, 1000); 
// }

// btn.addEventListener("click", () => {
//   const inputList = document
//     .querySelector("#inputList")
//     .value.split(",")
//     .map(Number);
//   selectionSort(inputList);
// });

// function updateBars(arr, currentIndex, lastIndex) {
//   div.innerHTML = "";

//   for (let i in arr) {
//     let newElement = document.createElement("div");
//     newElement.classList.add("bar");
//     newElement.style.height = `${(arr[i] / 50) * 400}px`;
//     if (i == currentIndex) {
//       newElement.style.backgroundColor = "red";
//     }
//     console.log(i, lastIndex);
//     if (i == lastIndex - 1) {
//       newElement.style.backgroundColor = "green";
//     }
//     div.appendChild(newElement);
//   }
// }

// const startButton = document.querySelector("#startButton");
// const pauseButton = document.querySelector("#pauseButton");
// const stopButton = document.querySelector("#stopButton");
// const inputList = document.querySelector("#inputList");

// startButton.addEventListener("click", () => {
//   const values = inputList.value.split(",").map(Number);
//   selectionSort(values);
// });

// pauseButton.addEventListener("click", () => {

// });

// stopButton.addEventListener("click", () => {

// });


const btn = document.querySelector(".startbutton");
const div = document.querySelector(".pdiv");

let sortInterval;

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

function selectionSort(arr) {
  const n = arr.length;
  let i = 0;
  let j = 0;

  sortInterval = setInterval(() => {
    if (i < n - 1) {
      let minIndex = i;

      for (j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        updateBars(arr, i, n - i, minIndex);
      }
      i++;
    } else {
      clearInterval(sortInterval);
    }
  }, 3000);
}

btn.addEventListener("click", () => {
  const inputList = document
    .querySelector("#inputList")
    .value.split(",")
    .map(Number);
  selectionSort(inputList);
});

function updateBars(arr, currentIndex, lastIndex, minIndex) {
  div.innerHTML = "";

  for (let i in arr) {
    let newElement = document.createElement("div");
    newElement.classList.add("bar");
    newElement.style.height = `${(arr[i] / 50) * 400}px`;

    if (i == currentIndex) {
      newElement.style.backgroundColor = "red";
    } else if (i == minIndex) {
      newElement.style.backgroundColor = "blue";
    }

    if (i == lastIndex - 1) {
      newElement.style.backgroundColor = "green";
    }
    div.appendChild(newElement);
  }
}

const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const stopButton = document.querySelector("#stopButton");
const inputList = document.querySelector("#inputList");

startButton.addEventListener("click", () => {
  const values = inputList.value.split(",").map(Number);
  selectionSort(values);
});

pauseButton.addEventListener("click", () => {
  clearInterval(sortInterval);
});

stopButton.addEventListener("click", () => {
  clearInterval(sortInterval);
  div.innerHTML = "";
});
