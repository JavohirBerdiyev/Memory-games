const elContainer = document.querySelector("#container");
const cards_length = 16;
const cards = [];

let preShow = false;
let icons = ["laugh", "camera", "moon", "car", "star", "phone", "user", "home"];
icons.push(...icons);

for (let i = 0; i < 100; i++) {
  const idx1 = Math.floor(Math.random() * cards_length);
  const idx2 = Math.floor(Math.random() * cards_length);

  const temp = icons[idx1];
  icons[idx1] = icons[idx2];
  icons[idx2] = temp;
}

icons.forEach((item) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.innerHTML = `
    <div class="front">
      <i class='bx bx-${item}'></i>
    </div>
    <div class='back'><p>Click me </p> </div>
  `;

  cardEl.addEventListener("click", () => {
    if (!cardEl.classList.contains("show")) {
      cardEl.classList.add("show");
    }

    if (!preShow) {
      preShow = cardEl;
    } else {
      const iconOne = preShow.querySelector("i").classList[1];
      const iconTwo = cardEl.querySelector("i").classList[1];
      if (iconOne !== iconTwo) {
        const temp = preShow;
        setTimeout(() => {
          temp.classList.remove("show");
          cardEl.classList.remove("show");
        }, 1000);
        preShow = undefined;
      }
    }
  });

  elContainer.appendChild(cardEl);
});
