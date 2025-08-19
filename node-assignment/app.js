import { writeFileSync, writeFile, readFileSync, readFile, appendFile, copyFile, unlink } from "fs";
import fetch from "node-fetch";


const fileName = "assignment.txt";

writeFileSync(fileName, "This is an assignment file.\n", "utf8");
console.log("File created (sync).");

writeFile(fileName, "This is an assignment file.\n", "utf8", (err) => {
  if (err) throw err;
  console.log("File created (async).");

  const dataSync = readFileSync(fileName, "utf8");
  console.log("File read (sync):\n", dataSync);

  readFile(fileName, "utf8", (err, data) => {
    if (err) throw err;
    console.log("File read (async):\n", data);

    const now = new Date();
    appendFile(fileName, `Appended on: ${now}\n`, (err) => {
      if (err) throw err;
      console.log("Date appended.");

      const copyName = "copy_assignment.txt";
      copyFile(fileName, copyName, (err) => {
        if (err) throw err;
        console.log("File copied to", copyName);

        unlink(copyName, (err) => {
          if (err) throw err;
          console.log("Copied file deleted.");
        });
      });
    });
  });
});

function calculate(a, b, callback) {
  return callback(a, b);
}

console.log("Addition:", calculate(5, 3, (x, y) => x + y));

console.log("Multiplication:", calculate(5, 3, (x, y) => x * y));

function processString(str, callback) {
  return callback(str);
}

const upper = processString("hello world", (s) => s.toUpperCase());
console.log("Uppercase string:", upper);

function checkEvenOdd(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`${num} is even`);
    } else {
      reject(`${num} is odd`);
    }
  });
}

checkEvenOdd(10)
  .then(console.log)
  .catch(console.error);

checkEvenOdd(7)
  .then(console.log)
  .catch(console.error);

async function fetchPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    console.log("\nFirst 5 Post Titles:");
    posts.slice(0, 5).forEach((post, i) =>
      console.log(`${i + 1}. ${post.title}`)
    );
  } catch (err) {
    console.error("Error fetching posts:", err);
  }
}

fetchPosts();
