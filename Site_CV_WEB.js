document.getElementById('a_propos').addEventListener('click', function() {
    document.getElementById('bloc_2').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('competences').addEventListener('click', function() {
    document.getElementById('bloc_3').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact').addEventListener('click', function() {
    document.getElementById('bloc_4').scrollIntoView({ behavior: 'smooth' });
});

var items = document.querySelectorAll('.circle-menu-box a.menu-item');
// Si je veux faire un affichage en cercle dynamique
// for(var i = 0, l = items.length; i < l; i++) {
//   items[i].style.left = (40 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
  
//   items[i].style.top = (40 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
// }

// Sélectionnez tous les liens du menu radial
const menuItems = document.querySelectorAll('.menu-item');

// Sélectionnez le conteneur de texte que vous souhaitez mettre à jour
const textContainer = document.querySelector('#dynamic-text');

// Ajoutez un écouteur d'événements de clic à chaque élément du menu
menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        // Récupérez le contenu associé à l'élément cliqué
        const contentId = item.getAttribute('data-content-id');

        // Utilisez un switch pour déterminer le contenu à afficher en fonction de l'ID du contenu
        switch (contentId) {
            case 'content-js':
                newContent = "<h3 class='language-title'>Langage JavaScript</h3><p> Le Menu de ce site web est codé en Javascript, je sais également créer du HTML et CSS, utiliser Ajax (pour du GET & du POST), fetch API (GET, POST, UPDATE, DELETE) et créer des fonctions dynamiques.";
                break;
            case 'content-en':
                newContent = "<h3 class='language-title'>Niveau d'anglais</h3>Anglais B2 pratiqué quotidiennement pour de l'écrit et de l'écoute. How you doing ?";
                break;
            case 'content-py':
                newContent = "<h3 class='language-title'>Langage Python</h3>J'ai codé un casse briques en POO en première année et un small model language (type chat gpt) en seconde année.";
                break;
            case 'content-sql':
                newContent = "<h3 class='language-title'>La base de données</h3>Mon domaine favori, je sais modéliser une BDD élaborée, création, insertion des données, et je maitrise les requêtes basiques et quelques une avancées.";
                break;
            case 'content-java':
                newContent = "<h3 class='language-title'>Langage Java</h3>J'ai eu l'opportunité de faire de la POO en Java gérant entrées et sorties pour une Médiathéque simulée, ainsi que le développement de tests unitaires (Test Driven Development).";
                break;
            case 'content-php':
                newContent = "<h3 class='language-title'>Langage PHP</h3>J'ai réalisé une architecture 4 tiers (couches: présentation, applicative, métiers, accès aux données) à partir de la base que mon formateur a pu mettre au point suite à 10 ans d'expérience, cette base est réutilisable et modulable pour l'adapter à d'autres projets. J'ai également créé de zéro une calculatrice envoyant toutes les opérations en base de données grâce à Ajax, ainsi que des requêtes pour sortir un historique sur la page front où se trouve ma calculatrice.";
                break;
            case 'content-html-css':
                newContent = "<h3 class='language-title'>Le HTML & CSS</h3>70 % de ce CV WEB est fait à partir de HTML et CSS, j'ai également eu l'occasion d'apprendre à m'en servir en créant un site vitrine.";
                break;
            // Ajoutez d'autres cas au besoin
            default:
                newContent = "Cliquez sur un langage pour en découvrir plus sur moi !";
        }
        //j'applique l'animation du texte
        textContainer.classList.remove('fade-in'); // Enlever l'animation si elle est déjà appliquée
        void textContainer.offsetWidth; // Force le reflow pour permettre de réappliquer l'animation
        textContainer.innerHTML = newContent; // Change le contenu
        textContainer.classList.add('fade-in'); // Ajouter l'animation
    });
});


