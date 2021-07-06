import { Component, EventEmitter, Output } from '@angular/core';

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
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  /**
   * Use a constructor to inject the service this class will use.
   */
  constructor(private loggingService: LoggingService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);
  }
}
