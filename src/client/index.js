import 'babel-polyfill'; // NOTE: REALLY important to avoid "regeneratorRuntime is not defined"
import React from 'react';
import { hydrate, render } from 'react-dom';
import injectTpEventPlugin from 'react-tap-event-plugin';
import { AppContainer } from 'react-hot-loader';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import { loadComponents, getState } from 'loadable-components';
import injectGlobalStyle from './style/injectGlobalStyles';
import Root from './Root';

// import { getLocationOrigin } from './services/API/fetchTools';
// #endregion

// #region constants
const ELEMENT_TO_BOOTSTRAP = 'root';
const bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
// #endregion

// #region globals (styles, polyfill ...)
// smoothscroll polyfill
smoothScrollPolyfill.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;
window.snapSaveState = () => getState();

injectGlobalStyle();
injectTpEventPlugin();
// // #endregion

// #region render (with hot reload if dev)
// const renderApp = RootComponent => {
//     render(
//         <RootComponent />,
//         document.getElementById("root")
//     )
// }
  // needed for react-snap:


// renderApp(Root);
const renderApp = RootComponent => {
    const Application = () => (
      <AppContainer>
        <RootComponent />
      </AppContainer>
    );
  
    // needed for react-snap:
    if (bootstrapedElement.hasChildNodes()) {
      // avoid 1st load flickering due to async component loading:
      loadComponents().then(() => {
        hydrate(<Application />, bootstrapedElement);
      });
    } else {
      render(<Application />, bootstrapedElement);
    }
  };
// if (module.hot) {
//   module.hot.accept('./Root', () => {
//     const RootComponent = require('./Root').default;
//     return 
//   });
// }
renderApp(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const RootComponent = require('./Root').default
    renderApp(RootComponent);
  });
}