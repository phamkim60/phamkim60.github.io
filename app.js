const app = {
    boutonUp: null,

    init: function() {
        app.boutonUp = document.querySelector('#bouton-up');
        app.boutonUp.addEventListener('click', app.handleOnClickBoutonUp);
        window.onscroll = app.handleOnScroll;
    },

    handleOnScroll: function () {
        // Faire apparaitre/disparaitre le bouton-up
        const headerHeight = document.querySelector('header').offsetHeight - 1;
        if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
            app.boutonUp.style.display = "block";
        } else {
            app.boutonUp.style.display = "none";
        }
    },

    handleOnClickBoutonUp: function () {
        // Scroll fluide vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    },
}

document.addEventListener('DOMContentLoaded', app.init);
