// Sample trips
let trips = [
  { id: 1, title: "Paris Getaway", destination: "Paris", price: 1200, description: "Romantic trip to Paris." },
  { id: 2, title: "Tokyo Adventure", destination: "Tokyo", price: 1800, description: "Explore Tokyo's culture." },
  { id: 3, title: "London Explorer", destination: "London", price: 1500, description: "Visit London sights." }
];

// Render trips cards
function renderTrips(list) {
  const container = document.getElementById("trips");
  if (!container) return;
  container.innerHTML = "";
  list.forEach(t => {
    container.innerHTML += `
      <div class="card">
        <h3>${t.title}</h3>
        <p>${t.destination}</p>
        <p class="price">$${t.price}</p>
        <a href="#" onclick="viewTrip(${t.id})">View trip</a>
      </div>
    `;
  });
}

// Sidebar navigation
function showDashboard() {
  const container = document.getElementById("main-content");
  container.innerHTML = `
    <h2>Dashboard</h2>
    <p>Here are your bookings:</p>
    <div class="container">
      <div class="card">
        <h3>Paris Getaway</h3>
        <p>Seats: 2</p>
        <p>Total: $2400</p>
      </div>
      <div class="card">
        <h3>Tokyo Adventure</h3>
        <p>Seats: 1</p>
        <p>Total: $1800</p>
      </div>
    </div>
  `;
}

function showTrips() {
  const container = document.getElementById("main-content");
  container.innerHTML = `
    <section class="hero">
      <h2>Find your next adventure</h2>
      <p>Book trips, explore destinations, travel smarter</p>

      <div class="search-box">
        <input id="search" placeholder="Search destination...">
      </div>
    </section>
    <div id="trips" class="container"></div>
  `;
  renderTrips(trips);

  const search = document.getElementById("search");
  search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    renderTrips(trips.filter(t => t.destination.toLowerCase().includes(value)));
  });
}

function showProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const container = document.getElementById("main-content");
  if (!user) {
    container.innerHTML = "<p>Please log in to see your profile.</p>";
    return;
  }
  container.innerHTML = `
    <h2>Profile</h2>
    <div class="card">
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Location:</strong> ${user.location}</p>
    </div>
  `;
}

function viewTrip(id) {
  const trip = trips.find(t => t.id === id);
  if (!trip) return;
  const container = document.getElementById("main-content");
  container.innerHTML = `
    <h2>${trip.title}</h2>
    <p>${trip.description}</p>
    <p><strong>Destination:</strong> ${trip.destination}</p>
    <p><strong>Price per seat:</strong> $${trip.price}</p>
    <input id="seats" type="number" min="1" value="1">
    <p>Total: $<span id="total">${trip.price}</span></p>
    <button onclick="bookTrip(${trip.id})">Book Now</button>
    <button onclick="showTrips()">Back to trips</button>
  `;

  const seatsInput = document.getElementById("seats");
  const totalSpan = document.getElementById("total");
  seatsInput.addEventListener("input", () => {
    totalSpan.textContent = seatsInput.value * trip.price;
  });
}

function bookTrip(id) {
  alert("Trip booked! (Demo only)");
}
