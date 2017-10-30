import {injectGlobal} from 'styled-components';
import dearJoe from '../fonts/dearJoe5.ttf'
import lato from '../fonts/Lato-Regular.ttf'
import latoLight from '../fonts/Lato-Light.ttf'

injectGlobal`
  @font-face {
     font-family: 'dearJoe5';
     src: url(${dearJoe});
  };
  @font-face {
    font-family: 'Lato';
    src: url(${lato}); 
  }
  @font-face {
    font-family: 'Lato';
    src: url(${latoLight});
    font-weight: 300;
  }
  h1{font-weight: 300}
`;