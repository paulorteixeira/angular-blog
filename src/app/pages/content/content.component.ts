import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '/assets/00006-649616693.png';
  contentTitle: string = 'Meu Artigo';
  contentDescription: string = 'Olá mundo';
  constructor() {}

  ngOnInit(): void {}
}
