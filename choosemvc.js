if (Meteor.is_client) {
  
  Meteor.subscribe("frameworks");

  Frameworks = new Meteor.Collection("frameworks");  
  
  Template.frameworks.frameworks = function() {
    return Frameworks.find({},{sort: name}).fetch();
  };
  
  Template.frameworks.events = {
      'change input': function(e, b) {
        Frameworks.update({_id: e.currentTarget.id}, { $push: { users: {name: e.currentTarget.value} } });
        e.currentTarget.value = ""; 
      }
  };

  Meteor.render(function() {
    return Template.frameworks(Frameworks);
  })
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
    Frameworks = new Meteor.Collection("frameworks");
    Frameworks.remove({});
    Frameworks.insert({name:'Backbone.js', url:'http://backbonejs.org/', users:[]});
    Frameworks.insert({name:'Ember.js', url:'http://emberjs.com/', users:[]});
    Frameworks.insert({name:'Spine', url:'http://spinejs.com/', users:[]});
    Frameworks.insert({name:'AngularJS', url:'http://angularjs.org/', users:[]});
    Frameworks.insert({name:'KnockoutJS', url:'http://knockoutjs.com/', users:[]});
    Frameworks.insert({name:'Dojo', url:'http://dojotoolkit.org/', users:[]});
    Frameworks.insert({name:'YUI', url:'http://yuilibrary.com/', users:[]});
    Frameworks.insert({name:'Batman.js', url:'http://batmanjs.org/', users:[]});
    Frameworks.insert({name:'Closure', url:'https://developers.google.com/closure/', users:[]});
    Frameworks.insert({name:'Agility.js', url:'http://agilityjs.com/', users:[]});
    Frameworks.insert({name:'Meteor', url:'http://meteor.com/', users:[]});
    Frameworks.insert({name:'DerbyJs', url:'http://derbyjs.com/', users:[]});
    Frameworks.insert({name:'ExtJs', url:'http://www.sencha.com/products/extjs/', users:[]});
    Meteor.flush();
  });
}