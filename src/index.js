import "./style.css";
import Search from "./components/search";
import { checkEstadoClima } from "./funcoes/tema";
import { getData } from "./funcoes/api";

const main = document.querySelector("main");
const search = Search();
search.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = e.target.querySelector("input").value;
  getData(location).then((data) => {
    checkEstadoClima(data.current.is_day, data.current.condition.text);
    console.log(data);
  });
});
main.appendChild(search);
