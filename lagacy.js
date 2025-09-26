import fetch from "node-fetch";

const apiUrl = "https://api.restful-api.dev/objects"; 

const a = await fetch(apiUrl, (err, response) => {
  if (err) {
    console.error("Error fetching from API:", err);
    return;
  }

  response.json((err, data) => {
    if (err) {
      console.error("Error parsing JSON:", err);
      return;
    }

    fetch(apiUrl, (err, relatedResponse) => {
      if (err) {
        console.error("Error fetching related data:", err);
        return;
      }

      relatedResponse.json((err, relatedData) => {
        if (err) {
          console.error("Error parsing related JSON:", err);
          return;
        }

        console.log("Fetched related data:");
        console.log(relatedData);
        
        fetch(apiUrl, (err, thirdResponse) => {
          if (err) {
            console.error("Error fetching third data:", err);
            return;
          }

          thirdResponse.json((err, thirdData) => {
            if (err) {
              console.error("Error parsing third JSON:", err);
              return;
            }

            console.log("Fetched third data:");
            console.log(thirdData);
          });
        });
      });
    });
  });
});
console.log(a);
