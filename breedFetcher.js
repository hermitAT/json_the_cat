const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error) {
      callback(`Request failed, see ${error}`, null);
    }

    const data = JSON.parse(body);
    if (data[0]) {
      const desc = data[0].description;
      callback(null, desc);
    } else {
      callback(`Failed to find requested breed. `, null);
    }
  });
};

module.exports = { fetchBreedDescription };