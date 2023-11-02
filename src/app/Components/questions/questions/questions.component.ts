import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuestionModalComponent } from '../../questionsModal/question-modal/question-modal.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {

  //question array
  questions = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    { question: 'Question 3', answer: 'Answer 4' },
    { question: 'Question 2', answer: 'Answer 2' },
   
  ];

  quuestions2 = [
    { question1: 'Question 3', question2: 'Answer 3' },
  ]
  displayedQuestions: any[] = [];

  constructor(public matdDialog: MatDialog, private _router: Router) {}
  




  ngOnInit(){
    this.openDialog()
    this.loadQuestions();

  }
  
  loadQuestions() {
    this.displayedQuestions = this.questions.splice(0, 2);
  }
  showAnswer(index: number) {
    this.displayedQuestions[index].showAnswer = true;
  }

  openDialog(){
    this.matdDialog.open(QuestionModalComponent,{
      width:'30rem'
    })
}
}
