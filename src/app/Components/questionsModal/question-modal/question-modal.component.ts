import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.scss']
})
export class QuestionModalComponent {

  imageUrl = "../assets/instructPic.png"
  selectedValue: any; 
  foods = [
    {value: 'English', viewValue: 'English'},
    {value: 'Zulu', viewValue: 'Zulu'},
    
  ];

  // playAudio(){
  //   if(this.selectedValue==="English"){
  //     let audio = new Audio()
  //     audio.src = "../assets/English.mp3";
  //     audio.load()
  //     audio.play();
  //   }
  //   if(this.selectedValue==="Zulu"){
  //     let audio = new Audio()
  //     audio.src = "../assets/Zulu.mp3";
  //     audio.load()
  //     audio.play();
  //   }
    
  
  // }
  // stopAudio(){
    
  //   let audio = new Audio()
  //   audio.pause();
  // }

  onSelectionChange(){
    console.log('Selected value:', this.selectedValue);
  }

  
   audio =new Audio(); // Declare audio as a global variable to ensure you can reference it in other functions

playAudio() {
  if (this.selectedValue === "English") {
    if (this.audio) {
      // If audio is already playing, stop it and reset it
      this.stopAudio();
    }

    // this.audio = new Audio();
    this.audio.src = "../assets/English.mp3";
    this.audio.load();
    this.audio.play();
  }

  if (this.selectedValue === "Zulu") {
    if (this.audio) {
      // If audio is already playing, stop it and reset it
      this.stopAudio();
    }

    this.audio = new Audio();
    this.audio.src = "../assets/Zulu.mp3";
    this.audio.load();
    this.audio.play();
  }
}

stopAudio() {
  if (this.audio) {
    this.audio.pause();
    this.audio.currentTime = 0; // Reset the audio to the beginning
  }
}


  

}
