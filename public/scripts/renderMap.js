function renderMap(poolDiv, pool) {
  const position = {
    lat: pool.maps.lat,
    lng: pool.maps.long,
  };
  const mapDiv = poolDiv.getElementsByClassName('map-insert')[0];
  const mapConfig = {
    zoom: 12,
    center: position,
  };
  const map = new google.maps.Map(mapDiv, mapConfig);
  const marker = new google.maps.Marker({
    position,
    map,
  });
}
