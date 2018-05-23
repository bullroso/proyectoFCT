import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias/noticias.service';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticia: Noticia;
  constructor(private route: ActivatedRoute, private noticiaService: NoticiasService) { }

  async ngOnInit() {
    this.noticia = new Noticia(0,null,null,null,null);
    const id = this.route.snapshot.paramMap.get('id');
    this.noticia = await this.noticiaService.getNoticia(Number(id));
  }
}
