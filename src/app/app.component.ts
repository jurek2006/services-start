// app.component.ts
import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService){}

  ngOnInit(){
    // accounts w accounts.service.ts jest tablicą, więc jest to referencja
    // więc przez accounts mamy teraz dostęp do tej tablicy, co jest w service
    this.accounts = this.accountsService.accounts;
  }
}
