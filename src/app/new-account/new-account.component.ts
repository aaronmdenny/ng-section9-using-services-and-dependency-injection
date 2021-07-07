import { Component } from '@angular/core';

import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

/**
 * Add the providers array and supply the LoggingService so this class gets the logging service injected.
 */
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  /**
   * Use a constructor to inject the service this class will use.
   */
  constructor(private accountsService: AccountsService, private loggingService: LoggingService) { }

  /**
   * We can remove the event emitter and simply add the account using the accounts service.
   */
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
