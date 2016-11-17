import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  addToFavorites: false,

  actions: {
    favoriteButtonShow() {
      this.set('addToFavorites', false);
    },
    addToFavorites(answer) {
      this.get('favorites').add(answer);
    }
  }
});
