import DS from 'ember-data';

export default DS.Model.extend({
  // Add model attributes here:

  title: DS.attr('string'),
  owner: DS.attr('string')

});
