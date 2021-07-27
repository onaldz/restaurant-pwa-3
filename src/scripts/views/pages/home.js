import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div id="content" class="content">
      <h2 class="content__heading"></h2>
      <div id="restaurants" class="restaurants">

      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listResto();
    const restContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
