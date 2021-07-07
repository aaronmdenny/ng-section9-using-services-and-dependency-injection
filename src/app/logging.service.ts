import { Injectable } from "@angular/core";

/**
 * Services in Angular are used to reduce repeated code, consolidate data storage, or to facilitate communication
 * between components. We log in two places, so we can add a logging service.
 * 
 * We do not import services and new them up in the files where we use them. We use dependency injection.
 */
/**
 * We can use the @Injectable() decorator along with providedIn: 'root' to achieve the same thing as injecting this
 * service through the providers array in the AppModule. This is made available in Angular 6+. This can lead to better
 * performance and loading speed on larger services and apps because services can be loaded lazily.
 */
@Injectable({providedIn: 'root'})
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}