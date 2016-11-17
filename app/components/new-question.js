import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        questionContent: this.get('questionContent') ? this.get('questionContent'): "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
