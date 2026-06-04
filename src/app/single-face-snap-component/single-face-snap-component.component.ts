import { Component, OnInit } from '@angular/core';
import { FaceSnap2 } from '../models/face-snap2';
import { PercentPipe,DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../face-snap/face-snap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap-component',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    FaceSnap
  ],
  templateUrl: './single-face-snap-component.component.html',
  styleUrl: './single-face-snap-component.component.css'
})
export class SingleFaceSnapComponentComponent implements OnInit{
  facesnap!: FaceSnap2;
  //title!: string;
  //description!: string;
  //createdAt!: Date;
  //snaps!: number;
  //imageUrl!: string;
  snapButtonText!: string;
  userHasSnapped!: boolean;
  myPrice:number= 336.75;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}
  
  ngOnInit(): void { // comme un construteur sauf qu'il est unique 
      //this.title = 'Titre';
      //this.description = 'Description';
      // this.createdAt = new Date();
      // this.snaps = 5;
      // this.imageUrl= 'https://fr.web.img5.acsta.net/medias/nmedia/18/66/97/50/19104240.jpg';
      this.prepareInterface();
      this.getFaceSnap();
  }

  onSnap():void{
    if (this.userHasSnapped){
      this.unsnap();
    }else{
      this.snap();
    }
  }
  unsnap(){
      this.faceSnapsService.snapFaceSnapById(this.facesnap.id, 'unsnap');
      this.snapButtonText='Oh Snap!';
      this.userHasSnapped=false;
  }
  snap(){
      this.faceSnapsService.snapFaceSnapById(this.facesnap.id, 'snap');
      this.snapButtonText='Ooops, unSnap!';
      this.userHasSnapped=true;
  }

  private prepareInterface(){
    this.snapButtonText ='Oh snap!';
    this.userHasSnapped = false;
  }

  private getFaceSnap(){
    const faceSnapId = this.route.snapshot.params['id'];
    this.facesnap = this.faceSnapsService.findFaceSnapById(faceSnapId);
  }

}
