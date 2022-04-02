import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-add-xbox',
  templateUrl: './add-xbox.component.html',
  styleUrls: ['./add-xbox.component.css']
})

export class AddXboxComponent implements OnInit {
  visible = true;
  selectable = true;
  selected: Boolean = false;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetXboxForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  xboxForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private xboxApi: ApiService
  ) {}

  ngOnInit() {
    this.submitBookFrom();
  }

  submitBookFrom() {
    this.xboxForm = this.fb.group({
      game: ['', [Validators.required]],
      dev: ['', [Validators.required]],
      system: ['', [Validators.required]],
      release: ['', [Validators.required]]
    })
  }

  /* Date */
  formatDate(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.xboxForm.get('release').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.xboxForm.controls[controlName].hasError(errorName);
  }

  /* Submit book */
  submitXboxForm() {
    if (this.xboxForm.valid) {
      this.xboxApi.AddXbox(this.xboxForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/xbox-list'))
      });
    }
  }

}