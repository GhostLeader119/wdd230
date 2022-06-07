const images = document.querySelectorAll("[data-src]")
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -500px 0px"
    // rootMargin: "0px 0px -100px 0px"
}

function preloadImage(img) {
    console.log('Ran preload Image');
    const srcset = img.getAttribute("data-src");
    if(!srcset) {
        return;
    }
    console.log(`Loaded image: ${srcset}`);
    img.srcset = srcset
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
  image.setAttribute('srcset', image.getAttribute('data-src'));
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

  //<source media="(max-width:1000px)" srcset="images/moose_1000px.png">