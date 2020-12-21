import { Component, VERSION } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import { ProjectComponent } from 'src/project/project.component';
import { GraphicpopupComponent } from 'src/graphicpopup/graphicpopup.component';


@Component({
  templateUrl: './video.component.html',
  styleUrls: [ './video.component.css' ]  
  })
export class VideoComponent  {
  constructor(public dialog: MatDialog,
    private activatedroute:ActivatedRoute)
  {}
  openDialog(){
    this.dialog.open(ProjectComponent,{
      width: "800px",
      height: "500px"
    });
  }
  openDialogCarousel(name : string) {
    this.dialog.open(GraphicpopupComponent,{
      width: "800px",
      height: "500px",
      data: name
    });
  }
}

