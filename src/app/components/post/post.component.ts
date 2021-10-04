import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../../interfaces/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  slideSoloOpts = {
    allowSlideNext: false,
    allowSlidePrev: false,
  };

  @Input() post: Post = {};

  constructor() {}

  ngOnInit() {}
}
