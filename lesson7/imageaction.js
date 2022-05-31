const images = document.querySelectorAll("[data-src]")
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -300px 0px"
}

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src
}

const imgObserver = new IntersectionObserver((entries,imgObserver) => {
    console.log('imgObserver run');
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        }
        else {
            preloadImage(entry.target)
            imgObserver.unobserve(entry.target)
        }
    })
}, imgOptions)

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};


console.log('JS run...');
images.forEach(image=> {
    imgObserver.observe(image)
})

imagesToLoad.forEach((img) => {
    loadImages(img);
  });