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
/* console.log("welcome");
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

console.log("end"); */

// promise chaining

/* const promiseOne = () => {
  return new Promise((resolve, reject) => {
    resolve("promise one is completed");
  });
};
const promiseTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise Two is completed");
    }, 2000);
  });
};
const promiseThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise Three is completed");
    }, 4000);
  });
};
const promiseFour = () => {
  return new Promise((resolve, reject) => {
    resolve("promise Four is completed");
  });
}; */
/* 
promiseOne()
  .then((res) => console.log(res))
  .then(promiseTwo)
  .then((res) => console.log(res))
  .then(promiseThree)
  .then((res) => console.log(res))
  .then(promiseFour)
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); */

/* const setAllTask = async () => {
  let t1 = await promiseOne();
  console.log(t1);
  let t2 = await promiseTwo();
  console.log(t2);
  let t3 = await promiseThree();
  console.log(t3);
  let t4 = await promiseFour();
  console.log(t4);
};

setAllTask(); */

//fetch api for calling data
/* 
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    title: "ruponty",
    body: "mrinmoye",
    userId: 1,
  }),
})
  .then((res) => {
    if (!res.ok) {
      let message = `Error : ${res.status}`;
      throw new Error(message);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err.message);
  });
 */

/* const makeRequest = async (url, config) => {
  const res = await fetch(url, config);
  if (!res.ok) {
    throw new Error(`Error : ${res.status}, not found`);
  }
  const data = await res.json();
  return data;
}; */

/* const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
};

deleteData(); */

/* const updateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "ruponty",
      body: "mrinmoye",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
};

updateData(); */

/* const sendData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "ruponty",
      body: "mrinmoye",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
}; 
sendData()
*/

/* const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
}; 
getData()
*/

console.clear();

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

/* axios
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err)); */

/* axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify({
      id: 1,
      title: "sabiha",
      body: "mrinmoye",
      userId: 1,
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err)); */

/* axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    body: JSON.stringify({
      title: "ruponty",
      body: "mrinmoye",
      userId: 1,
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err)); */

/* const makeAxiosRequest = async (config) => {
  return await axios(config);
};
 */

/* deleteData = () => {
  makeAxiosRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "delete",
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
deleteData(); */

/* updateData = () => {
  makeAxiosRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "put",
    data: JSON.stringify({
      id: 1,
      title: "sabiha",
      body: "tasnim",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
updateData(); */

/* setData = () => {
  makeAxiosRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: JSON.stringify({
      title: "ruponty",
      body: "mrinmoye",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

setData(); */

/* getData = () => {
  makeAxiosRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

getData(); */
