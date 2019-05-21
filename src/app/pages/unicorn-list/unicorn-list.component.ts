import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UnicornsApiService} from '../../unicorns-api.service';
import {Unicorn} from '../../unicorns.model';

@Component({
    selector: 'uni-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnicornListComponent implements OnInit {

    constructor(private unicornApiService: UnicornsApiService,
                private cd: ChangeDetectorRef) {
    }

    public unicornsList: Unicorn[];

    ngOnInit() {
        this.unicornApiService.getAll().subscribe(x => {
            this.unicornsList = x;
            this.cd.markForCheck();
            // this.cd.detectChanges();
        });
    }

    delete(unicornToDelete: Unicorn) {
        this.unicornApiService.deleteOne(unicornToDelete).subscribe(() => {
            this.unicornsList = this.unicornsList.filter(unicorn => unicorn.id !== unicornToDelete.id);
        });
    }

}
