
function initMap() {

    var styles = [
        {
            "stylers": [
                {
                    "hue": "#ff1a00"
                },
                {
                    "invert_lightness": true
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 33
                },
                {
                    "gamma": 0.5
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#313862"
                }
            ]
        }
    ];
  
    var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});
  
    var mapOptions = {
      scrollwheel: false,
      zoom: 12,
      center: new google.maps.LatLng(55.6468, 37.581),
      useMapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: []
      }
    };
  
    var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
  
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
  
    var geocoder = new google.maps.Geocoder();
    geocodeAddress(geocoder, map);
  
  }
  