const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = 'ytxmgCA21UpA8LL5do5c8wuHGV-iNQ8Cv7RPu7emR24';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all the images were loaded
function imageLoaded() {
    // console.log('image loaded X'); //called for each individual loaded
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        // console.log('ready = ', ready);
    }
}

// Helper Function to Set Attributes on DOM Elements
function setAttribute(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}


// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    // console.log('total images: ', totalImages);
    // Run functions for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> anchor element to link to Unsplash
        const item = document.createElement('a'); //create blank anchor element , <a> creates a hyperlink
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttribute(item, {
            href: photo.links.html,
            target: '_blank',
        });

        // create <img> for photo
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        setAttribute(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        //Event Listener, check when each is finished loading
        img.addEventListener('load', imageLoaded);

        // Put image <img> inside the anchor element <a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


// Get photos from Unsplash-API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // catch error
    }
}
// Check to see if scrolling near bottom of page, Load more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        // console.log('load more')
        ready = false;
        getPhotos();
    }
})

// Get Photos
getPhotos()