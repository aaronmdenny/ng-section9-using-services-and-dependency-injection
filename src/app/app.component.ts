import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  accounts: {
    name: string,
    status: string
  }[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    /**
     * We set the local accounts variable to the same reference as the one in the accounts service.
     * 
     * When we add an account in the new-account component, the list of accounts does not update in the template.
     * 
     * Similarly, when we update the status of an account, the status does not update in the template.
     */
    this.accounts = this.accountsService.accounts;
  }
}
