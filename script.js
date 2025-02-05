let arr = [
  {
    name: "Veggie Delight",
    imageSrc:
      "https://images.unsplash.com/photo-1617470702892-e01504297e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHw5fHxWZWdnaWUlMjBEZWxpZ2h0fGVufDB8fHx8MTczODY4NzUzNHww&ixlib=rb-4.0.3&q=80&w=1080",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc:
      "https://images.unsplash.com/photo-1592011432621-f7f576f44484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwxfHxHcmlsbGVkJTIwQ2hpY2tlbiUyMHxlbnwwfHx8fDE3Mzg2ODc3MzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHw1fHxDaGVlc2UlMjBQaXp6YXxlbnwwfHx8fDE3Mzg2ODc3NTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc:
      "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwxMHx8U3RlYWt8ZW58MHx8fHwxNzM4Njg3Nzk2fDA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHw0fHxHcmlsbGVkJTIwU2FsbW9ufGVufDB8fHx8MTczODY4NzgyMXww&ixlib=rb-4.0.3&q=80&w=1080",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc:
      "https://images.unsplash.com/photo-1528751086790-81a64658fc53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHw0fHxUb21hdG8lMjBQYXN0YXxlbnwwfHx8fDE3Mzg2ODc4NjF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc:
      "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwyfHxWZWdhbiUyMFNhbGFkfGVufDB8fHx8MTczODY4NzkwMHww&ixlib=rb-4.0.3&q=80&w=1080",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwxfHxGcmllZCUyMENoaWNrZW58ZW58MHx8fHwxNzM4Njg3OTQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwxfHxGcmllZCUyMENoaWNrZW58ZW58MHx8fHwxNzM4Njg3OTQyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwzfHxCdXJnZXJ8ZW58MHx8fHwxNzM4Njg3OTcyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwzfHxQYW5lZXIlMjBUaWtrYXxlbnwwfHx8fDE3Mzg2ODgwMDF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc:
      "https://images.unsplash.com/photo-1593030668930-8130abedd2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwyfHxCQlElMjBSaWJzfGVufDB8fHx8MTczODY4ODAyMXww&ixlib=rb-4.0.3&q=80&w=1080",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc:
      "https://images.unsplash.com/photo-1604909052743-94e838986d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHw3fHxDYWVzYXIlMjBTYWxhZHxlbnwwfHx8fDE3Mzg2NzQ3MTl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHw0fHxGaXNoJTIwVGFjb3N8ZW58MHx8fHwxNzM4Njg4MDU4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTU3MjJ8MHwxfHNlYXJjaHwxfHxDaG9jb2xhdGUlMjBDYWtlfGVufDB8fHx8MTczODY4ODA3OHww&ixlib=rb-4.0.3&q=80&w=1080",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

function toggleMenu() {
  const sideNav = document.getElementById("sideNav");
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("close");

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
  const container = document.getElementById("parent");

  arr.forEach(function (recipe, index) {
    const recipeDiv = document.createElement("div");

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
  const searchTerm = document.getElementById("search").value.toLowerCase();

  const above4Checkbox = document.getElementById("above4");
  const below4Checkbox = document.getElementById("below4");

  const recipeCards = document.querySelectorAll(".card");

  recipeCards.forEach(function (recipeCard) {
    const recipeName = recipeCard
      .querySelector(".food-name h1")
      .textContent.toLowerCase();
    const recipeRating = parseFloat(
      recipeCard.querySelector(".star-rate label").textContent
    );

    const nameMatches = recipeName.includes(searchTerm);

    const above4Matches =
      !above4Checkbox.checked || (above4Checkbox.checked && recipeRating >= 4);
    const below4Matches =
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
  const recipeCards = document.querySelectorAll(".card");

  recipeCards.forEach(function (recipeCard) {
    const recipeType = recipeCard
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
  const likeImage = document.getElementById(`likeImage_${index}`);

  arr[index].isLiked = !arr[index].isLiked;

  likeImage.src = arr[index].isLiked
    ? "./images/like.png"
    : "./images/unlike.png";
}

window.onload = addRecipes;
