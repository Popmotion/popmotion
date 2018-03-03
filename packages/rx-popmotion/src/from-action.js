import { Observable } from 'rxjs/Observable';

Observable.fromAction = (action) => Observable.create((observer) => action.start({
  update: (...args) => observer.next(...args),
  complete: (...args) => observer.complete(...args),
  error: (...args) => observer.error(...args)
}));
