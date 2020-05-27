        function initMap() {
            // The location of losAngeles
            var losAngeles = {
                lat: 34.063380,
                lng: -118.35800
            };
            // The map, centered at losAngeles, and adding black styling
            var map = new google.maps.Map(
                document.getElementById('map'), {
                    zoom: 9,
                    center: losAngeles,
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
            // The marker, positioned at losAngeles
            var marker = new google.maps.Marker({
                position: losAngeles,
                map: map

            });
        }

        window.onload = () => { // on window.onload = function () { }
            displayStores();
        }

        function displayStores() { // stores it's a list with objects
            let storesHtml = '';
            for (let store of stores) {
                storesHtml += `
                <div class="store-container">
                <div class="left-side">
                    <div class="store-addres">
                        8480 Beverly Blvd
                        Los Angeles, CA 90048
                    </div>
                    <div class="store-phone-number">
                        356-259-4789
                    </div>
                </div>
                <div class='number'>1</div>
            </div>
            `
                document.querySelector('.stores-list').innerHTML = storesHtml;
            }
        }