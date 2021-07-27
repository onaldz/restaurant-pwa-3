const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking satu restaurant', async ({ I }) => {
  I.seeElement('#restaurants');
  I.amOnPage('/');
  I.seeElement('.restaurant-item__detail-btn a');
  const firstRestaurant = locate('.restaurant-item__detail-btn a').first();
  const fisrtRestaurantTitleLocate = locate('.restaurant-item__content h3').first();
  const firstRestaurantTitle = await I.grabTextFrom(fisrtRestaurantTitleLocate);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.click(firstRestaurant);
  I.seeElement('.card__detail');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  // menuju page home untuk melakukan like terlebih dahulu
  I.amOnPage('/');

  I.seeElement('.restaurant-item__detail-btn a');
  I.click(locate('.restaurant-item__detail-btn a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // menuju page favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item__detail-btn a');
  const firstLikedRestaurant = locate('.restaurant-item__detail-btn a').first();
  const firstLikedRestaurantlocate = locate('.restaurant-item__content h3').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurantlocate);
  I.click(firstLikedRestaurant);

  // menuju page detail untuk melakukan unlike
  I.seeElement('.card__detail');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  // menuju page favorit untuk memastikan berhasil melakukan unlike
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card__detail');
  I.dontSeeElement('restaurant-item__detail-btn a');
});
