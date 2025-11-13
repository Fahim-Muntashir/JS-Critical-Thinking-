// const postsArray = [
//   { id: 1, title: "Post One", author: "alex" },
//   { id: 2, title: "Post Two", author: "sam" },
//   { id: 3, title: "Post Three", author: "jordan" },
//   { id: 4, title: "Post Four", author: "taylor" },
//   { id: 5, title: "Post Five", author: "casey" },
// ];

// const lookupTable = postsArray.reduce((table, post) => {
//   table[post.id] = post;
//   return table;
// }, {});

// console.log(lookupTable);

const events = [
  { timestamp: "2025-10-22T10:01:00Z", event: "login" },
  { timestamp: "2025-10-22T10:05:00Z", event: "click" },
  { timestamp: "2025-10-22T10:10:00Z", event: "logout" },
  { timestamp: "2025-10-22T10:15:00Z", event: "login" },
  { timestamp: "2025-10-22T10:20:00Z", event: "click" },
  { timestamp: "2025-10-22T10:25:00Z", event: "click" },
  { timestamp: "2025-10-22T10:30:00Z", event: "login" },
];

const INTERVAL = 30 * 60 * 1000; // 30 minutes in milliseconds

// Function to "floor" a timestamp into its bin start time
const getBinningTimeStamp = (timestamp) => {
  const date = new Date(timestamp);
  const time = date.getTime();

  // Floor to nearest 30-min interval
  const flooredTime = Math.floor(time / INTERVAL) * INTERVAL;

  return new Date(flooredTime).toISOString(); // return ISO string for clarity
};

// Group events by bins
const binnedData = events.reduce((acc, event) => {
  const bin = getBinningTimeStamp(event.timestamp);

  if (!acc[bin]) {
    acc[bin] = [];
  }

  acc[bin].push(event);

  return acc;
}, {});

console.log(binnedData);
