        function initMap() {
            // The location of losAngeles
            var losAngeles = {
                lat: 34.063380,
                lng: -118.35800
            };
            // The map, centered at losAngeles
            var map = new google.maps.Map(
                document.getElementById('map'), {
                    zoom: 9,
                    center: losAngeles
                });
            // The marker, positioned at losAngeles
            var marker = new google.maps.Marker({
                position: losAngeles,
                map: map

            });
        }