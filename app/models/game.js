import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  type: DS.attr('string'),
  image: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string')
});
