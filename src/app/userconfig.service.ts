import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'rclone-web_local_usersettings';

@Injectable({
  providedIn: 'root'
})
export class UserconfigService {

  Configuration = {
    'rcloneUrl': 'http://localhost:5572/',
    'updateTime': '2',
  };
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
    const localConfiguration = this.storage.get(STORAGE_KEY) || this.Configuration;
    this.Configuration = localConfiguration;
  }

  getConfig(): object {
    return this.Configuration;
  }

  getValue(key: string): string {
    return this.Configuration[key];
  }

  setValue(key: string, value: string ): void {
    this.Configuration[key] = value;
    this.storage.set(STORAGE_KEY, this.Configuration);
  }
}
