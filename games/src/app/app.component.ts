import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

class Book {
    constructor(public title) { }
}

@Component({
    selector: 'app-root',
    template: `
        <ul>
            <li *ngFor="let book of books | async">
                <pre>{{ book | json }}</pre>
            </li>
        </ul>
    `
})
export class AppComponent {
    public books: FirebaseListObservable<Book[]>;
    constructor(db: AngularFireDatabase) {
        this.books = db.list('/books');
    }
}