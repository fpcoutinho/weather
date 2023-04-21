import "./style.css";
import { checkEstadoClima } from "./funcoes/tema";

const main = document.querySelector("main");

async function getData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=6114bfb8a14348b0a38113643232004&q=${location}&aqi=yes`
  );
  const data = await response.json();
  return data;
}

getData("Cabedelo").then((data) => {
  checkEstadoClima(data.current.is_day, data.current.condition.text);
  console.log(data);
  main.textContent = JSON.stringify(data);
});
