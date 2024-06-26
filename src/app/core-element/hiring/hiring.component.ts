import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JiraService } from 'src/app/service/jira.service';
export class Hiring {
  constructor(
    public candidate_info: String,
    public jobOpenings: String,
    public status: String,
    public lastEmail: String
  ) {}
}
@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css'],
})
export class HiringComponent implements OnInit {
  hirings: Hiring[] = [];
  project: any;
  constructor(private httpClient: HttpClient,private jiraService:JiraService){}

  ngOnInit(): void {
    // this.gethiring();
    this.jiraService.getJiraProject().subscribe((response) => {
      this.project = response.values[0];
      console.log("REsponse"+response);
    });
  }
  gethiring() {
    this.httpClient
      .get<any>('http://localhost:8080/gethiring')
      .subscribe((Response) => {
        this.hirings = Response;
      });

      
  }
}
function http<T>(http: any) {
  throw new Error('Function not implemented.');
}

function gethiring() {
  throw new Error('Function not implemented.');
}
