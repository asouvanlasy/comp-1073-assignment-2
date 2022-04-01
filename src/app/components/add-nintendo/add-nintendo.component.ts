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
  selector: 'app-add-nintendo',
  templateUrl: './add-nintendo.component.html',
  styleUrls: ['./add-nintendo.component.css']
})

export class AddNintendoComponent implements OnInit {
  visible = true;
  selectable = true;
  selected: Boolean = false;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetNintendoForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  nintendoForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private nintendoApi: ApiService
  ) {}

  ngOnInit() {
    this.submitBookFrom();
  }

  submitBookFrom() {
    this.nintendoForm = this.fb.group({
      game: ['', [Validators.required]],
      dev: ['', [Validators.required]],
      system: ['', [Validators.required]],
      release: ['', [Validators.required]]
    })
  }

  /* Date */
  formatDate(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.nintendoForm.get('release').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.nintendoForm.controls[controlName].hasError(errorName);
  }

  /* Submit book */
  submitNintendoForm() {
    if (this.nintendoForm.valid) {
      this.nintendoApi.AddNintendo(this.nintendoForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/nintendo-list'))
      });
    }
  }

}