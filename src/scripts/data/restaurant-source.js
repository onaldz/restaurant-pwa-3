import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    const data = responseJson.restaurants;
    return data;
  }

  // static async reviewResto() {
  //   const response = await fetch(API_ENDPOINT.REVIEW);
  //   const responseJson = await response.json();
  //   //return responseJson.results;
  //   return responseJson;
  // }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const data = responseJson.restaurant;
    return data;
  }
}

export default RestaurantSource;
