import { JobRecommendationService } from './../services/job-recommendation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBody } from '../models/dataBody.model';

@Component({
  selector: 'app-job-finder',
  templateUrl: './job-finder.component.html',
  styleUrls: ['./job-finder.component.scss']
})
export class JobFinderComponent implements OnInit {
  job_recommedation:any;
  dataBody:DataBody = new DataBody();
  jobFinderForm:FormGroup<any> = new FormGroup<any>({});
  constructor(private _jobRecService:JobRecommendationService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  get formGroupControls(){
      return this.jobFinderForm.controls;
  }

  prepareForm(): DataBody {
    return {
      a1: this.formGroupControls.a1.value,
      a2: this.formGroupControls.a2.value,
      a3:this.formGroupControls.a3.value,
      a4: this.formGroupControls.a4.value,
      a5: this.formGroupControls.a5.value,
      tweets :this.formGroupControls.tweets.value,
    };
  }

  findJobRecomendation(){
    let dataBody = this.prepareForm();    
    this._jobRecService.findJobREcoomendation(dataBody).subscribe(res =>{
      this.job_recommedation = res
    })
    
  }
  createForm():void{
    this.jobFinderForm = this.fb.group({
      a1: [this.dataBody.a1,Validators.required],
      a2:[this.dataBody.a2,Validators.required],
      a3:[this.dataBody.a3,Validators.required],
      a4:[this.dataBody.a4,Validators.required],
      a5:[this.dataBody.a5,Validators.required],
      tweets:[this.dataBody.tweets,Validators.required]
    })
  }

}
