
Router.configure({
    layoutTemplate: "mainLayout"
});

Router.route('/', {
    name: "home",
    template: "home",
});

Router.route('/register', {
    name: "register"
});

Router.route('/login', {
    name: 'login'
});

Router.route('/articles', {
    name: 'articles'
});

Router.route('/Addcommerces', {
    name: 'Addcommerces',
    template: "Addcommerces"
});

Router.route('/Commerces', {
    name: 'DisplayCommerces',
    template: 'commerces'
});