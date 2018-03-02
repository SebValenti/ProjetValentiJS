AutoForm.hooks({
    'insertCommerces':{
        onSubmit: function (doc) {
            console.log(doc);
            let error = null;
            let name = doc.name;
            let telephone = doc.telephone;
            let horaires = doc.horaires;
            let address = doc.address;
            let description = doc.description;
            let latitude = doc.latitude;
            let longitude = doc.longitude;

            Commerces.insert({
                name: name,
                telephone: telephone,
                horaires: horaires,
                address: address,
                description: description,
                latitude: latitude,
                longitude: longitude,
            },function (err) {
                if (err){
                    error = new Error("Il y a une erreur");
                }
            });
            if(error === null) {
                this.done();
            }
            else {
                this.done(error);
            }
            return false;
        },
        onSuccess: function () {
            Router.go('home');
        },
        onError: function (formType, err) {
            console.log(err)
        }
    },
});

