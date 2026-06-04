export class FaceSnap2{

location?: string;
id:string;

    // pour éviter d'avoir une déclaration de l'attribu 
    // puis une affectation dans le constructeur
    constructor(public title:string,
                public description: string,
                public createdAt: Date,
                public snaps: number,
                public imageUrl: string){
                    this.id = crypto.randomUUID().substring(0, 8);
                }
    addSnap():void{
        this.snaps++;
    }
    removeSnap():void {
        this.snaps--;
    }

    setLocation(location : string): void{
        this.location=location;
    }

    withLocation(location : string): FaceSnap2{
        this.setLocation(location);
        return this;
    }
}