function initMap() {	
	let map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 5
	})
	
	let marker = new google.maps.Marker({
		position: {lat:-33.790, lng:151.081},
		map: map,
		icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	})
	
	let infoWindow = new google.maps.InfoWindow({
		content: '<h1>Whatever</h1>'
	})
	
	marker.addListener('click', () => infoWindow.open(map, marker))
}