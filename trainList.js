// CODE-1: Train Listing Feature

fetch("trains.json")
  .then(response => response.json())
  .then(trains => {
    let output = "";
    trains.forEach(t => {
      output += `<p>${t.id}. ${t.name} (${t.from} → ${t.to}) at ${t.time}</p>`;
    });
    document.getElementById("trainList").innerHTML = output;
  })
  .catch(err => console.error("Error loading train list:", err));
