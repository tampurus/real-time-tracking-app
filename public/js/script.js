const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition((possition) => {
        const { latitude, longitude } = possition.coords;
        socket.emit('send-location', { latitude, longitude });

    }, (error) => {
        console.error('ERROR OCCURED =>', error);
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    })
}

const map = L.map('map').setView([0, 0], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markers = {};

socket.on('recieve-location', (data) => {
    const { id, latitude, longitude } = data;
    map.setView([latitude, longitude], 20);
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    }
    else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
})

socket.on('user-disconnected', (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})
