import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div id="restaurant__detail" class="card__detail">
  <h1 tabindex="0" class="page__info">DETAIL</h1>
  <h2 tabindex="0" class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL_LARGE}${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
      <h3 tabindex="0">Alamat Restaurant</h3>
      <p tabindex="0" class="address">${restaurant.address}</p>
      <h3 tabindex="0">Kota</h3>
      <p class="city">${restaurant.city}</p>
      <h3 tabindex="0">Peringkat</h3>
      <p tabindex="0" class="rating">${restaurant.rating} ⭐</p>
      <h3 tabindex="0">Kategori Masakan</h3>
      <p tabindex="0" class="category">
      ${restaurant.categories
    .map(
      (resto) => `
      <span tabindex="0" class="category">${resto.name}</span>`,
    )}
      </p>
  </div>
  
  <div class="restaurant__menu">
      <h3 tabindex="0" class="menu__list">Menu Restaurant</h3>
      <details  class="list__fd">
        <summary tabindex="0">Makanan</summary>
          ${restaurant.menus.foods
    .map(
      (food) => `
      <ul class="food__item">
        <li>${food.name}</li>
      </ul>
        `,
    ).join('')}
      </details>
      <details class="list__fd">
        <summary tabindex="0">Minuman</summary>
          ${restaurant.menus.drinks
    .map(
      (drink) => `
      <ul class="food__item">
        <li>${drink.name}</li>
      </ul>
        `,
    ).join('')}
      </details>
  </div>                        
  <div class="restaurant__description">
      <h3 tabindex="0">Deskripsi</h3>
      <p tabindex="0">${restaurant.description}</p>
  </div>
  <div tabindex="0" class="customerReview">
      <h3 tabindex="0">Customer Reviews</h3>
      <p tabindex="0">
          ${restaurant.customerReviews
    .map(
      (reviews) => `
      <div tabindex="0" class="customerReview__comment">
        <span class="name">${reviews.name}</span>
        <span class="date">${reviews.date}</span><br>
        <span  class="review">${reviews.review}</span><br>
      </div>`,
    ).join('')}
      </p>
  </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img tabindex="0" class="restaurant-item__header__poster lazyload" alt="poster" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM}${restaurant.pictureId}" alt="Foto restoran ${restaurant.name}">
        <div  class="restaurant-item__header__city">
            <p><span tabindex="0" class="restaurant-item__header__city_location">${restaurant.city}</span></p>
        </div>
        <div class="restaurant-item__header__rating">
            <p><span tabindex="0" class="restaurant-item__header__rating__score">${restaurant.rating} ⭐️</span></p>
        </div>
    </div>
    <div tabindex="0" class="restaurant-item__content">
        <h3 tabindex="0">${restaurant.name}</h3>
        <p tabindex="0">${restaurant.description}...</p>
    </div>
    <p tabindex="0" class="restaurant-item__detail-btn"><a href="${`/#/detail/${restaurant.id}`}">Details</a></p>
  </div>

`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
