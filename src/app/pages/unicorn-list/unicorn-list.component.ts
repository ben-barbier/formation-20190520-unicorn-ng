import {Component, OnInit} from '@angular/core';
import {UnicornsApiService} from '../../unicorns-api.service';
import {Unicorn} from '../../unicorns.model';

@Component({
    selector: 'uni-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent implements OnInit {

    constructor(private unicornApiService: UnicornsApiService) {
    }

    public unicornsList: Unicorn[];

    ngOnInit() {
        this.unicornApiService.getAll().subscribe(x => this.unicornsList = x);
    }

    delete(unicornToDelete: Unicorn) {
        this.unicornApiService.deleteOne(unicornToDelete).subscribe(() => {
            this.unicornsList = this.unicornsList.filter(unicorn => unicorn.id !== unicornToDelete.id);
        });
    }

}
