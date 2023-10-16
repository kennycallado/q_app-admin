export class Cronjob {
  id: number;
  owner: string;
  service: string;
  route: string;
  job: EscalonJob | string;
}

export class EscalonJob {
  id: string;
  status: EscalonJobStatus;
  schedule: string;
  since?: string;
  until?: string;

  setSince(date: string) {
    this.since = this.formatDate(date);
  }

  setUntil(date: string) {
    this.until = this.formatDate(date);
  }

  private formatDate(from: string): string {
    const date = new Date(from);

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    // Get the correct timezone offset in minutes and convert it to the desired format (+HHMM)
    const timezoneOffsetMinutes = date.getTimezoneOffset();
    const timezoneOffsetHours = Math.floor(Math.abs(timezoneOffsetMinutes) / 60);
    const timezoneOffsetMinutesPart = Math.abs(timezoneOffsetMinutes) % 60;
    const timezoneOffsetStr = '+' +
      String(timezoneOffsetHours).padStart(2, '0') +
      String(timezoneOffsetMinutesPart).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timezoneOffsetStr}`;

    // const currentTimeFormatted = formatDate(Date.now().toString());
    // console.log(currentTimeFormatted);
  }
}

export enum EscalonJobStatus {
  Scheduled = 'scheduled',
  Running   = 'running',
  Done      = 'done',
  Failed    = 'failed',
}



