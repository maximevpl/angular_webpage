import { Injectable } from '@angular/core';
import { FilmModel } from '../models/film-model';

@Injectable({
    providedIn: 'root',
})

export class FilmService {

private films: FilmModel[] = [
    new FilmModel(
            'Inception',
            'https://m.media-amazon.com/images/I/91b3Xtjt0IL.jpg',
            'Science-Fiction',
            'Dom Cobb est un voleur expérimenté dans l\'art périlleux de l\'extraction : sa spécialité consiste à s\'approprier les secrets les plus précieux d\'un individu, enfouis au plus profond de son subconscient, pendant qu\'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l\'univers trouble de l\'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d\'avant.',
            ['Christopher Nolan'],
            ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
            148,
            new Date('2010-07-16'),
            'https://www.youtube.com/watch?v=YoHD9XEInc0'
        ),
        new FilmModel(
            'Interstellar',
            'https://m.media-amazon.com/images/I/91obuWzA3XL._AC_UF894,1000_QL80_.jpg',
            'Science-Fiction',
            'Dans un proche futur, la Terre est devenue hostile pour l\'homme. Les tempêtes de sable sont fréquentes et il n\'y a plus que le maïs qui peut être cultivé, en raison d\'un sol trop aride. Cooper est un pilote, recyclé en agriculteur, qui vit avec son fils et sa fille dans la ferme familiale.',
            ['Christopher Nolan'],
            ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
            169,
            new Date('2014-11-07'),
            'https://www.youtube.com/watch?v=zSWdZVtXT7E'
        ),

        new FilmModel(
            'The Dark Knight',
            'https://m.media-amazon.com/images/I/81AJdOIEIhL._AC_SY679_.jpg',
            'Action',
            'Batman est plus que jamais déterminé à éradiquer le crime organisé qui sème la terreur en ville. Épaulé par le lieutenant Jim Gordon et par le procureur de Gotham City, Harvey Dent, Batman voit son champ d\'action s\'élargir. La collaboration des trois hommes s\'avère très efficace et ne tarde pas à porter ses fruits jusqu\'à ce qu\'un criminel redoutable vienne plonger la ville de Gotham City dans le chaos.',
            ['Christopher Nolan'],
            ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
            152,
            new Date('2008-07-18'),
            'https://www.youtube.com/watch?v=EXeTwQWrcwY'
        ),

        new FilmModel(
            'The Matrix',
            'https://image.tmdb.org/t/p/original/p02YCjWcmFKTUGKalezhNmt2Cnm.jpg',
            'Science-Fiction',
            'Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l\'un des pirates les plus recherchés du cyberespace. À cheval entre deux mondes, Neo est assailli par d\'étranges songes et des messages cryptés provenant d\'un certain Morpheus. Celui-ci l\'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu\'est-ce que la Matrice ?',
            ['Lana Wachowski', 'Lilly Wachowski'],
            ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
            136,
            new Date('1999-03-31'),
            'https://www.youtube.com/watch?v=vKQi3bBA1y8'
        ),

        new FilmModel(
            'Titanic',
            'https://m.media-amazon.com/images/I/71kfzNYWKxL.jpg',
            'Drame',
            'En 1997, l\'épave du Titanic est l\'objet d\'une exploration fiévreuse, menée par des chercheurs de trésor en quête d\'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l\'une des rescapées du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912. Fiancée à un industriel arrogant, Rose croise sur le bateau un artiste sans le sou.',
            ['James Cameron'],
            ['Leonardo DiCaprio', 'Kate Winslet'],
            195,
            new Date('1997-12-19'),
            'https://www.youtube.com/watch?v=kVrqfYjkTdQ'
        ),

        new FilmModel(
            'Avatar',
            'https://i.ebayimg.com/images/g/7fUAAOSwoNRjB7GU/s-l1200.jpg',
            'Science-Fiction',
            'Sur le monde extraterrestre luxuriant de Pandora vivent les Na\'vi, des êtres qui semblent primitifs, mais qui sont très évolués. Jake Sully, un ancien Marine paralysé, redevient mobile grâce à un tel Avatar et tombe amoureux d\'une femme Na\'vi.',
            ['James Cameron'],
            ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
            162,
            new Date('2009-12-18'),
            'https://www.youtube.com/watch?v=5PSNL1qE6VY'
        ),

        new FilmModel(
            'Gladiator',
            'https://m.media-amazon.com/images/I/71LPLHCs7HL._AC_UF894,1000_QL80_.jpg',
            'Historique',
            'Le général romain Maximus est le plus fidèle soutien de l\'empereur Marc Aurèle, qu\'il a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de l\'amour que lui voue l\'empereur, le fils de Marc Aurèle, Commode, s\'arroge brutalement le pouvoir, puis ordonne l\'arrestation du général et son exécution. Maximus échappe à ses assassins, mais ne peut empêcher le massacre de sa famille. Capturé par un marchand d\'esclaves, il devient gladiateur et prépare sa vengeance.',
            ['Ridley Scott'],
            ['Russell Crowe', 'Joaquin Phoenix'],
            155,
            new Date('2000-05-05'),
            'https://www.youtube.com/watch?v=owK1qxDselE'
        ),

        new FilmModel(
            'Forrest Gump',
            'https://m.media-amazon.com/images/I/71CuAt3ey+L.jpg',
            'Drame',
            'Sur un banc, à Savannah, en Géorgie, Forrest Gump attend le bus. Comme celui-ci tarde à venir, le jeune homme raconte sa vie à ses compagnons d\'ennui. A priori, ses capacités intellectuelles plutôt limitées ne le destinaient pas à de grandes choses. Qu\'importe.',
            ['Robert Zemeckis'],
            ['Tom Hanks', 'Robin Wright'],
            142,
            new Date('1994-07-06'),
            'https://www.youtube.com/watch?v=bLvqoHBptjg'
        ),

        new FilmModel(
            'The Lord of the Rings: The Fellowship of the Ring',
            'https://m.media-amazon.com/images/I/81fYlBQeCnL.jpg',
            'Fantasy',
            'Un jeune et timide hobbit, Frodon Sacquet, hérite d\'un anneau magique. Sous ses apparences de simple bijou, il s\'agit en réalité d\'un instrument de pouvoir absolu qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu et de réduire en esclavage ses peuples. Frodon doit parvenir, avec l\'aide de la Communauté de l\'Anneau, composée de huit compagnons venus de différents royaumes, jusqu\'à la Montagne du Destin pour le détruire.',
            ['Peter Jackson'],
            ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
            178,
            new Date('2001-12-19'),
            'https://www.youtube.com/watch?v=V75dMMIW2B4'
        ),

        new FilmModel(
            'Top Gun: Maverick',
            'https://i.ebayimg.com/images/g/ieIAAOSwBbtkvmGY/s-l1200.jpg',
            'Action',
            'Après plus de 30 ans de service en tant que l\'un des meilleurs aviateurs de la Marine, Pete "Maverick" Mitchell est à sa place, repoussant les limites en tant que pilote d\'essai courageux et esquivant l\'avancement de grade qui le mettrait à la terre. Entraînant de jeunes diplômés pour une mission spéciale, Maverick doit affronter les fantômes de son passé et ses peurs les plus profondes, aboutissant à une mission qui exige le sacrifice ultime de ceux qui choisissent de la piloter.',
            ['Joseph Kosinski'],
            ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
            131,
            new Date('2022-05-27'),
            'https://www.youtube.com/watch?v=giXco2jaZ_4'
        )
    ];

    getFilms(): FilmModel[] {
        return this.films;
    }
    
        findFilmById(filmId: string): FilmModel {
            const foundFilm = this.films.find(film => film.id === filmId);
            if (!foundFilm) {
                throw new Error('Film not found!');
            }
            return foundFilm;
        }

}