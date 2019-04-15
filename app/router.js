import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals', function() {
    this.route('new');
    this.route('edit', { path:  '/:rentals/edit' });
  });

  this.route('rental', function() {
    this.route('new');
    this.route('edit');
  });
});

export default Router;
