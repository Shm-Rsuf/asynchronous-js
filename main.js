const wrapper = document.querySelector(".country-wrapper");
/****************asynchronous javascript******************/
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/name/argentina");
request.send();

// console.log(request.responseText);

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  renderData(data);
});

function renderData(country) {
  // console.log(country);

  const html = `
      <div class="country">
        <h1>${country.name}</h1>
        <p>${country.altSpellings[1]}</p>
        <p>${country.capital}</p>
        <p>${(country.population / 1000000).toFixed(2)} M people</p>
      </div>`;
  wrapper.insertAdjacentHTML("afterbegin", html);
}

//promise in javascript
console.log("welcome");
//create promise
const promise = new Promise((resolve, reject) => {
  let isPromise = true;
  if (isPromise) {
    resolve("Promise completed");
  } else {
    reject("Not completed");
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("end");
