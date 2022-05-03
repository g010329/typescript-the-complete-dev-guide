import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: { lat: user.location.lat, lng: user.location.lng },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: { lat: company.location.lat, lng: company.location.lng },
  //   });
  // }

  addMarker(mappable: User | Company): void {
    // * The result of 'or' operator here is that TS is going to limit the number of properties that we can refer to on this mappable thing
    // * TS 會自動比對 User 和 Company 都有的 property，所以此處只剩下 location

    new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });
  }
}
