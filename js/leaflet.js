var map = L.map('map').setView([25.7178972,-80.2768255], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([25.7178972,-80.2768255]).addTo(map)
    .bindPopup('My Sweet Home.')
    .openPopup();

    var circle = L.circle([25.7178972,-80.2768255], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
    }).addTo(map);