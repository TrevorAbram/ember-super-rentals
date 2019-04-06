export default function() {
  this.namespace = "/api";

  this.get('/rentals', function(){
    return {
    data: [{
      type: 'rentals',
      id: "Grand Mansion",
      attributes: {
        title: 'Old Mansion',
        owner: 'Versa Cruz',
        city: "Texas",
        category: "Building",
        bedrooms: 10,
        bathrooms: 10,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        description: 'You will love this mansion. Tour it today!'
        }
      }]
    };
  });
}
