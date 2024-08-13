import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { asyncAwait2Component, asyncAwaitComponent, asyncComponent, callbacksComponent, environmentsComponent, forAwaitComponent, generatorFunctionsComponent, generatorsAsyncComponent, promiseComponent, promiseRaceComponent } from './src';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`;

const element = document.querySelector( '.card' );

// environmentsComponent( element );
// callbacksComponent( element );
// promiseComponent( element );
// promiseRaceComponent( element );
// asyncComponent( element );
// asyncAwaitComponent( element );
// asyncAwait2Component( element );
// forAwaitComponent( element );
// generatorFunctionsComponent( element );
generatorsAsyncComponent( element );