import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticia: any;
  constructor(private route: ActivatedRoute, private noticiaService: NoticiasService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.noticia = this.noticiaService.getNoticia(Number(id));
  }
}
