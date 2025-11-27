// CODE-3: Cancellation Feature

function cancelTicket() {
  let booking = localStorage.getItem("booking");

  if (!booking) {
    document.getElementById("result").innerHTML = "No booking found.";
    return;
  }

  localStorage.removeItem("booking");

  document.getElementById("result").innerHTML = "Your ticket has been canceled.";
}
