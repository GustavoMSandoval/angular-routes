import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private navegador: Router) {
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )

    this.activeRoute.firstChild?.params.subscribe()
  }


  ngOnInit(): void {
    /*setInterval(()=>{
      this.navegador.navigate(['/'])
    }, 5000)*/
  }
}
