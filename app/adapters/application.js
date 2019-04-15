import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // Instead of namespace, we are going to add our local server host: 4200
  // That should work instead of using API. This is similar to how you would build
  // and API in the real world.

  host: 'http://localhost:4200'
});
