import { Component, OnInit } from '@angular/core';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  images = ['code.jpg', 'workspace.jpg', 'writing.jpg'];
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
