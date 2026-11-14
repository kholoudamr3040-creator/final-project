
var destinations = [
  {
    country: "FRANCE",
    city: "Paris",
    description: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
    continent: "Europe",
    food: "Croissant, Macarons",
    place: "Eiffel Tower",
    language: "French",
    image: "ctfassets.net/zeaejvyq9bhj/5LxBxZvXsYaDBQBzlnyQw4/a190f6e010d50de47216980ea05ab407/French_4.PNG",
    more: "Walk along the Seine, visit the Louvre and enjoy a coffee in a Montmartre cafe."
  },
  {
    country: "JAPAN",
    city: "Tokyo",
    description: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
    continent: "Asia",
    food: "Sushi, Ramen",
    place: "Tokyo Tower",
    language: "Japanese",
    image: "tokyo.avif",
    more: "Try the Tsukiji outer market for breakfast, then spend the evening in Shinjuku."
  },
  {
    country: "EGYPT",
    city: "Cairo",
    description: "Cairo is home to thousands of years of history, from the Pyramids of Giza to the busy streets of Khan el-Khalili.",
    continent: "Africa",
    food: "Koshari, Ful Medames",
    place: "Pyramids of Giza",
    language: "Arabic",
    image: "giza-pyramids-cairo-egypt-with-palm-1024x634.webp",
    more: "Visit the Egyptian Museum, then take a felucca ride on the Nile at sunset."
  },
  {
    country: "USA",
    city: "New York",
    description: "New York never sleeps. Its skyline, theaters, museums and neighborhoods make it a city of endless energy.",
    continent: "North America",
    food: "Pizza, Bagels",
    place: "Statue of Liberty",
    language: "English",
    image: "Statue-of-Liberty-Upper-New-York-Bay.webp",
    more: "Walk the Brooklyn Bridge at sunrise and relax in Central Park in the afternoon."
  }
];

// جيب العناصر من الصفحة
var counter     = document.querySelector("b");
var country     = document.querySelector("small");
var city        = document.querySelector("div h3");
var description = document.querySelector("div > p");
var facts       = document.querySelectorAll("li p");   // 0 قارة - 1 أكل - 2 مكان - 3 لغة
var image       = document.querySelector("img");
var imageNumber = document.querySelector("figcaption h3");
var moreBtn     = document.querySelector("div button");
var moreText    = document.querySelector("blockquote");
var prevBtn     = document.querySelectorAll("menu button")[0];
var nextBtn     = document.querySelectorAll("menu button")[1];
var dots        = document.querySelectorAll("ol li");

// رقم المدينة  (بيبدأ من 0)
var current = 0;


function twoDigits(n) {
  if (n < 10) {
    return "0" + n;
  }
  return "" + n;
}

// عرض المدينة 
function showDestination() {
  var item = destinations[current];

  counter.textContent     = twoDigits(current + 1) + " / " + twoDigits(destinations.length);
  imageNumber.textContent = twoDigits(current + 1);

  country.textContent     = item.country;
  city.textContent        = item.city;
  description.textContent = item.description;
  facts[0].textContent    = item.continent;
  facts[1].textContent    = item.food;
  facts[2].textContent    = item.place;
  facts[3].textContent    = item.language;

  image.src = item.image;
  image.alt = item.city + " City";

  // علشان نقفل النص
  moreText.textContent = item.more;
  moreText.hidden = true;
  moreBtn.textContent = "Explore More";

  for (var i = 0; i < dots.length; i++) {
    if (i == current) {
      dots[i].style.backgroundColor = "#180893";
    } else {
      dots[i].style.backgroundColor = "#d1d5db";
    }
  }
}


nextBtn.onclick = function () {
  current = current + 1;
  if (current == destinations.length) {
    current = 0;
  }
  showDestination();
};

prevBtn.onclick = function () {
  current = current - 1;
  if (current < 0) {
    current = destinations.length - 1;
  }
  showDestination();
};

moreBtn.onclick = function () {
  if (moreText.hidden) {
    moreText.hidden = false;
    moreBtn.textContent = "Show Less";
  } else {
    moreText.hidden = true;
    moreBtn.textContent = "Explore More";
  }
};

// لما اضغط واروع للمدينة 
for (var i = 0; i < dots.length; i++) {
  dots[i].onclick = function () {
    current = Array.prototype.indexOf.call(dots, this);
    showDestination();
  };
}


function goTo(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
}

var links = document.querySelectorAll("nav a");
links[0].onclick = function () { goTo("header"); };   
links[1].onclick = function () { goTo("main"); };     
links[2].onclick = function () { goTo("aside"); };    

document.querySelector("header button").onclick = function () { goTo("main"); };
document.querySelector("section a").onclick     = function () { goTo("main"); };

showDestination();
