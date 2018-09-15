import { RcloneTransfer } from './../rclone-transfer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rclone-detail',
  templateUrl: './rclone-detail.component.html',
  styleUrls: ['./rclone-detail.component.css']
})
export class RcloneDetailComponent implements OnInit {

  @Input() transfer: RcloneTransfer;

  constructor() { }

  ngOnInit() {
  }

}
