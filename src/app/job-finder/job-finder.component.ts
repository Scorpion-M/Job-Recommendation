import { JobRecommendationService } from './../services/job-recommendation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-finder',
  templateUrl: './job-finder.component.html',
  styleUrls: ['./job-finder.component.scss']
})
export class JobFinderComponent implements OnInit {

  jobFinderForm:FormGroup = new FormGroup({});
  constructor(private jobRecService:JobRecommendationService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  findJobRecoomendation(data:any){

  }
  createForm():void{
    this.jobFinderForm = this.fb.group({
      a1:'',
      a2:'',
      a3:'',
      a4:'',
      a5:'',
      tweets:''
    })
  }

}
