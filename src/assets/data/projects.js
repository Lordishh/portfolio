import { v4 as uuidv4 } from 'uuid';
import GoldenQueen from '../images/GoldenQueen.png';
import CrudApp from '../images/CrudApp.png';
import GifExpert from '../images/GifExpert.png';
import Renacer from '../images/Renacer.png';
import sunnyside from '../images/sunnyside.png';
import room from '../images/room.png';
import animationCss from '../images/animation-css.png';
import huddle from '../images/huddle.png';
import heroesApp from '../images/heroes-app.png';
import fixnet from '../images/fixnet.png';

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
    name: 'Heroes App',
    desc:
      'Heroes App es una aplicación web hecha en con React dónde trabajo con reducers, context, y hooks. También utilizo manejo de rutas con React Router',
    img: heroesApp,
    linkCode: 'https://enu-heroes.netlify.app/',
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
  {
    id: uuidv4(),
    name: 'Sunnyside',
    desc:
      'Sunnyside es un desafío "Landing Page" de FrontendMentor, para realizarlo utilicé CSS Grid Layout.',
    img: sunnyside,
    linkCode: 'https://enudev-sunnyside.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Room',
    desc:
      'Room es un desafío "Landing Page" de FrontendMentor, para realizarlo utilicé CSS Grid Layout.',
    img: room,
    linkCode: 'https://enudev-roompage.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Animation CSS',
    desc:
      'El objetivo de Animation CSS es mostrar animaciones con CSS vanilla, un código sencillo y elegante.',
    img: animationCss,
    linkCode: 'https://images-animation.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Huddle',
    desc:
      'Huddle es un desafío "Landing Page" de FrontendMentor, para realizarlo utilicé CSS Flex Layout.',
    img: huddle,
    linkCode: 'https://enueldev-huddle.netlify.appp',
  },
  {
    id: uuidv4(),
    name: 'Fixnet',
    desc: 'Fixnet fue uno de mis primeros diseños web antes de utilizar BEM.',
    img: fixnet,
    linkCode: 'https://fixnet.netlify.app/',
  },
];

export default projects;
