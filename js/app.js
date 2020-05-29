let map;
let markers = [];
let infoWindow;



function initMap() {
    var losAngeles = {
        lat: 34.063380,
        lng: -118.35800
    };
    map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 8,
            center: losAngeles,
            mapTypeId: 'roadmap',
            styles: [{
                    elementType: 'geometry',
                    stylers: [{
                        color: '#242f3e'
                    }]
                },
                {
                    elementType: 'labels.text.stroke',
                    stylers: [{
                        color: '#242f3e'
                    }]
                },
                {
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#746855'
                    }]
                },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#263c3f'
                    }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#6b9a76'
                    }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#38414e'
                    }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{
                        color: '#212a37'
                    }]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#9ca5b3'
                    }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#746855'
                    }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{
                        color: '#1f2835'
                    }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#f3d19c'
                    }]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#2f3948'
                    }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#17263c'
                    }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#515c6d'
                    }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{
                        color: '#17263c'
                    }]
                }
            ]
        });
    infoWindow = new google.maps.InfoWindow();

    searchStores();

}

// window.onload = () => { // on window.onload = function () { }
//     displayStores();
//     setOnClickListener();
// }


function searchStores() {

    let foundStores = [];
    let zipCode = document.getElementById('zip-code-input').value; // here is user input
    if (zipCode) {
        stores.forEach((store) => {
            let postal = store.address.postalCode.substring(0, 5); // here is store-data objects
            if (postal == zipCode) {
                foundStores.push(store);

            }
        });
    } else {
        foundStores = stores;
    };
    clearLocations()
    displayStores(foundStores);
    showStoresMarkers(foundStores);
    setOnClickListener();

};


function clearLocations() {
    infoWindow.close();
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers.length = 0;
};

function setOnClickListener() {
    let storeElements = document.querySelectorAll('.store-container');
    storeElements.forEach(function (element, index) {
        element.addEventListener('click', () => {
            google.maps.event.trigger(markers[index], 'click');
        })
    })
}


function displayStores(stores) { // stores it's a list with objects
    let storesHtml = '';
    for (let [index, store] of stores.entries()) { // we getting index by looping throught every single store entries. 
        //The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs,
        let address = store['addressLines'];
        let phone = store['phoneNumber'];

        storesHtml += `
                <div class="store-container">
                <div class="left-side">
                    <div class="store-addres">
                       ${address}
                    </div>
                    <div class="store-phone-number">
                        ${phone}
                    </div>
                </div>
                <div class='number'>${index+1}</div>
            </div>
            ` //the actual looping starting from 0 but +1 used just for display 
        document.querySelector('.stores-list').innerHTML = storesHtml;
    }
}


function showStoresMarkers(stores) {
    var bounds = new google.maps.LatLngBounds();
    stores.forEach(function (store, index) {
        let latlng = new google.maps.LatLng(
            store['coordinates']['latitude'],
            store['coordinates']['longitude']);


        let name = store['name'];
        let address = store['addressLines'][0];
        let openStatusText = store['openStatusText'];
        let phoneNumber = store['phoneNumber'];
        createMarker(latlng, name, address, openStatusText, phoneNumber, index + 1);
        bounds.extend(latlng);
    })
    map.fitBounds(bounds);
}

function createMarker(latlng, name, address, openStatusText, phoneNumber, index) {
    let html = `
      <div class='store-info-window'>
      <div class='image'>
      <img src=https://png.pngtree.com/png-vector/20190529/ourlarge/pngtree-coffee-cup-icon-png-image_1117236.jpg>
      </div>
         <div class='store-info-name'>
          ${name} 
         </div>
         <div class='store-info-status'>
         
         ${openStatusText}
         </div>
         <div class='store-address-info'>
           <a href='https://www.google.com/maps/dir/?api=1&origin=United+States&destination=${address}' target="_blank">${address}</a>
          </div>
         <div class='store-phone-number'>
           ${phoneNumber}
          </div>
                 
      </div>
    `

    let marker = new google.maps.Marker({
        position: latlng,
        map: map,
        label: {
            text: index.toString(),
            color: "#fff",
            fontWeight: "bold",
            fontSize: "12px",

        },
        icon: "./img/bakery.png"
    });
    google.maps.event.addListener(marker, 'click', () => {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
    });
    markers.push(marker);
}