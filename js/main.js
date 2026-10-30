console.log("catalog.js подключён");
const form = document.querySelector(".catalog-filters form");

function getFilters() {
  const categories = [];
  const checkedBoxes = form.querySelectorAll('input[name="category"]:checked');

  checkedBoxes.forEach(function (box) {
    categories.push(box.value);
  });

  const priceInput = form.querySelector('input[name="price"]:checked');

  return {
    categories: categories,
    price: priceInput.value,
  };
}

const cards = document.querySelectorAll(".product-grid__item");

function applyFilters() {
  const filters = getFilters();
  const maxPrice = filters.price === "any" ? Infinity : Number(filters.price);

  cards.forEach(function (card) {
    const category = card.dataset.category;
    const price = Number(card.dataset.price);

    const categoryOk =
      filters.categories.length === 0 || filters.categories.includes(category);
    const priceOk = price <= maxPrice;

    card.hidden = !(categoryOk && priceOk);
  });
}

form.addEventListener("change", applyFilters);

form.addEventListener("reset", function () {
  cards.forEach(function (card) {
    card.hidden = false;
  });
});