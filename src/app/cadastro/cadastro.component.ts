import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  isErrorVisible: boolean = false
  isSuccessVisible: boolean = false
 
  ngOnInit() {
  }

  handleRequest() {
    this.onclickSuccess();
  }

  onclickError() {
    this.isErrorVisible = true

    setTimeout(() => {
      this.isErrorVisible = false
    }, 6000);
    console.log("Changes !!!");
  }

  onclickSuccess() {
    this.isSuccessVisible = true
    
    setTimeout(() => {
      this.isSuccessVisible = false
    }, 6000);
    console.log("Changes !!!");
  }

}
