//Problem Statement
//implement a simple in memory cache for an ecxpensive function like database qwuery or api call.
// the goal is to store the results of a function call so that if the same call is made again
//the result is returned from the cache instead of executing the function again.

// function getUserData(id) {
//   console.log("Fetching data for user:");
//   return { id: id, name: "User" };
// }

// getUserData(1);
// getUserData(1);

// const cache = {};

// function getUserData(id) {
//   if (cache[id]) {
//     console.log("Returning from cache...");
//     return cache[id];
//   }
//   console.log("Fetching from database...");
//   const result = { id, name: "fahim" };
//   cache[id] = result;
//   return result;
// }

// getUserData(1); // database থেকে আনবে
// getUserData(1); // cache থেকে দেবে

const dataCache = new Map();

const ecxpensiveTask = (id) => {
  console.log("ran the ecxpensive task for ", id);
  return {
    id: id,
    data: `some data for id ": ${id}`,
    timestamp: new Date().getTime(),
  };
};

const getData = (id) => {
  if (dataCache.has(id)) {
    return;
  }

  const data = ecxpensiveTask(id);

  dataCache.set(id, data);

  return data;
};

console.log(getData(123));
console.log(dataCache);
