import { Component, Input } from '@angular/core';

import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

/**
 * Removing the AccountsService from the providers array in the child components of the AppComponent ensures that the
 * child components will use the same instance of the service as in AppComponent, and now, adding or updating an account
 * will work as expected in the template.
 */
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountsService: AccountsService, private loggingService: LoggingService) { }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status);

    /**
     * Here, we emit an event that we set up in the accountsService. Later, in the Observables section, we will learn
     * about a different way to handle this.
     */
    this.accountsService.statusUpdated.emit(status);
  }
}
