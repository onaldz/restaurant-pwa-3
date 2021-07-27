class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurant }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurant;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchRestaurants(event.target.value);
    });
  }

  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery;
    const foundRestaurants = await this._favoriteRestaurants.searchRestaurants(this.latestQuery);
    this._showFoundRestaurants(foundRestaurants);
  }

  _showFoundRestaurants(restaurant) {
    const html = restaurant.reduce(
      // eslint-disable-next-line no-shadow
      (carry, restaurant) => carry.concat(`<li class="restaurant"><span class="restaurant__title">${restaurant.title || '-'}</span></li>`),
      '',
    );

    document.querySelector('.restaurants').innerHTML = html;
    document.getElementById('restaurant-search-container')
      .dispatchEvent(new Event('restaurants:searched:updated'));
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;
