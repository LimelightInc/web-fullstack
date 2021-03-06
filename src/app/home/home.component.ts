import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Post } from '../post';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts:Post[] = [
    { id:1, user_id: 1, community_id: 1, tag_id:1, live_link:'www.google.co.ke', repo_link:'gihub.com',description:'cool application', deadline:'25/September/2020', creation: '23/Sept/2020', is_open_source:true ,is_paid:true, needs_contrib: true }
  ]

  
  expandpost(complete:boolean) {
      var big = document.getElementById("fullpost");
      var small = document.getElementById("shortpost");
      if (big.style.display === "none") {
          big.style.display = "block";           
          small.style.display = "none";           
      } else {
          big.style.display = "none";           
      }
  }
  minimisepost(complete:boolean) {
    var big = document.getElementById("fullpost");
    var small = document.getElementById("shortpost");
    if (big.style.display === "block") {
        big.style.display = "none";           
        small.style.display = "block";           
    } else {
        big.style.display = "block";           
    }
}            
  constructor() { }
  
  ngOnInit(): void {
  }

}
