import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-movie-play',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './movie-play.component.html',
  styleUrl: './movie-play.component.scss'
})
export class MoviePlayComponent implements OnInit{
  @ViewChild('videoPlayer') videoplayer: any;
  public startedPlay:boolean = false;
  public show:boolean = false;
  current_time: any;
  quality: number=0;
  data: any ="";
  titulo: any;
  dataTrailer:any="";
  esTrailer:boolean=false;
  imagen: any;
  item: any;
  trailer: any;
  capitulo: any;
  constructor(private router: Router,private route: ActivatedRoute) { }


  pauseVideo(videoplayer:any){
    videoplayer.nativeElement.play();
    // this.startedPlay = true;
    // if(this.startedPlay == true)
    // {
       setTimeout(() => 
       {
        videoplayer.nativeElement.pause();
         if(videoplayer.nativeElement.paused)
        {
          this.show = !this.show;       
        } 
       }, 5000);
    // }
  }
  ngOnInit() { 
    console.log(this.esTrailer)
     this.route.queryParams.subscribe(params => {
    this.esTrailer = params['isTrailer'];
  });
  
    this.data=localStorage.getItem('infoSerie');
    const serie = JSON.parse(this.data);

    console.log("la dataaaa",serie);
    this.titulo=serie.titulo;
    this.imagen=serie.img;
    this.item=serie.item;
    this.trailer=serie.trailer;
    this.capitulo=serie.capitulo;
  }

  irAtras(){
    this.router.navigate(['/detalles-de-peli']);
  }



  adelantar() {
    const video: HTMLVideoElement = this.videoplayer.nativeElement;

    
    video.currentTime += 10;
  }
  
   retroceder() {
    this.videoplayer.nativeElement.skip-=10;
  }


  playPause() {
    var myVideo: any = document.getElementById("myvideo_1");
    if (myVideo.paused) {
      myVideo.play();
    }
    else myVideo.pause();
  }

  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 420;
  }

  skip(value:any) {
    let video: any = document.getElementById("myvideo_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }

  callfour() {
    // this.quality = '480px';
    let video: any = document.getElementById("myvideo_1");
    this.current_time = video.currentTime;
    this.quality = 1;
    //  this.skip_after();
  
  }

  callthree() {
    // this.quality = '360px';
     let video: any = document.getElementById("myvideo_1");
    this.current_time = video.currentTime;
    this.quality = 0;
    // this.skip_after();

  }

  skip_after(){
    let video: any = document.getElementById("myvideo_1");
    video.currentTime = this.current_time;
  }

}
