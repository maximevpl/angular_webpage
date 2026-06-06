export class FilmModel {

location?: string;
id:string;

    constructor(public title:string,
                public imageUrl: string,
                public genre: string,
                public description: string,
                public realisator: string[],
                public actors: string[],
                public duration: number,
                public releaseDate: Date,
                public trailerUrl: string,
                public likes: number = 0
                ){
                    this.id = crypto.randomUUID().substring(0, 8);
                }
    addLike():void{
        this.likes++;
    }
    removeLike():void {
        this.likes--;
    }

    setLocation(location : string): void{
        this.location=location;
    }

    withLocation(location : string): FilmModel{
        this.setLocation(location);
        return this;
    }
}