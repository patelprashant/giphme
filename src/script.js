import Amplify, { API, graphqlOperation } from "@aws-amplify/api";
import awsConfig from "./aws-exports";
import { createGiphme } from "./graphql/mutations";
import { listGiphmes } from "./graphql/queries";

Amplify.configure(awsConfig);

const createNewGif = async (e) => {
  e.preventDefault(); // don't refresh the page after form submit

  const gif = {
    // grab the value of the `altText` field
    altText: document.getElementById("altText").value,
    // grab the value of the `url` field
    url: document.getElementById("url").value,
  };

  try {
    // Make the API request: provide the createGif operation, provide the user's gif data
    const newGif = await API.graphql(
      graphqlOperation(createGiphme, { input: gif })
    );
    // Print the data to the console once it comes back
    console.log(newGif);

    //get all gifs
    getGifs();

    // Reset the form (make the fields blank again)
    document.getElementById("create-form").reset();
  } catch (err) {
    // If the request fails, print the error message to the console
    console.error(err);
  }
};

// run our createNewGif function when the form is submitted
document.getElementById("create-form").addEventListener("submit", createNewGif);

const getGifs = async () => {
  // select the container element
  const container = document.querySelector(".container");
  // reset its current contents
  container.innerHTML = "";
  // make a request to get all our gifs
  const gifs = await API.graphql(graphqlOperation(listGiphmes));

  // loop through our gifs and
  gifs.data.listGiphmes.items.map((gif) => {
    // create a new image element
    const img = document.createElement("img");
    // add the src attribute to the img
    img.setAttribute("src", gif.url);
    // add the alt attribute to the img
    img.setAttribute("alt", gif.altText);

    img.setAttribute("width", "25%");
    // add the image to the container
    document.querySelector(".container").appendChild(img);
  });
};

getGifs();
