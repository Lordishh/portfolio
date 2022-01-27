import { v4 as uuidv4 } from 'uuid';
import GoldQueen from '../images/GoldQueen.png';
import CrudApp from '../images/CrudApp.png';
import GifExpert from '../images/GifExpert.png';

const projects = [
  {
    id: uuidv4(),
    name: 'GoldQueen',
    desc:
      'GoldQueen es un diseño web responsivo de un restaurante, el mismo se adapta a la resolución de cualquier dispositivo',
    img: GoldQueen,
    linkCode: 'https://github.com/Lordishh/goldQueen',
  },
  {
    id: uuidv4(),
    name: 'CRUD-App',
    desc:
      'CrudApp es una aplicación hecha con React que su función es que cada usuario pueda guardar notas personales',
    img: CrudApp,
    linkCode: 'https://github.com/Lordishh/CRUD-app',
  },
  {
    id: uuidv4(),
    name: 'GifExpertApp',
    desc:
      'GifExpertApp es una aplicación web hecha en con React para buscar imágenes Gifs consumiendo la Api de Giphy',
    img: GifExpert,
    linkCode: 'https://github.com/Lordishh/Gif-Expert-App',
  },
];

export default projects;
