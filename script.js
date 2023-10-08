const lagnWrapper = document.querySelector("[data-lang-wrapper]");
const langWrapperIcon = document.querySelector("[data-lang-wrapper-icon]");
const lagnSelector = document.querySelectorAll("[data-lang-selector]");
const lagnBtn = document.querySelector("[data-lang-btn]");
const lagnBtnActive = document.querySelector("[data-lang-btn-active]");

langWrapperIcon.addEventListener("click", function (e) {
  if (lagnWrapper.classList.contains("d-none")) {
    lagnWrapper.classList.remove("d-none");
    lagnBtn.classList.add("d-none");
    lagnBtnActive.classList.remove("d-none");
  } else {
    lagnWrapper.classList.add("d-none");
    lagnBtn.classList.remove("d-none");
    lagnBtnActive.classList.add("d-none");
  }
});

lagnSelector.forEach(function (e) {
  e.addEventListener("click", function (e) {
    console.log(e.currentTarget);

    lagnSelector.forEach(function (e) {
      e.classList.remove("language-choose-active");
    });

    e.currentTarget.classList.add("language-choose-active");
  });
});

const searchBtn = document.querySelector("[data-search-btn]");
const searchWrapper = document.querySelector("[data-input-wrapper]");
const searchActive = document.querySelector("[data-active-search-icon]");
const searchNoBg = document.querySelector("[data-search-btn-no-bg]");

searchBtn.addEventListener("click", function (e) {
  if (searchWrapper.classList.contains("d-none")) {
    searchWrapper.classList.remove("d-none");
    searchNoBg.classList.add("d-none");
    searchActive.classList.remove("d-none");
  } else {
    searchWrapper.classList.add("d-none");
    searchNoBg.classList.remove("d-none");
    searchActive.classList.add("d-none");
  }
});

const menuBg = document.querySelector("[data-active-menu-icon]");
const menuBtn = document.querySelector("[data-sample-modal-open]");
const myModalEl = document.getElementById("sampleModal");

myModalEl.addEventListener("hide.bs.modal", (event) => {
  menuBg.classList.add("d-none");
  menuBtn.classList.remove("d-none");
});

myModalEl.addEventListener("show.bs.modal", (event) => {
  menuBg.classList.remove("d-none");
  menuBtn.classList.add("d-none");
});

const menuModal = document.querySelector("#menuModal");
const mobileIcon = document.querySelector("[data-menu-mobile]");
const mobileActive = document.querySelector("[data-menu-mobile-active]");

// menuModal.addEventListener('hide.bs.modal', event => {
// 	mobileActive.classList.add('d-none')
// 	mobileIcon.classList.remove('d-none')
// })

// menuModal.addEventListener('show.bs.modal', event => {
// 	mobileActive.classList.remove('d-none')
// 	mobileIcon.classList.add('d-none')
// })

const mobileSelector = document.querySelectorAll("[data-mobile-lang-selector]");

mobileSelector.forEach(function (e) {
  e.addEventListener("click", function (e) {
    console.log(e.currentTarget);

    mobileSelector.forEach(function (e) {
      e.classList.remove("language-mobile-active");
    });

    e.currentTarget.classList.add("language-mobile-active");
  });
});

const mobileLang = document.querySelector("[data-mobile-lang]");
const mobileLangActive = document.querySelector("[data-mobile-lang-active]");
const mobileLangWrapper = document.querySelector("[data-mobile-lang-wrapper]");
const mobileSelectorWrapper = document.querySelector(
  "[data-mobile-lang-selector-wrapper]"
);

mobileLangWrapper.addEventListener("click", function (e) {
  if (mobileLang.classList.contains("d-none")) {
    mobileLang.classList.remove("d-none");
    mobileLangActive.classList.add("d-none");
    mobileLangWrapper.classList.remove("mobile-menu-active");
    mobileSelectorWrapper.classList.add("d-none");
  } else {
    mobileLang.classList.add("d-none");
    mobileLangActive.classList.remove("d-none");
    mobileLangWrapper.classList.add("mobile-menu-active");
    mobileSelectorWrapper.classList.remove("d-none");
  }
});

const mobileSearchWrapper = document.querySelector(
  "[data-mobile-search-wrapper]"
);
const mobileSearchIcon = document.querySelector("[data-mobile-icon-search]");
const mobileSearchIconActive = document.querySelector(
  "[data-mobile-icon-search-active]"
);
const mobileSearchInput = document.querySelector(
  "[data-mobile-search-input-wrapper]"
);

