import './assets/scss/style.scss'
import './index.scss'

const main = document.querySelector('main')

const collection = [
    {
        image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-02263a86992462aa82d8f29846fb1760_screen.jpg?ts=1637037361',
        gender: 'Horreur',
        name: 'Delormeau',
        author: 'Mathieu',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nam corrupti atque quasi facere quo laboriosam adipisci dolorum tempore ipsum consectetur enim, eligendi excepturi sint! Architecto, itaque quasi! Optio, ad.'
    },
    {
        image: 'https://media.sudouest.fr/12440468/1200x-1/hello.jpg',
        gender: 'Drama',
        name: 'Salamé',
        author: 'Léa',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nam corrupti atque quasi facere quo laboriosam adipisci dolorum tempore ipsum consectetur enim, eligendi excepturi sint! Architecto, itaque quasi! Optio, ad.'
    },
    {
        image: 'https://img.filmsactu.net/datas/fiches/c/l/classement-des-meilleurespires-affiches/xl/classement-des-meilleures-pires-affiches-affiche-5489bced3f68d.jpg',
        gender: 'Humour',
        name: 'Depardieu',
        author: 'Gérard',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nam corrupti atque quasi facere quo laboriosam adipisci dolorum tempore ipsum consectetur enim, eligendi excepturi sint! Architecto, itaque quasi! Optio, ad.'
    },
    {
        image: "https://cdn.pixabay.com/photo/2015/05/07/11/02/gun-756969_960_720.jpg",
        gender: "Policier",
        name: "Mystères Urbains",
        author: "David Brown",
        description: "Une enquête captivante à travers les rues sombres de la ville, où les secrets et les mensonges se cachent à chaque coin de rue.",
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/07/17/16/21/fantasy-2514824_960_720.jpg",
        gender: "Fantastique",
        name: "Le Royaume Enchanté",
        author: "Sarah Williams",
        description: "Une épopée magique dans un monde fantastique où les héros affrontent des créatures mythiques et des forces obscures pour sauver leur royaume.",
    },
    {
        image: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
        gender: "Thriller Psychologique",
        name: "Le Piège Mental",
        author: "Michael Black",
        description: "Un suspense haletant où rien n'est ce qu'il semble être, et où les protagonistes sont pris au piège dans un jeu dangereux de manipulation et de survie.",
    },
    {
        image: "https://cdn.pixabay.com/photo/2016/02/19/11/19/landscape-1209805_960_720.jpg",
        gender: "Aventure",
        name: "Les Explorateurs Intrépides",
        author: "Tom Anderson",
        description: "Une expédition courageuse à travers des terres inconnues, remplie de découvertes étonnantes et de défis passionnants.",
    },
    {
        image: "https://cdn.pixabay.com/photo/2014/10/22/17/22/soldier-498434_960_720.jpg",
        gender: "Guerre",
        name: "L'Appel du Devoir",
        author: "James Miller",
        description: "Une histoire émouvante de courage et de sacrifice, où des soldats se battent pour l'honneur et la liberté sur le champ de bataille.",
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/07/19/09/29/mountain-2511229_960_720.jpg",
        gender: "Romance",
        name: "Amour Éternel",
        author: "Jessica Taylor",
        description: "Une histoire romantique envoûtante où deux âmes se rencontrent et tombent éperdument amoureuses malgré les obstacles et les défis de la vie.",
    },
    {
        image: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg",
        gender: "Drame",
        name: "La Voie de la Rédemption",
        author: "Sophie Martin",
        description: "Une histoire émouvante de rédemption et de pardon, où un homme brisé cherche à se racheter et à trouver la paix intérieure après avoir affronté ses démons.",
    }
]

const articles = collection.map(article => {
    const createArticle = document.createElement('article')
    createArticle.innerHTML = `
        <img src="${article.image}" alt="${article.name}">
        <p class="gender">${article.gender}</p>
        <h2>${article.name}</h2>
        <p class="author">${article.author}</p>
        <p class="article-descritpion">${article.description}</p>
    `

    return createArticle
})

main.append(...articles)