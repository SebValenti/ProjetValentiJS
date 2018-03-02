import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
SimpleSchema.extendOptions(['denyUpdate']);

Commerces = new Mongo.Collection("commerces");

Commerces.allow({
    insert: function () {return true;},
    update: function () {return true;},
    remove: function () {return true;}
});

Commerces.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Nom"
    },
    address: {
        type: String,
        label: "Adresse"
    },
    telephone: {
        type: String,
        label: 'Telephone'
    },
    horaires: {
        type: String,
        label: 'Horaire'
    },
    description: {
        type: String,
        label: 'Description'
    },
    longitude: {
        type: String,
        label: 'Longitude'
    },
    latitude: {
        type: String,
        label: 'Latitude'
    },
}));