mobileSearchWrapper.addEventListener("click", function (e) {
  if (mobileSearchIcon.classList.contains("d-none")) {
    mobileSearchIcon.classList.remove("d-none");
    mobileSearchIconActive.classList.add("d-none");
    mobileSearchWrapper.classList.remove("mobile-menu-active");
    mobileSearchInput.classList.add("d-none");
  } else {
    mobileSearchIcon.classList.add("d-none");
    mobileSearchIconActive.classList.remove("d-none");
    mobileSearchWrapper.classList.add("mobile-menu-active");
    mobileSearchInput.classList.remove("d-none");
  }
});

const mobileLinkWrapperOne = document.querySelector("[data-href-wrapper-one]");
const mobileLinkWrapperTwo = document.querySelector("[data-href-wrapper-two]");
const sampleExist = document.querySelector("[data-sample-clone-exist]");
const sampleClone = document.querySelector("[data-mobile-clone-sample]");
const mobileSampleWrapper = document.querySelector(
  "[data-mobile-sample-wrapper]"
);
const mobileSampleIcon = document.querySelector("[data-mobile-sample-icon]");
const mobileSampleIconActive = document.querySelector(
  "[data-mobile-sample-icon-active]"
);

sampleClone.innerHTML = sampleExist.innerHTML;

mobileSampleWrapper.addEventListener("click", function (e) {
  if (mobileSampleIcon.classList.contains("d-none")) {
    mobileSampleWrapper.classList.remove("mobile-menu-active");
    mobileSampleIcon.classList.remove("d-none");
    mobileSampleIconActive.classList.add("d-none");
    mobileLinkWrapperOne.classList.remove("d-none");
    mobileLinkWrapperTwo.classList.remove("d-none");
    sampleClone.classList.add("d-none");
  } else {
    mobileSampleWrapper.classList.add("mobile-menu-active");
    mobileSampleIcon.classList.add("d-none");
    mobileSampleIconActive.classList.remove("d-none");
    mobileLinkWrapperOne.classList.add("d-none");
    mobileLinkWrapperTwo.classList.add("d-none");
    sampleClone.classList.remove("d-none");
  }
});

const clonedDataWrapper = document.querySelector("[data-cloned-data]");
const clonedData = document.querySelector("[data-mobile-clone ]");

if (window.innerWidth < 991.98 && clonedDataWrapper) {
  clonedDataWrapper.innerHTML = clonedData.innerHTML;
}

const singleProduct1 = document.querySelector("[data-product-1]");
const singleProduct2 = document.querySelector("[data-product-2]");
const singleProduct3 = document.querySelector("[data-product-3]");
const singleProduct4 = document.querySelector("[data-product-4]");
const singleProduct5 = document.querySelector("[data-product-5]");
const singleProduct6 = document.querySelector("[data-product-6]");

if(singleProduct1){

singleProduct1.addEventListener("mouseenter", function (event) {
  event.target.src = "img/home-hover-photo/2.png";
});

singleProduct1.addEventListener("mouseleave", function (event) {
  event.target.src = "img/Rectangle 19.png";
});

singleProduct2.addEventListener("mouseenter", function (event) {
  event.target.src = "img/home-hover-photo/1.jpg";
});

singleProduct2.addEventListener("mouseleave", function (event) {
  event.target.src = "img/Rectangle 19 (1).png";
});

singleProduct3.addEventListener("mouseenter", function (event) {
  event.target.src = "img/Rectangle 19 (9).png";
});

singleProduct3.addEventListener("mouseleave", function (event) {
  event.target.src = "img/Rectangle 19 (2).png";
});

singleProduct4.addEventListener("mouseenter", function (event) {
  event.target.src = "img/Rectangle 19 (8).png";
});

singleProduct4.addEventListener("mouseleave", function (event) {
  event.target.src = "img/Rectangle 19 (3).png";
});

singleProduct5.addEventListener("mouseenter", function (event) {
  event.target.src = "img/Rectangle 19 (11).png";
});

singleProduct5.addEventListener("mouseleave", function (event) {
  event.target.src = "img/Rectangle 19 (4).png";
});

singleProduct6.addEventListener("mouseenter", function (event) {
  event.target.src = "img/Rectangle 19 (10).png";
});

singleProduct6.addEventListener("mouseleave", function (event) {
  event.target.src = "img/Rectangle 19 (5).png";
});
}

const changeViewIcon = document.querySelector('[data-change-view-detail]')
const imgChangeView = document.querySelector('[data-change-view-img]')
if(changeViewIcon){
changeViewIcon.addEventListener('click', function(event) {
    if(imgChangeView.classList.contains('changed')){
        imgChangeView.classList.remove('changed')
        imgChangeView.src = 'img/Rectangle 20.png'
    }else{
        imgChangeView.classList.add('changed')
        imgChangeView.src = 'img/Rectangle 19 (6).png'
    }    
})
}
function aHref(url) {
  window.location = url;
}
