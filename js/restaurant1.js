const Menu_Items = [
    {
      item: "pear salad",
      price: 11,
      ingredients:
        "Reid’s Orchard Pears / Bitter Greens / Granola / Big Firefly / Farms Black and Blue / Pine Nut Vinaigrette",
    },
    {
      item: "BRODETTO DI PESCE",
      price: 9,
      ingredients:
        "Adriatic Seafood Soup / Clams / Prawns / Livornese / Langoustine Scallop / Celery / Olive",
    },
    {
      item: "RICOTTA GNUD",
      price: 18,
      ingredients:
        "Marinated Sardine / Red Currant / Chanterelles / Pine Nuts / Mantecato Vitello / Fennel / Olive / Pepitas",
    },
    {
      item: "FARM GREENS",
      price: 9,
      ingredients: "Honey Vinaigrette / House Cheese Crouton / Fine Herbs",
    },
    {
      item: "GRILLED KALE",
      price: 9,
      ingredients: "Bitter Greens / House Cheese Crouton / Kamon Iberico",
    },
  ];

// document.readyState()
// const Menu_Items,
// fetch("../assets/TextualData/restaurant1Data.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     Menu_Items = data.Menu_Items;
//     Desserts = data.Desserts;
//     Blogs = data.Blogs;
//     LearnCookingImages = data.LearnCookingImages;
//     setMenuItems();
//   });

setMenuItems();

function setMenuItems() {
  const MenuList = document.querySelector(".menu-list");
  for (let n in Menu_Items) {
    var { item, price, ingredients } = Menu_Items[n];
    var li = document.createElement("li");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    h3.innerHTML = item + " / $" + price;
    p.innerHTML = ingredients;
    li.append(h3);
    li.append(p);
    MenuList.append(li);
  }
}
