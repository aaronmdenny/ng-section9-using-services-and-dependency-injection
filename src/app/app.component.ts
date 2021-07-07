import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
     * 
     * This is because the dependency injection in Angular is hierarchical. If we provide a service on a component, the
     * Angular Framework creates an instance of the service for that component and all of its children components.
     * 
     * The highest possible level of providing a service is the providers array of the AppModule, where providing a
     * service will create an instance of the service for the entire application.
     * 
     * The next level down is the AppComponent. There, the AppComponent and all of its child components will use the
     * same instance of the service. However, other services using this service will not get this instance.
     * 
     * The next level down is any other component, in which case, the same instance will be shared among this component
     * and all of its children components.
     */
    this.accounts = this.accountsService.accounts;
  }
}
