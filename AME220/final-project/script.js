document.addEventListener("DOMContentLoaded", function () {
  /* ---------- error pop up ---------- */
  const seniorTriggers = document.querySelectorAll(".js-senior-trigger");
  const modal = document.getElementById("error-modal");

  if (modal && seniorTriggers.length > 0) {
    const closeElements = modal.querySelectorAll(".js-modal-close");

    const openModal = (event) => {
      event.preventDefault();
      modal.classList.add("modal--visible");
      modal.setAttribute("aria-hidden", "false");
    };

    const closeModal = () => {
      modal.classList.remove("modal--visible");
      modal.setAttribute("aria-hidden", "true");
    };

    seniorTriggers.forEach((el) => el.addEventListener("click", openModal));
    closeElements.forEach((el) => el.addEventListener("click", closeModal));

    modal.addEventListener("click", function (event) {
      if (event.target.classList.contains("modal__backdrop")) {
        closeModal();
      }
    });
  }

  /* ---------- making the image carousel ---------- */
  const imageEl = document.getElementById("carouselImage");
  const page = document.querySelector(".page--year");

  if (imageEl && page) {
    const year = page.getAttribute("data-year");
    const captionEl = document.getElementById("carouselCaption");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    //all my images and captions for each year
    //this code is what i learned in my other coding classes ive taken in the past
    const slidesByYear = {
      freshman: [
        { src: "images/freshman/IMG_6598.jpg", alt: "freshman memory 1", caption: "bowling with friends" },
        { src: "images/freshman/IMG_7356.jpg", alt: "freshman memory 2", caption: "dinner with friends" },
        { src: "images/freshman/IMG_7650.jpg", alt: "freshman memory 3", caption: "ateez concert" },
        { src: "images/freshman/IMG_8063.jpg", alt: "freshman memory 4", caption: "christmas ice skating" },
        { src: "images/freshman/IMG_9124.jpg", alt: "freshman memory 5", caption: "as you wish painting" },
        { src: "images/freshman/IMG_8551.jpg", alt: "freshman memory 6", caption: "snowbowl snowboarding" },
        { src: "images/freshman/IMG_7452.jpg", alt: "freshman memory 7", caption: "halloweekend group" },
        { src: "images/freshman/IMG_6930.jpg", alt: "freshman memory 8", caption: "ice skating with friends" },
        { src: "images/freshman/IMG_6866.jpg", alt: "freshman memory 9", caption: "fse 100 project" },
        { src: "images/freshman/IMG_6256.jpg", alt: "freshman memory 10", caption: "first night in my dorm" }
      ],
      sophomore: [
        { src: "images/sophomore/IMG_6036.jpg", alt: "sophomore memory 1", caption: "my friend's graduation" },
        { src: "images/sophomore/IMG_4583.jpg", alt: "sophomore memory 2", caption: "making oreo truffles" },
        { src: "images/sophomore/IMG_4400.jpg", alt: "sophomore memory 3", caption: "foodieland selfie" },
        { src: "images/sophomore/IMG_4311.jpg", alt: "sophomore memory 4", caption: "doing our own gel nails" },
        { src: "images/sophomore/IMG_3869.jpg", alt: "sophomore memory 5", caption: "galentines day" },
        { src: "images/sophomore/IMG_2510.jpg", alt: "sophomore memory 6", caption: "best friend gift exchange during christmas" },
        { src: "images/sophomore/IMG_2239.jpg", alt: "sophomore memory 7", caption: "dinner with friends" },
        { src: "images/sophomore/IMG_2791.jpg", alt: "sophomore memory 8", caption: "celebrating a friend's birthday" },
        { src: "images/sophomore/IMG_1908.jpg", alt: "sophomore memory 9", caption: "making spam musubis" },
        { src: "images/sophomore/IMG_1839.png", alt: "sophomore memory 10", caption: "lunch with best friend" }
      ],
      junior: [
        { src: "images/junior/IMG_1365.jpg", alt: "junior memory 1", caption: "galentines day" },
        { src: "images/junior/IMG_1875.jpg", alt: "junior memory 2", caption: "foodieland group" },
        { src: "images/junior/IMG_3306.jpg", alt: "junior memory 3", caption: "selfie in the sky" },
        { src: "images/junior/IMG_2766.jpg", alt: "junior memory 4", caption: "girls night card game" },
        { src: "images/junior/IMG_5890.jpg", alt: "junior memory 5", caption: "chasa event" },
        { src: "images/junior/IMG_1834.jpg", alt: "junior memory 6", caption: "foodieland picture but just the girls" },
        { src: "images/junior/IMG_1034.jpg", alt: "junior memory 7", caption: "topgolf" },
        { src: "images/junior/IMG_9218.jpg", alt: "junior memory 8", caption: "apamsa friendsgiving event" },
        { src: "images/junior/IMG_0053.jpg", alt: "junior memory 9", caption: "halloweekend" },
        { src: "images/junior/DSCN0626.jpg", alt: "junior memory 10", caption: "galentines picture with friend" }
      ]
    };

    const slides = slidesByYear[year];

    //error checking
    if (!slides || slides.length === 0) return;

    let current = 0;

    //display the current picture
    function showSlide(index) {
      const slide = slides[index];
      imageEl.src = slide.src;
      imageEl.alt = slide.alt;
      if (captionEl) {
        captionEl.textContent = slide.caption;
      }
    }

    //next button logic
    function goNext() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    //previous button logic
    function goPrev() {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    }

    //adding event listeners to buttons
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", goPrev);
      nextBtn.addEventListener("click", goNext);
    }

    //initial image
    showSlide(current);
  }
});
