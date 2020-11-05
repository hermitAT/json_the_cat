const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q=";
let breedToSearch = process.argv[2];

request(url + breedToSearch, (error, response, body) => {
  if (error) {
    console.log("error: ", error);
    process.exit();
  } // handle request error and print to console
  if (!response) console.log("StatusCode: ", response && response.statusCode);
  console.log("+++");


  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log("Details on the breed cannot be found. ");
  }
});