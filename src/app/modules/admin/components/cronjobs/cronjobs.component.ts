import { Component } from '@angular/core';
import { Cronjob, EscalonJob, EscalonJobStatus } from 'src/app/providers/models/cronjob.model';

@Component({
  selector: 'app-cronjobs',
  templateUrl: './cronjobs.component.html',
  styleUrls: ['./cronjobs.component.sass']
})
export class CronjobsComponent {
  currentCronjob: Cronjob;
  cronjobs: Cronjob[] = [];

  constructor() {
    // dummy data
    let escalon = new EscalonJob();
    escalon.id = '1';
    escalon.status = EscalonJobStatus.Running;
    escalon.schedule = '0 0 0 * * *';

    let cronjob = new Cronjob();
    cronjob.id = 1;
    cronjob.owner = 'owner';
    cronjob.service = 'logic';
    cronjob.route = 'checker/steps/project/0';
    cronjob.job = escalon;
    this.currentCronjob = cronjob;
    this.cronjobs.push(this.currentCronjob);

    escalon = new EscalonJob();
    escalon.id = '2';
    escalon.status = EscalonJobStatus.Failed;
    escalon.schedule = '0 0 0 * * *';

    cronjob = new Cronjob();
    cronjob.id = 2;
    cronjob.owner = 'owner';
    cronjob.service = 'logic';
    cronjob.route = 'checker/steps/project/0';
    cronjob.job = escalon;
    this.cronjobs.push(cronjob);
  }

  isJobString(job: EscalonJob): boolean {
    return job instanceof String;
  }

  isJobFailed(cronjob: Cronjob): boolean {
    if (!cronjob || !cronjob) { return false }
    if (typeof cronjob.job === 'string') { return false }

    return cronjob.job.status === EscalonJobStatus.Failed;
  }
}
