// Navbar

const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
}
function close(){
    mainMenu.style.top = "-100%";
}


// Header2 Movements


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.header2 img');

    document.addEventListener('mousemove', function (e) {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      images.forEach(img => {
        const moveX = x * 20; // adjust sensitivity here
        const moveY = y * 20; // adjust sensitivity here

        img.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
  });


// Button Images Change
const buttons = document.querySelectorAll('button');
const imageContainer = document.getElementById('image-container');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    
    const buttonId = button.id;
    const number = buttonId.replace('btn-', '');

    
    imageContainer.innerHTML = '';

    switch (number) {
      case '1':
        
        const image1a = document.createElement('div');
        image1a.className = 'image-wrapper';
        image1a.innerHTML = `
          <img src="./images/Rectangle 45.png" alt="Image 1">
          <p>PORTLAND BALANCE</p>
          <p>ALL-IN-ONE NOURISHING MOISTURIZER</p>
          <p>FROM $50.00</p>
          
        `;
        imageContainer.appendChild(image1a);
        const image1b = document.createElement('div');
        image1b.className = 'image-wrapper';
        image1b.innerHTML = `
          <img src="./images/Rectangle 46.png" alt="Image 1">
          <p>PORTLAND BALANCE</p>
          <p>ALL-IN-ONE NOURISHING MOISTURIZER</p>
          <p>FROM $50.00</p>
          
        `;
        imageContainer.appendChild(image1b);
        const image1c = document.createElement('div');
        image1c.className = 'image-wrapper';
        image1c.innerHTML = `
          <img src="./images/Rectangle 47.png" alt="Image 1">
          <p>PORTLAND BALANCE</p>
          <p>ALL-IN-ONE NOURISHING MOISTURIZER</p>
          <p>FROM $50.00</p>
          
        `;
        imageContainer.appendChild(image1c);
        const image1d = document.createElement('div');
        image1d.className = 'image-wrapper';
        image1d.innerHTML = `
          <img src="./images/Rectangle 48.png" alt="Image 1">
          <p>PORTLAND BALANCE</p>
          <p>ALL-IN-ONE NOURISHING MOISTURIZER</p>
          <p>FROM $50.00</p>
          
        `;
        imageContainer.appendChild(image1d);
        break;
      case '2':
        // Show 1 image with description
        const image2a = document.createElement('div');
        image2a.className = 'image-wrapper';
        image2a.innerHTML = `
          <img src="./images/Rectangle 45.png" alt="Image 1">
          <p>PORTLAND BALANCE</p>
          <p>ALL-IN-ONE NOURISHING MOISTURIZER</p>
          <p>FROM $50.00</p>
          
        `;
        imageContainer.appendChild(image2a);
        const image2b = document.createElement('div');
        image2b.className = 'image-wrapper';
        image2b.innerHTML = `
          <img src="./images/Rectangle 46.png" alt="Image 1">
         <p>PORTLAND BALANCE</p>
          <p>ALL-IN-ONE NOURISHING MOISTURIZER</p>
          <p>FROM $50.00</p>
          
        `;
        imageContainer.appendChild(image2b);
        const image2c = document.createElement('div');
        image2c.className = 'image-wrapper';
        image2c.innerHTML = `
          <img src="./images/Rectangle 47.png" alt="Image 1">
          <p>PORTLAND BALANCE</p>
          <p>ALL-IN-ONE NOURISHING MOISTURIZER</p>
          <p>FROM $50.00</p>
          
        `;
        imageContainer.appendChild(image2c);
        break;
      case '3':
        // Show 3 images with descriptions
        const image3a = document.createElement('div');
        image3a.className = 'image-wrapper';
        image3a.innerHTML = `
          <img src="./images/Rectangle 57.png" alt="Image 1">
          <p>PORTLAND BALANCE</p>
          <p>ALL-IN-ONE NOURISHING MOISTURIZER</p>
          <p>FROM $50.00</p>
          
        `;
        imageContainer.appendChild(image3a);

        const image3b = document.createElement('div');
        image3b.className = 'image-wrapper';
        image3b.innerHTML = `
          <img src="./images/Rectangle 52.png" alt="Image 1">
          <p>PORTLAND BALANCE</p>
          <p>ALL-IN-ONE NOURISHING MOISTURIZER</p>
          <p>FROM $50.00</p>
          
        `;
        imageContainer.appendChild(image3b);

        break;
      case '4':
        // Show 1 image with description
        const image4a = document.createElement('div');
        image4a.className = 'image-wrapper';
        image4a.innerHTML = `
          <img src="./images/Rectangle 60.png" alt="Image 1">
          <p>PORTLAND BALANCE</p>
          <p>ALL-IN-ONE NOURISHING MOISTURIZER</p>
          <p>From $50.00</p>
          
        `;
        imageContainer.appendChild(image4a);
        const image4b = document.createElement('div');
        image4b.className = 'image-wrapper';
        image4b.innerHTML = `
          <img src="./images/Rectangle 61.png" alt="Image 1">
          <p>PORTLAND BALANCE</p>
          <p>ALL-IN-ONE NOURISHING MOISTURIZER</p>
          <p>From $50.00</p>
          
        `;
        imageContainer.appendChild(image4b);
        const image4c = document.createElement('div');
        image4c.className = 'image-wrapper';
        image4c.innerHTML = `
          <img src="./images/Rectangle 62.png" alt="Image 1">
          <p>PORTLAND BALANCE</p>
          <p>ALL-IN-ONE NOURISHING MOISTURIZER</p>
          <p>From $50.00</p>
          
        `;
        imageContainer.appendChild(image4c);
        
        break;
      default:
        document.getElementById('btn-1').click();
    }
  });
});
document.getElementById('btn-1').click();


