import { of, from } from 'rxjs';

const observer = {
  next: value => console.log('next', value),
  error: error => console.log('error', error),
  complete: () => console.log('complete!')
}

const source$ = from(fetch(
  'https://api.github.com/users/subasically'
));

source$.subscribe(observer);