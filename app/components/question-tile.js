import Ember from 'ember';

export default Ember.Component.extend({
  timesAnswered: Ember.computed('question.answers', function() {
    var numberTimesAnswered = this.get('question.answers').get('length');
    if (numberTimesAnswered === 0) {
      return ' There are no answers at this time';
    }
    else {
      return ' answers received - ' + numberTimesAnswered;
    }
  })
});
