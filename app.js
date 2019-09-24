document.querySelector("#button").addEventListener("click", getJokes);

function getJokes() {
  const url = "https://sv443.net/jokeapi/category/Any";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let output = "";
      if (data.type === "single") {
        output += `<p>${data.joke}</p>`;
      } else if (data.type === "twopart") {
        output += `<p>${data.setup} <br> ${data.delivery}</p>`;
      }
      document.getElementById("output").innerHTML = output;
    })
    .catch(error => console.log(error));
}
