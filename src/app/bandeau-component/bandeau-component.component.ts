import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollegueService } from '../services/collegue.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bandeau-component',
  templateUrl: './bandeau-component.component.html',
  styleUrls: ['./bandeau-component.component.css']
})
export class BandeauComponentComponent implements OnInit, OnDestroy {
  msg: string;

  abonnementSuperBus: Subscription;

  constructor(private _colSrv: CollegueService) {}

  ngOnInit() {
    this.abonnementSuperBus = this._colSrv.superBus.subscribe(message => {
      this.msg = message;
    });
  }

  ngOnDestroy() {
    this.abonnementSuperBus.unsubscribe();
  }
}
