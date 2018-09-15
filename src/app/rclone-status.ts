import { RcloneTransfer } from './rclone-transfer';

export class RcloneStatus {
  bytes: number;
  checks: number;
  deletes: number;
  elapsedTime: number;
  errors: number;
  speed: number;
  transferring: RcloneTransfer[];
  transfers: number;
}
