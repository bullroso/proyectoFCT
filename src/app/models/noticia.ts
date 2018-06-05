export class Noticia {
    constructor(
        public id: number,
        public titulo: string,
        public cabecera: string,
        public texto: string,
        public enlace: string,
        public fecha: string
    ) { }
}
