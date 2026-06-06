import { Injectable } from '@angular/core';
import { FilmModel } from '../models/film-model';

@Injectable({
    providedIn: 'root',
})

export class FilmService {

private films: FilmModel[] = [
    new FilmModel(
            'Inception',
            'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
            'Science-Fiction',
            'Un voleur spécialisé dans l\'extraction de secrets à travers les rêves reçoit une mission impossible.',
            ['Christopher Nolan'],
            ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
            148,
            new Date('2010-07-16'),
            'https://www.youtube.com/watch?v=YoHD9XEInc0'
        ),
        new FilmModel(
            'Interstellar',
            'https://m.media-amazon.com/images/I/71yH5Y2A8UL._AC_SY679_.jpg',
            'Science-Fiction',
            'Une équipe d\'explorateurs traverse un trou de ver pour sauver l\'humanité.',
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
            'Batman affronte le Joker qui plonge Gotham dans le chaos.',
            ['Christopher Nolan'],
            ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
            152,
            new Date('2008-07-18'),
            'https://www.youtube.com/watch?v=EXeTwQWrcwY'
        ),

        new FilmModel(
            'The Matrix',
            'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
            'Science-Fiction',
            'Un programmeur découvre que la réalité est une simulation informatique.',
            ['Lana Wachowski', 'Lilly Wachowski'],
            ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
            136,
            new Date('1999-03-31'),
            'https://www.youtube.com/watch?v=vKQi3bBA1y8'
        ),

        new FilmModel(
            'Titanic',
            'https://m.media-amazon.com/images/I/71y6nN4VJNL._AC_SY679_.jpg',
            'Drame',
            'Une histoire d\'amour naît à bord du Titanic lors de son voyage inaugural.',
            ['James Cameron'],
            ['Leonardo DiCaprio', 'Kate Winslet'],
            195,
            new Date('1997-12-19'),
            'https://www.youtube.com/watch?v=kVrqfYjkTdQ'
        ),

        new FilmModel(
            'Avatar',
            'https://m.media-amazon.com/images/I/81g8vEs4ixL._AC_SY679_.jpg',
            'Science-Fiction',
            'Un ancien marine est envoyé sur la planète Pandora où il découvre un nouveau monde.',
            ['James Cameron'],
            ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
            162,
            new Date('2009-12-18'),
            'https://www.youtube.com/watch?v=5PSNL1qE6VY'
        ),

        new FilmModel(
            'Gladiator',
            'https://m.media-amazon.com/images/I/71i6h4n9nJL._AC_SY679_.jpg',
            'Historique',
            'Un général romain trahi devient gladiateur pour se venger.',
            ['Ridley Scott'],
            ['Russell Crowe', 'Joaquin Phoenix'],
            155,
            new Date('2000-05-05'),
            'https://www.youtube.com/watch?v=owK1qxDselE'
        ),

        new FilmModel(
            'Forrest Gump',
            'https://m.media-amazon.com/images/I/61+eK8T4m8L._AC_SY679_.jpg',
            'Drame',
            'La vie extraordinaire d\'un homme simple témoin des grands événements du XXe siècle.',
            ['Robert Zemeckis'],
            ['Tom Hanks', 'Robin Wright'],
            142,
            new Date('1994-07-06'),
            'https://www.youtube.com/watch?v=bLvqoHBptjg'
        ),

        new FilmModel(
            'The Lord of the Rings: The Fellowship of the Ring',
            'https://m.media-amazon.com/images/I/91SZSW8qSsL._AC_SY679_.jpg',
            'Fantasy',
            'Frodon entreprend un voyage pour détruire l\'Anneau Unique.',
            ['Peter Jackson'],
            ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
            178,
            new Date('2001-12-19'),
            'https://www.youtube.com/watch?v=V75dMMIW2B4'
        ),

        new FilmModel(
            'Top Gun: Maverick',
            'https://m.media-amazon.com/images/I/81h+fV3w2gL._AC_SY679_.jpg',
            'Action',
            'Le pilote Maverick forme une nouvelle génération d\'aviateurs de l\'US Navy.',
            ['Joseph Kosinski'],
            ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
            131,
            new Date('2022-05-27'),
            'https://www.youtube.com/watch?v=giXco2jaZ_4'
        )
    ];

    getFilms(): FilmModel[] { // tableau privé --> si on veut faire des actions, on ne le change pas 
        return this.films;
    }
    
        findFilmById(filmId: string): FilmModel {
            const foundFilm = this.films.find(film => film.id === filmId);
            if (!foundFilm) {
                throw new Error('Film not found!');
            }
            return foundFilm;
        }
    
        /*snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
            const faceSnap = this.findFaceSnapById(faceSnapId);
            if (!faceSnap) {
                throw new Error('FaceSnap not found!');
            }
            if (snapType === 'snap') {
                faceSnap.addSnap();
            } else {
                faceSnap.removeSnap();
            }
        }
            */
}