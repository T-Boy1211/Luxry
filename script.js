function toast(message = 'Welcome', colour = 'red', duration = 3000) {
  Toastify({
    text: message,
    duration: duration,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: colour
    },
    onClick: function () {}
  }).showToast();
}

const cars = [
  {
    name: 'Bugatti'
  },
  {
    name: 'Lamborghini'
  },
  {
    name: 'Ferrar'
  },
  {
    name: 'Mercedes-Benz'
  },
  {
    name: 'Audi'
  },
  {
    name: 'BMW'
  },
  {
    name: 'Rolls-Royce'
  },
  {
    name: 'Aston Martin'
  },
  {
    name: 'Porsche'
  },
  {
    name: 'Nissan'
  },
  {
    name: 'Toyota'
  }
]

function searchCars(event) {
  event.preventDefault();
  const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
  
  if (searchInput === "lamborghini") {
    window.location.href = "Lamborghini.html"
  } else if (searchInput === "bentley") {
    window.location.href = "Bentley.html"
  } else (searchInput === ""); {
    
    Toastify({
      text: `No results found for "${searchInput}". Try searching for Lamborghini.`,
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "linear-gradient(to right, #ff5f6d, #ffc371)",
      },
    }).showToast();  
  }
}