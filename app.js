// Retrieve DOM elements

// Event listener for randomize button
const randomizeButton = document.getElementById("randomize");
randomizeButton.addEventListener("click", generateRandomPoster);

// Event listener for submit button
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", generateCustomPoster);

// Array of predefined poster objects
const posters = [
  {
    image:
      "https://media.licdn.com/dms/image/C4D12AQEgDcmfcBhOaw/article-cover_image-shrink_600_2000/0/1520046601702?e=2147483647&v=beta&t=8oYuNLyGHkMSZ7eiQq8Wd1ptlgIbVEjcpybW79107ss",
    title: "Determination",
    quote:
      "Anything is possible if you have the intelligence and willpower to make it happen.",
  },
  {
    image: "https://i.imgflip.com/1mulwg.jpg?a468288",
    title: "Who's awesome?",
    quote: "You are!",
  },
  {
    image:
      "https://1.bp.blogspot.com/-M5--nYsk3XI/VvdikV5x2II/AAAAAAAAPbs/XAgznq4BPs4UqQIx4xOxus3g_FrK4RenA/s1600/bear-chases-cyclist.jpg",
    title: "Finding Motivation",
    quote: "Sometimes, motivation finds you.",
  },
  // Add more poster objects as needed
];

// Function to generate a random poster
function generateRandomPoster() {
  // Generate a random index within the range of the posters array length
  const randomIndex = Math.floor(Math.random() * posters.length);

  // Retrieve the random poster object from the posters array
  const randomPoster = posters[randomIndex];

  // Call the function to update the DOM with the values from the random poster object
  updatePoster(randomPoster.image, randomPoster.title, randomPoster.quote);
}

// Function to generate a custom poster
function generateCustomPoster(event) {
  event.preventDefault();
  // Retrieve the entered quote and author from the input fields
  const quoteInput = document.getElementById("poster-form-quote");
  const titleInput = document.getElementById("poster-form-title");
  const quote = quoteInput.value;
  const title = titleInput.value;

  // Create a custom poster object with the entered values
  const customPoster = {
    image:
      "https://i.natgeofe.com/k/e094f0a9-3cb3-40c3-afaf-314b6437ef14/ww-funny-animal-faces-goat_4x3.jpg",
    title: title,
    quote: quote,
  };

  // Call the function to update the DOM with the values from the custom poster object
  updatePoster(customPoster.image, customPoster.title, customPoster.quote);
}

// Function to update the poster content in the DOM
function updatePoster(image, title, quote) {
  const posterImage = document.getElementById("poster-image");
  const posterTitle = document.getElementById("poster-title");
  const posterQuote = document.getElementById("poster-quote");

  // Update the poster image source
  posterImage.src = image;

  // Update the poster title
  posterTitle.textContent = title;

  // Update the poster quote
  posterQuote.textContent = quote;
}
