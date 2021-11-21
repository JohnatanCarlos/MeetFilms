import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-who-watching',
    templateUrl: 'who-watching.component.html',
    styleUrls: ['./who-watching.component.scss'],
    styles: [`
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 84vh;
        }
    `]
})

export class WhoWatchingComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}