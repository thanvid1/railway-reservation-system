// CODE-2: Booking Feature

function bookSeat() {
  let trainId = document.getElementById("trainId").value;
  let name = document.getElementById("name").value;

  if (trainId === "" || name === "") {
    document.getElementById("msg").innerHTML = "Please fill all fields.";
    return;
  }

  let booking = {
    bookingId: Date.now(),
    trainId,
    name
  };

  localStorage.setItem("booking", JSON.stringify(booking));

  document.getElementById("msg").innerHTML = "Seat booked successfully!";
}
