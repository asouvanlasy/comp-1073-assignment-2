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
  selector: 'app-edit-PC',
  templateUrl: './edit-PC.component.html',
  styleUrls: ['./edit-PC.component.css']
})

export class EditPCComponent implements OnInit {
  visible = true;
  selectable = true;
  selected: Boolean = false;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetPCForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  PCForm: FormGroup;

  ngOnInit() {
    this.updateBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private PCApi: ApiService
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.PCApi.GetPC(id).subscribe(data => {
      console.log(data.subjects)
      this.PCForm = this.fb.group({
        Game: [data.game, [Validators.required]],
        Dev: [data.dev, [Validators.required]],
        System: [data.system, [Validators.required]],
        Release: [data.release, [Validators.required]],
      })
    })
  }

  /* Reactive book form */
  updateBookForm() {
    this.PCForm = this.fb.group({
      Game: ['', [Validators.required]],
      Dev: ['', [Validators.required]],
      System: ['', [Validators.required]],
      Release: ['', [Validators.required]],
    })
  }

  /* Date */
  formatDate(e: { target: { value: string | number | Date; }; }) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.PCForm.get('Release').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.PCForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updatePCForm() {
    console.log(this.PCForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.PCApi.UpdatePC(id, this.PCForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/PC-list'))
      });
    }
  }
  
}