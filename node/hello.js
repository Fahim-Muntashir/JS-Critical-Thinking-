const fs = require("fs");

const content1 = "this is a content \n node js is awesome!!";

try {
  fs.writeFileSync("./output/test-sync.txt", content1);
  console.log("file written sync");
} catch (err) {
  console.err(err.message);
}

const content2 = "this is a content tooo";

fs.writeFile("./output/test-async.txt", content2, (error) => {
  if (error) {
    console.error("frist");
  } else {
    console.log("file written asynccronously");
  }
});
