const assert = require("assert");

// eslint-disable-next-line no-undef
Feature("UnLiking Restaurant");
// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage("/#/favorites");
});
// eslint-disable-next-line no-undef
Scenario("test something", async ({ I }) => {
  I.see(
    "Anda belum menambahkan restaurant favorit.",
    ".restaurant-item_not_found"
  );
  I.amOnPage("/");
  I.seeElement(".restoran-item__name");
  // eslint-disable-next-line no-undef
  const firstFilm = locate(".restoran-item__name").first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);
  I.seeElement("#likeButton");
  I.seeElement('[aria-label="like this restaurants"]');
  I.click("#likeButton");
  I.amOnPage("/#/favorites");
  I.seeElement(".restoran-item");
  const likedFilmTitle = await I.grabTextFrom(".restoran-item__name");
  assert.strictEqual(firstFilmTitle, likedFilmTitle);
  I.click(firstFilm);
  I.seeElement("#likeButton");
  I.seeElement('[aria-label="like this restaurants"]');
  I.click("#likeButton");
  I.amOnPage("/#/favorites");
  I.see("Daftar Restoran Favorit Belum Ada.", ".restaurant-item_not_found");
});