const buttons1 = document.querySelectorAll('.my-button');

buttons1.forEach(button => {
  button.addEventListener('click', () => {
    
    buttons.forEach(b => b.classList.remove('active'));
    
    button.classList.add('active');
  });
});


// Image Slider 
const images = [
  './images/Rectangle 33.png',
  './images/Rectangle 38.png',
  './images/Rectangle 37 (4).png'
];
const images2 = [
  './images/Rectangle 37.png',
  './images/Rectangle37(1).png',
  './images/Rectangle 37 (2).png'
];

let currentIndex = 0;

const sliderImage = document.querySelector('.slider-image');
const slidecontainer = document.querySelector('.slider-container');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const slider2 = document.querySelector('.slider2');

function updateImages() {
  sliderImage.src = images[currentIndex];
  slidecontainer.style.backgroundImage = `url("${images2[currentIndex]}")`;
}


function animateSlider2() {
  // Clear existing content inside slider2
  slider2.innerHTML = '';

  // Remove any previously applied index classes
  slider2.classList.remove('index-0', 'index-1', 'index-2');

  // Update the content of slider2 based on currentIndex
  if (currentIndex === 0) {
    slider2.innerHTML = `
      <div class="slider2-first">
          <div>
              <p>Portland Balance</p>
          </div>
          <div>
              <p id="a35">$35.00</p>
          </div>
      </div>
      <div class="slider2-second">
          <div>
              <p>Detox Hydration Mask</p>
          </div>
          <div>
              <p id="a50">$50.00</p>
          </div>
      </div>
    `;
    slider2.classList.add('index-0');
  } else if (currentIndex === 1) {
    slider2.innerHTML = `
      <div class="slider22-first">
          <div>
              <p>Portland Balance22</p>
          </div>
          <div>
              <p id="ancient">Ancient Earth Dual-Action E...</p>
          </div>
      </div>
      <div class="slider22-second">
          <div>
              <p>$80.00</p>
          </div>
      </div>
    `;
    slider2.classList.add('index-1');
  } else if (currentIndex === 2) {
    slider2.innerHTML = `
      <div class="slider23-first">
          <div>
              <p>Portland Balance33</p>
          </div>
          <div>
              <p>From</p>
          </div>
      </div>
      <div class="slider23-second">
          <div>
              <p>Purifying Hydration Face Mask</p>
          </div>
          <div>
              <p id="a50">$40.00</p>
          </div>
      </div>
    `;
    slider2.classList.add('index-2');
  }

  // Add animation class
  slider2.classList.add('move-up');

  // Remove animation class after the animation is done
  setTimeout(() => {
    slider2.classList.remove('move-up');
  }, 300);
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImages();
  animateSlider2();
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImages();
  animateSlider2();
}

