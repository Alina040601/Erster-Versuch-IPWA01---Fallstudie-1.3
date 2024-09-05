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
});

fetch('./search.json')
      .then(response => response.json())
      .then(data => { 
        data.forEach(section => {
          listEl.insertAdjacentHTML('beforeend', `<li>${section.title}</li>`);
        });
      })
        .catch(error => console.error(error));