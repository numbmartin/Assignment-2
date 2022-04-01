var map = L.map('map').setView([25.7825453, -80.2994984], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([25.7825453, -80.2994984]).addTo(map)
    .bindPopup('My Sweet Home.')
    .openPopup();