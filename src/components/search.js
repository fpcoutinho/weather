const search = () => {
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Pesquisar");
  const searchIcon = document.createElement("button");
  searchIcon.setAttribute("type", "submit");
  searchIcon.setAttribute("id", "btn-search");
  searchIcon.innerHTML = `<span class="material-symbols-outlined">search</span>`;
  searchBar.appendChild(searchInput);
  searchBar.appendChild(searchIcon);

  return searchBar;
};

export default search;
