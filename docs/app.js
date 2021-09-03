let map;
let markers = [];

function initMap() {
	const cochabamba = {lat: -17.413, lng: -66.165};
	
	map = new google.maps.Map(document.getElementById('map'), {
		center: cochabamba,
		zoom: 12
	});	
	
	// Add permanent marker -> Jalasoft pos
	const jalasoftMarker = new google.maps.Marker({
		position: { lat: -17.36616869888491, lng: -66.17546674235226 },//, 
		map: map,
		icon: '../img/jalasoft-landmark.png'
	});
	
	map.addListener('click', (event) => addMarker(event.latLng));
}

function addMarker(pos) {
	if(markers.length) {
		markers[0].setMap(null);
		markers.pop();
	}
	
	const marker = new google.maps.Marker({
		position: pos,
		map: map
	});
	markers.push(marker);
	
	let infoWindow = new google.maps.InfoWindow({
		content: '<h3>Whatever</h3>'
	});
	marker.addListener('click', () => infoWindow.open(map, marker));
}
