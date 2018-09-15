import { UserconfigService } from './../userconfig.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings = {};
  constructor(private userconfigService: UserconfigService) { }

  ngOnInit() {
    this.settings = this.userconfigService.getConfig();
  }

  saveSetting(key: string, value: string) {
    this.userconfigService.setValue(key, value);
  }

}
