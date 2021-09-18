import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['coding.jpg', 'workspace.jpg', 'writing.jpg'];
  headlines = ['Take engineering to the next level',
              'Born to code',
              'Solving problems is my passion'];
  currenImg = 0;
  showImg = true;

  ngOnInit(){
    this.updateImage();
  }

  updateImage(){
     setInterval(() => {
      this.currenImg++;
      this.currenImg = this.currenImg % this.images.length;
      this.showImg = false;

      setTimeout(() => {
        this.showImg = true;
      }, 10);
     }, 7000);
  }

}
