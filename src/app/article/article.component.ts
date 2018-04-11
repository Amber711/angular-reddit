import { Component, OnInit, HostBinding, Input} from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css','../../assets/vendor/semantic.min.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row'; //cssClass - the CSS class we want to apply to the “host” of this component
  @Input() article: Article;
  constructor() {
  }

  ngOnInit() {
  }

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

}
