const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
    .then((apiResponse) => {
      const data = apiResponse.data;
      document.querySelector(".characters-container").innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        document.querySelector(".characters-container").innerHTML += `<div class="character-info">
        <div class="name">${data[i].name}</div>
        <div class="occupation">${data[i].occupation}</div>
        <div class="cartoon">${data[i].cartoon}</div>
        <div class="weapon">${data[i].weapon}</div>
      </div>`;
      }
    })
    .catch((apiError) => {
      console.log(apiError);
    });
});



  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
