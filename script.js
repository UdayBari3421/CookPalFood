let arr = [
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

function toggleMenu() {
  var sideNav = document.getElementById("sideNav");
  var menuBtn = document.getElementById("menuBtn");
  var closeBtn = document.getElementById("close");

  if (sideNav.style.width === "50%") {
    sideNav.style.width = "0";
    menuBtn.innerHTML = "☰";
  } else {
    sideNav.style.width = "50%";
    closeBtn.innerHTML = `<span class="material-symbols-outlined">
                              close
                          </span>`;
  }
}

function addRecipes() {
  var container = document.getElementById("parent");

  arr.forEach(function (recipe, index) {
    var recipeDiv = document.createElement("div");

    recipeDiv.classList.add("card");

    recipeDiv.innerHTML = `
            <div class="card-img">
                <img id="recipeImage_${index}" height="100%" width="100%" src="${
      recipe.imageSrc
    }" alt="${recipe.name}">
            </div>
            <div class="type">${recipe.type}</div>
            <div class="food-name">
                <h1>${recipe.name}</h1>
                <div class="star-rate">
                    <img src="./images/Star.svg" alt="">
                    <label>${recipe.rating}</label>
                </div>
            </div>
            <div class="time">
                <div class="time-text">${recipe.time}</div>
                <div class="icons">
                    <img height="23px" id="likeImage_${index}" onclick="toggleLike(${index}, ${
      recipe.isLiked
    })" src="${
      recipe.isLiked ? "./images/like.png" : "./images/unlike.png"
    }" alt="">
                    <img src="./images/comments.png" alt="">
                </div>
            </div>
        `;

    container.appendChild(recipeDiv);
  });

  document.getElementById("search").addEventListener("input", filterRecipes);
  document.getElementById("above4").addEventListener("change", filterRecipes);
  document.getElementById("below4").addEventListener("change", filterRecipes);
}
function filterRecipes() {
  var searchTerm = document.getElementById("search").value.toLowerCase();

  var above4Checkbox = document.getElementById("above4");
  var below4Checkbox = document.getElementById("below4");

  var recipeCards = document.querySelectorAll(".card");

  recipeCards.forEach(function (recipeCard) {
    var recipeName = recipeCard
      .querySelector(".food-name h1")
      .textContent.toLowerCase();
    var recipeRating = parseFloat(
      recipeCard.querySelector(".star-rate label").textContent
    );

    var nameMatches = recipeName.includes(searchTerm);

    var above4Matches =
      !above4Checkbox.checked || (above4Checkbox.checked && recipeRating >= 4);
    var below4Matches =
      !below4Checkbox.checked || (below4Checkbox.checked && recipeRating < 4);

    if (
      (above4Checkbox.checked && below4Checkbox.checked) ||
      (nameMatches && above4Matches && below4Matches)
    ) {
      recipeCard.style.display = "block";
    } else {
      recipeCard.style.display = "none";
    }
  });
}

function filterByType(type) {
  var recipeCards = document.querySelectorAll(".card");

  recipeCards.forEach(function (recipeCard) {
    var recipeType = recipeCard
      .querySelector(".type")
      .textContent.toLowerCase();

    if (type === "all" || type === recipeType) {
      recipeCard.style.display = "block";
    } else {
      recipeCard.style.display = "none";
    }
  });

  document.getElementById("above4").checked = false;
  document.getElementById("below4").checked = false;
}

function toggleLike(index) {
  var likeImage = document.getElementById(`likeImage_${index}`);

  arr[index].isLiked = !arr[index].isLiked;

  likeImage.src = arr[index].isLiked
    ? "./images/like.png"
    : "./images/unlike.png";
}

window.onload = addRecipes;
