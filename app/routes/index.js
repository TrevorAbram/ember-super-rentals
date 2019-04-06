import Route from '@ember/routing/route';

export default Route.extend({

//Replaces rentals with the index route, creating a home page
  beforeModel(){
    this.replaceWith('rentals');
  }
});
