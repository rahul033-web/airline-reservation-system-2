// --- Modal Booking Form ---
const modal = document.getElementById("bookingForm");

function openBookingForm(flight, from, to, departure) {
  modal.style.display = "flex";
  document.getElementById("flightName").value = flight;
  document.getElementById("from").value = from;
  document.getElementById("to").value = to;
  document.getElementById("departure").value = departure;
}

function closeForm() {
  modal.style.display = "none";
}

// --- Booking Submission ---
document.getElementById("form")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const booking = {
    flight: document.getElementById("flightName").value,
    from: document.getElementById("from").value,
    to: document.getElementById("to").value,
    departure: document.getElementById("departure").value,
    name: document.getElementById("passengerName").value,
    email: document.getElementById("email").value,
    seat: document.getElementById("seatNo").value,
  };

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("✅ Booking Confirmed!!!!!");
  closeForm();
  this.reset();
});

// --- Display Bookings ---
const bookingsContainer = document.getElementById("bookingsContainer");
if (bookingsContainer) {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  if (bookings.length === 0) {
    bookingsContainer.innerHTML = "<p>No bookings yet.</p>";
  } else {
    bookingsContainer.innerHTML = bookings
      .map(
        (b) => `
        <div class="booking-card">
          <h3>${b.flight}</h3>
          <p><strong>Passenger:</strong> ${b.name}</p>
          <p><strong>Email:</strong> ${b.email}</p>
          <p><strong>From:</strong> ${b.from}</p>
          <p><strong>To:</strong> ${b.to}</p>
          <p><strong>Departure:</strong> ${b.departure}</p>
          <p><strong>Seat:</strong> ${b.seat}</p>
        </div>`
      )
      .join("");
  }
}