leftButton.addEventListener('click', showPreviousImage);
rightButton.addEventListener('click', showNextImage);

updateImages();

// Popular items
document.addEventListener('DOMContentLoaded', function () {
  
  const sections = document.querySelectorAll('.section');
  const over2 = document.querySelector('.over2');

  function handleHover(section) {
      section.addEventListener('mouseover', () => {
          over2.style.transform = 'translateY(-10px)';
      });

      section.addEventListener('mouseout', () => {
          over2.style.transform = 'translateY(0)';
      });
  }

  
  sections.forEach(section => {
      handleHover(section);
  });

 
  document.querySelectorAll('.section').forEach(section => {
      const image = section.querySelector('img');

      
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.justifyContent = 'flex-end'; 
      container.style.position = 'relative';

      const moreText = document.createElement('span');
      moreText.textContent = 'More';
      moreText.style.fontSize = '18px';

      const hoverImage = document.createElement('img');
      hoverImage.src = './images/Component 1.png'; 
      hoverImage.style.width = '16px';
      hoverImage.style.height = '16px';
      hoverImage.style.marginRight = '10px';

      
      container.appendChild(hoverImage);
      container.appendChild(moreText);
      container.style.display = 'none';

      section.appendChild(container);

      section.addEventListener('mouseover', () => {
          image.style.display = 'none'; 
          container.style.display = 'flex';
      });

      section.addEventListener('mouseout', () => {
          image.style.display = 'block'; 
          container.style.display = 'none';
      });
  });

  // Existing DOM Events for section2 and section3
  const section2 = document.getElementById('section2');
  const section3 = document.getElementById('section3');
  const featureRight = document.querySelector('.feature-right');
  const originalText = over2.innerHTML;

  section2.addEventListener('mouseover', () => {
      featureRight.style.backgroundImage = 'url("./images/02-face_533x 5.png")';
      const newText = `
          <div class="section23" style="justify-content: space-between;">
              <div class="para1">
                  <p>PORTLAND BALANCE</p>
                  <p>Cardamom Exfoliating Body Polish</p>
              </div>
              <div class="para2">
                  <p>$60.00</p>
                  <p>$40.00</p>
              </div>
          </div>
      `;
      over2.innerHTML = newText;
  });

  section2.addEventListener('mouseout', () => {
      featureRight.style.backgroundImage = 'url("./images/02-face_533x 5 (2).png")';
      over2.innerHTML = originalText;
  });

  section3.addEventListener('mouseover', () => {
      featureRight.style.backgroundImage = 'url("./images/02-face_533x 5 (1).png")';
      const newText = `
          <div class="section23" style="justify-content: space-between;">
              <div class="para1">
                  <p>PORTLAND BALANCE</p>
                  <p>Cardamom Exfoliating Body Polish</p>
              </div>
              <div class="para2">
                  <p>$60.00</p>
                  <p>$40.00</p>
              </div>
          </div>
      `;
      over2.innerHTML = newText;
  });

  section3.addEventListener('mouseout', () => {
      featureRight.style.backgroundImage = 'url("./images/02-face_533x 5 (2).png")';
      over2.innerHTML = originalText;
  });

  // Trigger the mouseover event on section1 by default
  const section1 = document.getElementById('section1');
  section1.dispatchEvent(new Event('mouseover'));
});
