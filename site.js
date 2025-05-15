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
//   items[i].style.left = (40 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
//   items[i].style.top = (40 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
// }

// Sélection des liens du menu radial
const menuItems = document.querySelectorAll('.menu-item');

// Sélection du conteneur de texte à mettre à jour
const textContainer = document.querySelector('#dynamic-text');

// Ajout d'un écouteur d'événements de clic à chaque élément du menu
menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        // Récupération du contenu associé à l'élément cliqué
        const contentId = item.getAttribute('data-content-id');

        // Définition du contenu à afficher en fonction de l'ID du contenu
        let newContent;
        switch (contentId) {
            case 'content-js':
                newContent = "<h3 class='language-title'>Langage JavaScript</h3><p>Le menu de ce site web est codé en JavaScript.<br> L'Ajax / Fetch API font partie de mes routines.<br> L'ERP de Ferbateq l'utilise grâce à Alpine.js, un mini framework similaire à Vue.js.</p>";
                break;
            case 'content-en':
                newContent = "<h3 class='language-title'>Niveau d'anglais</h3><p>Anglais niveau B2 (860 points au TOEIC), pratiqué quotidiennement à l'écrit et à l'écoute. How you doing ?</p>";
                break;
            case 'content-py':
                newContent = "<h3 class='language-title'>Langage Python</h3><p>J'ai codé un casse-briques en POO en première année et un petit modèle de langage (type ChatGPT) en seconde année.<br> En troisième année, Python m'a servi à développer le backend de l'ERP de Ferbateq.</p>";
                break;
            case 'content-sql':
                newContent = "<h3 class='language-title'>Base de données</h3><p>Modéliser une BDD élaborée, créer et insérer des données font partie de mes compétences.<br> Je maîtrise les requêtes basiques et certaines avancées (HeidiSQL / PhpMyAdmin).</p>";
                break;
            case 'content-php':
                newContent = "<h3 class='language-title'>Langage PHP</h3><p>J'ai réalisé une architecture en 4 couches (présentation, application, métier, accès aux données) à partir d'une base conçue par mon formateur après 10 ans d'expérience.<br> Cette architecture est réutilisable et modulable pour d'autres projets.<br> J'ai également créé une calculatrice envoyant toutes les opérations en base de données grâce à Ajax, avec un historique des calculs affiché sur la page front.</p>";
                break;
            case 'content-html-css':
                newContent = "<h3 class='language-title'>HTML & CSS</h3><p>70 % de ce CV web est conçu en HTML et CSS.<br> J'ai aussi créé un site vitrine et développé l'intégralité du front de l'ERP de Ferbateq en HTML/CSS (avec Fomantic Framework).</p>";
                break;
            default:
                newContent = "Cliquez sur un langage pour en découvrir plus sur moi !";
        }

        // Application de l'animation du texte
        textContainer.classList.remove('fade-in'); // Supprime l'animation si elle est déjà appliquée
        void textContainer.offsetWidth; // Force un reflow pour réappliquer l'animation
        textContainer.innerHTML = newContent; // Change le contenu
        textContainer.classList.add('fade-in'); // Ajoute l'animation
    });
});
