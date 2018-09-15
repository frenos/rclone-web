import { Pipe, PipeTransform } from '@angular/core';

/*
 * Convert int into largest time unit.
 * Usage:
 *   elapsedseconds | timeSpan
 * Example:
 *   {{ 128 |  timeSpan}}
 *   formats to: 2M 8S
*/
@Pipe({ name: 'timeSpan' })
export class TimeSpanPipe implements PipeTransform {
  transform(input: number = 0): string {
    const tempdate = new Date(0, 0, 0, 0, 0, 0, 0);
    tempdate.setSeconds(input);
    return tempdate.toString();
  }
}
