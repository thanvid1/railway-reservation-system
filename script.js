// Task: DES-2, CODE-1 to CODE-4
let trains = [
    { id: 1, name: "Express 101", seats: 5 },
    { id: 2, name: "Fast 202", seats: 3 },
    { id: 3, name: "Local 303", seats: 4 }
];

let bookings = [];

// Display all trains
function showTrains() {
    let html = "";
    trains.forEach(train => {
        html += `<div class="train">
                    <strong>${train.id}. ${train.name}</strong> - Seats Available: ${train.seats}
                 </div>`;
    });
    document.getElementById("trainList").innerHTML = html;
}

// Display all bookings
function showBookings() {
    let html = "";
    if (bookings.length === 0) html = "No bookings yet.";
    bookings.forEach(booking => {
        html += `<div class="booking">
                    <strong>Booking ID:</strong> ${booking.id}<br>
                    <strong>Passenger:</strong> ${booking.name}<br>
                    <strong>Train:</strong> ${trains.find(t => t.id === booking.trainId).name}
                 </div>`;
    });
    document.getElementById("bookingList").innerHTML = html;
}

// Task: CODE-2 Book seat
function bookSeat() {
    let trainId = Number(document.getElementById("trainId").value);
    let name = document.getElementById("name").value.trim();

    if (!trainId || !name) {
        alert("Please enter both Train ID and Passenger Name.");
        return;
    }

    let train = trains.find(t => t.id === trainId);
    if (!train) {
        alert("Train not found.");
        return;
    }
    if (train.seats <= 0) {
        alert("No seats available.");
        return;
    }

    // Decrease seat count
    train.seats--;

    // Create booking
    let booking = { id: bookings.length + 1, trainId, name };
    bookings.push(booking);

    alert(`Booking successful! Booking ID: ${booking.id}`);
    showTrains();
    showBookings();
}

// Task: CODE-3 Cancel booking
function cancelBooking() {
    let bookingId = Number(document.getElementById("cancelId").value);
    if (!bookingId) {
        alert("Enter Booking ID to cancel.");
        return;
    }

    let booking = bookings.find(b => b.id === bookingId);
    if (!booking) {
        alert("Booking ID not found.");
        return;
    }

    // Increase train seats back
    let train = trains.find(t => t.id === booking.trainId);
    if (train) train.seats++;

    // Remove booking
    bookings = bookings.filter(b => b.id !== bookingId);

    alert("Booking cancelled successfully.");
    showTrains();
    showBookings();
}

// Initialize display
showTrains();
showBookings();
