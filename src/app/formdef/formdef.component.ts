import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Slot } from './models';
import { FormdefService } from './formdef.service';

@Component({
  selector: 'tw-formdef',
  templateUrl: './formdef.component.html'
})
export class FormdefComponent implements OnInit {
  @Input()
  public key: string;

  @Input()
  public viewModel: any;

  public form: FormGroup;
  public slot: Slot;

  public constructor(
    private _formdefService: FormdefService
  ) { }

  public ngOnInit(): void {
    console.log(this.viewModel);

    this.form = this._formdefService.toGroup(this.key, this.viewModel);
    console.log(this.form);

    this.slot = this._formdefService.getSlot(this.key);
    console.log(this.slot);
  }

  public onSubmit(): void {
    console.log(this.form.value);
  }
}
