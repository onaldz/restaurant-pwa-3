import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading"></h2>
    <div id="restaurants" class="restaurants">

    </div>
  </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurant();
    const restContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
