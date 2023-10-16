export class Script {
  name: string;
  script_type: ScriptType;
  content?: string;
}

export enum ScriptType {
  Push = 'push',
  Cron = 'cron',
}
