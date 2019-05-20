import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Unicorn} from '../../../unicorns.model';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;

    @Output() delete = new EventEmitter<Unicorn>();


    constructor() {
    }

    ngOnInit() {
    }

    deleteMe() {
        this.delete.emit(this.unicorn);
    }

}
