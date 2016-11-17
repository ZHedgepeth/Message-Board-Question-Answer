import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  answerContent: DS.attr(),
  votes: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
