import { Component } from '@angular/core';
import { invoke } from '@tauri-apps/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tauri-auto-linker';

  constructor() {
    invoke('greet', { name: "Jonathan" })
      .then((res) => console.log(res))
  }
}
