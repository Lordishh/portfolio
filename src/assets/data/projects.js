import { v4 as uuidv4 } from 'uuid';
import GoldenQueen from '../images/GoldenQueen.png';
import CrudApp from '../images/CrudApp.png';
import GifExpert from '../images/GifExpert.png';
import Renacer from '../images/Renacer.png';

const projects = [
  {
    id: uuidv4(),
    name: 'GoldenQueen',
    desc:
      'GoldQueen es un diseño web responsivo de un restaurante, el mismo se adapta a la resolución de cualquier dispositivo',
    img: GoldenQueen,
    linkCode: 'https://goldqueen.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'GifExpertApp',
    desc:
      'GifExpertApp es una aplicación web hecha en con React para buscar imágenes Gifs consumiendo la Api de Giphy',
    img: GifExpert,
    linkCode: 'https://lordishh.github.io/Gif-Expert-App/',
  },
  {
    id: uuidv4(),
    name: 'Renacer',
    desc:
      'Renacer es una página para un centro de pilates. La misma es un desarrollo responsivo con la función modo oscuro',
    img: Renacer,
    linkCode: 'https://renacer.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'CRUD-App',
    desc:
      'CrudApp es una aplicación hecha con React que su función es que cada usuario pueda guardar notas personales - Sin desplegar',
    img: CrudApp,
    linkCode: 'https://github.com/Lordishh/CRUD-app',
  },
];

export default projects;
