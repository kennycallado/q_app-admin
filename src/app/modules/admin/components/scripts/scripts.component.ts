import { Component } from '@angular/core'
import { Script, ScriptType } from 'src/app/providers/models/script.model'

// https://stackoverflow.com/questions/61662710/upload-textarea-contents-as-a-file-using-angular

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.sass']
})
export class ScriptsComponent {
  currentScript: Script = { name: 'push', script_type: ScriptType.Push }
  scriptTypes: string[] = Object.values(ScriptType)
  scripts: Script[] = [
    { name: 'push', script_type: ScriptType.Push },
    { name: 'step', script_type: ScriptType.Cron },
    { name: 'blue', script_type: ScriptType.Cron },
  ]
}
