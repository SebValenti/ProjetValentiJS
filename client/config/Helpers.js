UI.registerHelper('getGlobal', function(varName) {
    return Globals[varName];
});

UI.registerHelper('setTitle', function (title) {
   if(!title){
       title = Globals.appName;
   }
   else{
       title += "-" + Globals.appName;
   }

   document.title = title;
});

UI.registerHelper('getCommerces', function () {
    let datas = [];

    Commerces.find({}).forEach(function(Doc){
        datas.push(Doc)
    });
    console.log(datas);
    return datas;
});

Template.register.helpers({
    users: function () {
        return Meteor.users;
    },
    userSchema: function () {
        return Schemas.User;
    }
});

Template.map.helpers({
    mapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(45.75, 4.85),
                zoom: 8
            };
        }
    }
});

Template.commerces.helpers({
    'commerces': function () {
        let test = Commerces.Find({});
        return test;
    }
});