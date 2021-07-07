import { EventEmitter, Injectable } from "@angular/core";

import { LoggingService } from "./logging.service";

/**
 * Services are also used to consolidate data that needs to be accessed by multiple components.
 */
/* 
 * When you inject a service into some class, you have to include some metadata in a decorator. Creating a service does
 * not require you to have a metadata decorator like a component or a directive, so we have a decorator for this special
 * circumstance. This is the @injectable() decorator.
 * 
 * You do not need to add @Injectable in the service you want to inject, but rather in the service where another service
 * will be injected. In newer versions of Angular, however, it is recommended that you always add @injectable to a
 * service.
 */
@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    /**
     * We show an example where we would want to provide an event that we can trigger in one component, and listen to in
     * another one.
     */
    statusUpdated = new EventEmitter<string>();

    /**
     * Add the logging service here, injected from the AppModule.
     */
    constructor(private loggingService: LoggingService) { }

    addAccount(name: string, status: string) {
        this.accounts.push({
            name: name,
            status: status
        });
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}