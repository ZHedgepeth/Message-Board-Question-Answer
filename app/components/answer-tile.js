import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  addToFavorites: false,

  heading: Ember.computed('answer.author', function()   {
  return this.get('answer.author') + ' - ' + this.get('answer.answerContent');
}),

  actions: {
    favoriteButtonShow() {
      this.set('addToFavorites', false);
    },
    addToFavorites(answer) {
      this.get('favorites').add(answer);
    }
  }
});
