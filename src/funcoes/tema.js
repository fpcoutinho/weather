const checkEstadoClima = (isday, estado) => {
  const root = document.documentElement;
  if (isday) {
    root.className = "light";
  } else {
    root.className = "dark";
  }
  //depois checar o estado do clima e mudar o bg de acordo
};

export { checkEstadoClima };
