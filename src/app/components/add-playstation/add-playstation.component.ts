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
  selector: 'app-add-playstation',
  templateUrl: './add-playstation.component.html',
  styleUrls: ['./add-playstation.component.css']
})

export class AddPlaystationComponent implements OnInit {
  visible = true;
  selectable = true;
  selected: Boolean = false;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetPlaystationForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  playstationForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private playstationApi: ApiService
  ) {}

  ngOnInit() {
    this.submitBookFrom();
  }

  submitBookFrom() {
    this.playstationForm = this.fb.group({
      game: ['', [Validators.required]],
      dev: ['', [Validators.required]],
      system: ['', [Validators.required]],
      release: ['', [Validators.required]]
    })
  }

  /* Date */
  formatDate(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.playstationForm.get('release').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.playstationForm.controls[controlName].hasError(errorName);
  }

  /* Submit book */
  submitPlaystationForm() {
    if (this.playstationForm.valid) {
      this.playstationApi.AddPlaystation(this.playstationForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/playstation-list'))
      });
    }
  }

}