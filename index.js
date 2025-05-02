// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 10;

// === Utility Functions ===
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomRate(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomFreelancer() {
  return {
    name: getRandomItem(NAMES),
    occupation: getRandomItem(OCCUPATIONS),
    rate: getRandomRate(PRICE_RANGE.min, PRICE_RANGE.max),
  };
}

// ==== Generate Freelancers ===
const freelancers = Array.from(
  { length: NUM_FREELANCERS },
  createRandomFreelancer
);

// === Render Table ===
function renderTable(freelancers) {
  const table = document.createElement("table");

  // Header
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Occupation</th>
      <th>Hourly Rate</th>
    </tr>
  `;

  // Body
  const tbody = document.createElement("tbody");
  freelancers.forEach((f) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = f.name;

    const occupationCell = document.createElement("td");
    occupationCell.textContent = f.occupation;

    const rateCell = document.createElement("td");
    rateCell.textContent = `$${f.rate}`;

    row.append(nameCell, occupationCell, rateCell);
    tbody.appendChild(row);
  });

  table.append(thead, tbody);
  return table;
}

// === Render App ===
function render() {
  const app = document.getElementById("app");
  app.innerHTML = "<h2>Freelancer Directory</h2>";
  app.appendChild(renderTable(freelancers));
}

render();
