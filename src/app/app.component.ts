import { Component } from '@angular/core';
import { LocalService } from './local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-app';

  constructor(private localStore: LocalService) {}

  ngOnInit(): void {
    this.localStore.saveData('id', 'jk123');
    console.log('decrypted data', this.localStore.getData('id'));
  }
}