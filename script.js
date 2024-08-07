document.querySelector("form").onsubmit = function() {

  let suche = document.querySelector("input").value;
  if (suche.length < 3) {
    alert("zu kurzer Suchbegriff");
  } else {
    alert("Suche nach: " + suche);
  }
  return false;
}

const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", (event) => {
  const value = event.target.value
  console.log(value)
})

fetch("https://jsonplaceholder.typicode.com/posts")