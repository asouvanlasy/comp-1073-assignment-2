import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-edit-playstation',
  templateUrl: './edit-playstation.component.html',
  styleUrls: ['./edit-playstation.component.css']
})

export class EditPlaystationComponent implements OnInit {
  visible = true;
  selectable = true;
  selected: Boolean = false;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetPlaystationForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  playstationForm: FormGroup;

  ngOnInit() {
    this.updateBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private playstationApi: ApiService
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.playstationApi.GetPlaystation(id).subscribe(data => {
      console.log(data.subjects)
      this.playstationForm = this.fb.group({
        game: [data.game, [Validators.required]],
        dev: [data.dev, [Validators.required]],
        system: [data.system, [Validators.required]],
        release: [data.release, [Validators.required]],
      })
    })
  }

  /* Reactive book form */
  updateBookForm() {
    this.playstationForm = this.fb.group({
      game: ['', [Validators.required]],
      dev: ['', [Validators.required]],
      system: ['', [Validators.required]],
      release: ['', [Validators.required]],
    })
  }

  /* Date */
  formatDate(e: { target: { value: string | number | Date; }; }) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.playstationForm.get('release').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.playstationForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updatePlaystationForm() {
    console.log(this.playstationForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.playstationApi.UpdatePlaystation(id, this.playstationForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/Playstation-list'))
      });
    }
  }
  
}