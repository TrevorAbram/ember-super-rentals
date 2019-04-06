import Route from '@ember/routing/route';

export default Route.extend({

  model(){
    return [
      //Home 1
      {id: 'old mansion',
      title: 'Old Mansion',
      owner: 'Versa Cruz',
      city: "Texas",
      category: "Building",
      bedrooms: 10,
      bathrooms: 10,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description: 'You will love this mansion. Tour it today!'
      },

      //Home 1
      {id: 'terracotta',
      title: 'Terra Cotta New',
      owner: 'Trevor',
      city: "New Mexico",
      category: "Single Family Home",
      bedrooms: 9,
      bathrooms: 6,
      image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description: 'This home is full of love and is great for new families! Tour it today!'
      },

      //Home 1
      {id: 'old mansion',
      title: 'Old Mansion',
      owner: 'Versa Cruz',
      city: "Texas",
      category: "Mansion",
      bedrooms: 10,
      bathrooms: 10,
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1946&q=80",
      description: 'You will love this mansion. Tour it today!'
      },

    ]
  }
});
