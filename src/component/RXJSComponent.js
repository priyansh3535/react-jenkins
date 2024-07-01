import { useEffect } from 'react';
import { Observable } from 'rxjs';

function RXJSComponent(){

    useEffect(()=>{

          const observable = new Observable((observer) => {
            observer.next('Start');
             fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
              return res.json();
            })
            .then((data) => {
                observer.complete();
              console.log("Done",data)
            });
          });

          observable.subscribe({
            next: value => console.log(value),
          });
    })
}

export default RXJSComponent;