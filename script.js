document.querySelector("form").onsubmit = function() {

  let suche = document.querySelector("input").value;
  if (suche.length < 3) {
    alert("zu kurzer Suchbegriff");
  }
}

const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", (event) => {
  const value = event.target.value
  console.log(value);
})

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
  return result.json();
})
.then(data => {
  data.forEach(section => {
    const markup = '<li>${section.title}</li>';
    document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
  });
})
.catch(error => {
  console.log(error)
})