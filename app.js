let savedItems = JSON.parse(localStorage.getItem("savedFoods")) || [];

function renderSaved() {
  const savedDiv = document.getElementById("saved");
  savedDiv.innerHTML = "";

  savedItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "card saved";
    div.innerHTML = `
      <p>${item}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    savedDiv.appendChild(div);
  });
}

function searchFood() {
  const query = document.getElementById("searchInput").value;
  const resultsDiv = document.getElementById("results");

  if (!query) {
    alert("Enter a food name");
    return;
  }

  // Dummy result (since no API used)
  resultsDiv.innerHTML = `
    <div class="card">
      <p>${query}</p>
      <button onclick="saveItem('${query}')">Save</button>
    </div>
  `;
}

function saveItem(item) {
  savedItems.push(item);
  localStorage.setItem("savedFoods", JSON.stringify(savedItems));
  renderSaved();
}

function removeItem(index) {
  savedItems.splice(index, 1);
  localStorage.setItem("savedFoods", JSON.stringify(savedItems));
  renderSaved();
}

// Load saved items on start
renderSaved();
