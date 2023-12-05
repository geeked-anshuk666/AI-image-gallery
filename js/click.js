// Get all the image elements with the class "character"
const images = document.querySelectorAll('.character');

// Create a div to display enlarged image
const enlargedContainer = document.createElement('div');
enlargedContainer.classList.add('enlarged-container');
document.body.appendChild(enlargedContainer);

// Function to display enlarged image
function showEnlargedImage(src) {
  enlargedContainer.innerHTML = ''; // Clear the container
  const enlargedImage = document.createElement('img');
  enlargedImage.src = src;
  enlargedContainer.appendChild(enlargedImage);
  enlargedContainer.classList.add('show');
}

// Function to hide enlarged image
function hideEnlargedImage() {
  enlargedContainer.classList.remove('show');
}

// Add click event listener to each image
images.forEach(image => {
  image.addEventListener('click', function() {
    const imageUrl = this.src;
    showEnlargedImage(imageUrl);
  });
});

// Add click event listener to hide enlarged image when clicked
enlargedContainer.addEventListener('click', hideEnlargedImage);
