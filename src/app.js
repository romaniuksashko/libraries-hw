import { info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});
import { Stack } from '@pnotify/core';


import Chart from 'chart.js/auto';

// 1 Завдання


const result = document.querySelector(".result");
const key = document.getElementById("key");
const newGameBtn = document.querySelector(".new-game");


const keys = ["T", "L", "M", "H", "E", "P", "Q", "C", "X", "J"];
function randomNumber() {
  return Number.parseInt(Math.random() * (9 - 0) + 0);
}
let currentKeyIndex = 0;


let currentRandomKey = keys[randomNumber()];
key.textContent = currentRandomKey;


window.addEventListener("keydown", onKeyClicked);
window.addEventListener("keypress", (event) => {
  event.preventDefault();
})

newGameBtn.addEventListener("click", () => {
  currentKeyIndex = 0;
  result.textContent = currentKeyIndex;

  info({
    text: "Ви почали нову гру",
    stack: new Stack({
      dir1: "down",
      dir2: "left",
      context: document.querySelector(".notices"),
    }),
  });
})


function onKeyClicked (event) {
  if (event.code === "Key" + currentRandomKey) {
    currentKeyIndex += 1;
    result.textContent = currentKeyIndex;

    success({
      text: "Правильно натиснули",
      stack: new Stack({
        dir1: "down",
        dir2: "left",
        context: document.querySelector(".notices"),
      }),
    });

    currentRandomKey = keys[randomNumber()];
    key.textContent = currentRandomKey;
  } else {
    error({
      text: "Неправильно натиснули",
      stack: new Stack({
        dir1: "down",
        dir2: "left",
        context: document.querySelector(".notices"),
      }),
    })
  }
}

// 2 Завдання


const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "line",
  data: chartData,
  options: {}
};

const salesChart = new Chart(document.getElementById("sales-chart"), config);
console.log(salesChart);
