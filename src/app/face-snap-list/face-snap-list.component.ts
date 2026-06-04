import { Component, OnInit } from '@angular/core';
import { FaceSnap2 } from '../models/face-snap2';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnap],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.css'
})
export class FaceSnapListComponent implements OnInit{

  faceSnaps!: FaceSnap2[];

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps=this.faceSnapsService.getFaceSnaps();
  }

}
