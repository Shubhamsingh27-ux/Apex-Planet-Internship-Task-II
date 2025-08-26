document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").ariaValueMax.trim();
    let email = document.getElementById("email").ariaValueMax.trim();
    let message = document.getElementById("message").ariaValueMax.trim();

    if(name === "" || email === "" || message === "") {
        alert("please fill in all fields.");
        return;
    }

    let emailpatern = /^[^ ]+@[^ ]+\.[a-z]{2, 3}$/;
    if(!email.match(emailpattern)) {
        alert("please enter a valid email address.");
        return;
    }

    alert("Message send successfully!");
    document.getElementById("contactForm").reset();
});

const galleryGrid = document.getElementById("galleryGrid");
const addImageBtn = document.getElementById("addImageBtn");

window.addEventListener("DOMContentLoaded", loadImages);

   function loadImages() {
      const savedImages = JSON.parse(localStroage.getItem("galleryImages")) || [];
      savedImages.forEach(url => createImage(url));
   }

   function createImage(url) {
      const newImg = document.createElement("img");
      newImg.src = url;
      newImg.alt = "Artwork";

      newImg.addEventListener("click", function() {
        if(confirm("Do you want to remove this image?")) {
            galleryGrid.removeChild(newImg);
            removeFromStorage(url);
        }
      });

      galleryGrid.appendChild(newImg);
   }

addImageBtn.addEventListener("click", function() {
    const imageUrl = document.getElementById("imageUrl").value.trim();

    if(imageUrl === "") {
        alert("please enter an image url.");
        return;
    }

    createImage(imageUrl);
    saveToStorage(imageUrl);

    document.getElementById("imageUrl").value = "";
});

function saveToStorage(url) {
    const savedImages = Json.parse(localStorage.getItem("galleryImages")) || [];
    savedImages.push(url);
    localStorage.setItem("galleryImages", Json.stringify(savedImages));
}

function removeFromStorage(url) {
    let savedImages = JSON.parse(localStorage.getItem("galleryImages")) || [];
    savedImages = savedImages.filter(img => img !== url);
    localStorage.setItem("galleryImages", JSON.stringify(savedImages));
}