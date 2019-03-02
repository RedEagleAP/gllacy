/*
 *Карта
 */

const appContactsMap = {
  map() {
    window.onload = () => {
      let mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(59.9389, 30.3259),
      }
      let map = new google.maps.Map(document.getElementById('contacts-map'), mapOptions)
      let image = 'images/map-marker.png'
      let myLatLng = new google.maps.LatLng(59.9385, 30.3229)
      let markPin = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
      })
    }
  },

  init() {
    this.map()
  },
}

export default appContactsMap
