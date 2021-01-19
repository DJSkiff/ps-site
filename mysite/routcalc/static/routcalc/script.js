google.maps.event.addDomListener(window, 'load', init);
const geocoder = new google.maps.Geocoder();
        const directionsService = new google.maps.DirectionsService();
        const sl = document.getElementById('wayPoints');
        const input = document.getElementById('locationTextField');
        const fullRoute = document.getElementById('fullRoute');

        const directionsRenderer = new google.maps.DirectionsRenderer();

        var wayPoint = {
            location: '',
            stopover: false
        };

        function calcRoute(start, end, wayPoints) {
            /*var start = 'Україна, Київ';
            var end = 'Україна, Київ';
            var wayPoints = [{
                location: 'Україна, Харків',
                stopover: false
            },]*/
            var request = {
                origin: start,
                destination: end,
                waypoints: wayPoints,
                travelMode: 'DRIVING'
            };
            directionsService.route(request, function (response, status) {
                if (status == 'OK') {
                    directionsRenderer.setDirections(response);
                    console.log(response);
                    fullRoute.value = response.routes[0].legs[0].distance.value;
                }
            });
        }

        function init() {
            var autocomplete = new google.maps.places.Autocomplete(input);
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 7,
                center: { lat: 50.27, lng: 30.31 },
            });

            directionsRenderer.setMap(map);
        }

        function setName() {

            const address = document.getElementById('locationTextField').value;

            geocoder.geocode({ address: address }, (results, status) => {
                if (status === "OK") {
                    const option = new Option(results[0].formatted_address, results[0].place_id);
                    // add it to the list
                    sl.add(option, undefined);
                    input.value = ''
                    console.log(results[0].place_id);
                }
                else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });

            geocoder.geocode({ placeId: 'ChIJC-iwjvLN1EARZWJbVLzwJXY' }, (results, status) => {
                if (status === "OK") {
                    const conwertAddress = results[0].formatted_address;
                } else {
                    console.log("Geocode was not successful for the following reason: " + status);
                }
            });

            /*console.log(geoCode(address));*/
            /*console.log(conwertAddress);*/

        }

function delName() {
            var selectedIndex = sl.options.selectedIndex;

            sl.options[selectedIndex] = null;

        }

function createRoute() {
            var start = document.getElementById('start').value;
            var end = document.getElementById('end').value;
            var waiPoints = []; // string to store the selected stuff
            for (let count = 0, limit = sl.options.length; count < limit; count++) { //check every option
                /*if (sl.options[count].selected) // check if it's selected*/
                wp = Object.create(wayPoint)
                wp['location'] = sl.options[count].text
                wp['stopover'] = false
                waiPoints.push(wp)
            };// Concat to string and add delimiter, string format is up to you, here i add the .value but could also be .text or both..
            calcRoute(start, end, waiPoints);
            console.log(waiPoints);
            sl.selectedIndex = -1;
        }


        