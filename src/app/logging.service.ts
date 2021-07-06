/**
 * Services in Angular are used to reduce repeated code, consolidate data storage, or to facilitate communication
 * between components. We log in two places, so we can add a logging service.
 * 
 * We do not import services and new them up in the files where we use them. We use dependency injection.
 */
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}