import { Component, VERSION } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import { ProjectComponent } from 'src/project/project.component';
import { GraphicpopupComponent } from 'src/graphicpopup/graphicpopup.component';
import { VideopopupComponent } from 'src/videopopup/videopopup.component';

@Component({
  templateUrl: './work.component.html',
  styleUrls: [ './work.component.css' ]  
  })
export class WorkComponent  {
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
      width: "400px",
      height: "auto",
      data: name
    });
  }
  openDialogCarouselVideo(name : string) {
    this.dialog.open(VideopopupComponent,{
      width: "400px",
      height: "auto",
      data: name
    });
  }
}

