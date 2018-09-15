import { UserconfigService } from './../userconfig.service';
import { Component, OnInit } from '@angular/core';
import { RcloneStatus } from '../rclone-status';
import { RcloneService } from '../rclone.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-rclone',
  templateUrl: './rclone.component.html',
  styleUrls: ['./rclone.component.css']
})
export class RcloneComponent implements OnInit {
  private timer;
  status: RcloneStatus;

  constructor(private rcloneService: RcloneService,
    private userconfigService: UserconfigService) {}

  ngOnInit() {
    this.getStatus();
    const updateTime = Number(this.userconfigService.getValue('updateTime'));
    this.timer = timer(5000, updateTime * 1000);
    this.timer.subscribe(t => {this.getStatus(); });
  }

  getStatus(): void {
    this.rcloneService.getStatus().subscribe(status => {
      status.transferring = status.transferring.sort((e1, e2) => {
        if (e1.percentage > e2.percentage) {
          return -1;
        }
        if (e1.percentage < e2.percentage) {
          return 1;
        }
        return 0;
      });
      this.status = status;
    });
  }
  setLimit(inputvalue: string): void {
    console.log('setlimit');
    this.rcloneService.setBwlimt(inputvalue).subscribe(status => {
      console.log(status);
    });
  }
}
