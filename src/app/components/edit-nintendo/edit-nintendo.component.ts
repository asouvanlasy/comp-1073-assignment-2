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
  selector: 'app-edit-nintendo',
  templateUrl: './edit-nintendo.component.html',
  styleUrls: ['./edit-nintendo.component.css']
})

export class EditNintendoComponent implements OnInit {
  visible = true;
  selectable = true;
  selected: Boolean = false;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetNintendoForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  nintendoForm: FormGroup;

  ngOnInit() {
    this.updateBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private nintendoApi: ApiService
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.nintendoApi.GetNintendo(id).subscribe(data => {
      //console.log(data.subjects)
      this.nintendoForm = this.fb.group({
        game: [data.game, [Validators.required]],
        dev: [data.dev, [Validators.required]],
        system: [data.system, [Validators.required]],
        release: [data.release, [Validators.required]],
      })
    })
  }

  /* Reactive book form */
  updateBookForm() {
    this.nintendoForm = this.fb.group({
      game: ['', [Validators.required]],
      dev: ['', [Validators.required]],
      system: ['', [Validators.required]],
      release: ['', [Validators.required]],
    })
  }

  /* Date */
  formatDate(e: { target: { value: string | number | Date; }; }) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.nintendoForm.get('release').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.nintendoForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updateNintendoForm() {
    console.log(this.nintendoForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.nintendoApi.UpdateNintendo(id, this.nintendoForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/nintendo-list'))
      });
    }
  }
  
}