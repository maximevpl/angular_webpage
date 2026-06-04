import { Injectable } from '@angular/core';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnap2 } from '../models/face-snap2';
import { SnapType } from '../models/snp-type.type';

@Injectable({
    providedIn: 'root',
})

export class FaceSnapsService {
    private facesnaps: FaceSnap2[] = [
        new FaceSnap2(
                'Titre 1',
                'Description 1',
                new Date(),
                5,
                'https://fr.web.img5.acsta.net/medias/nmedia/18/66/97/50/19104240.jpg'
        ),
        new FaceSnap2(
                'Titre 2',
                'Description 2',
                new Date(),
                100,
                'https://fr.web.img2.acsta.net/medias/nmedia/00/00/00/66/69199338_af.jpg'
            ).withLocation('Vannes'),
        new FaceSnap2(
                'Titre 3',
                'Description 3',
                new Date(),
                255,
                'https://m.media-amazon.com/images/S/pv-target-images/c690c688779cfd0753e5523325d87bc1ac2d1cbf28c34194ffacb19ed1d535f7.jpg'
            )
    ];

    getFaceSnaps(): FaceSnap2[] { // tableau privé --> si on veut faire des actions, on ne le change pas 
        return [...this.facesnaps]
    }

    findFaceSnapById(faceSnapId: string): FaceSnap2 {
        const foundFaceSnap = this.facesnaps.find(facesnap => facesnap.id === faceSnapId);
        if (!foundFaceSnap) {
            throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
}

    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
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

        
}