// Instructions to every other class
// on how they can be arguement to `addMarker`
interface Mappable {
  location: { lat: number; lng: number };

  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable): void {
    // addMarker(mappable: User | Company): void {
    // * The result of 'or' operator here is that TS is going to limit the number of properties that we can refer to on this mappable thing
    // * TS 會自動比對 User 和 Company 都有的 property，所以此處只剩下 location

    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
