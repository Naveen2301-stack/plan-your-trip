import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';



import * as Sentry from '@sentry/capacitor';
// The example is using Angular, Import '@sentry/vue' or '@sentry/react' when using a Sibling different than Angular.
import * as SentrySibling from '@sentry/react';
// For automatic instrumentation (highly recommended)
import { BrowserTracing } from '@sentry/tracing';

Sentry.init(
  {
    dsn: 'https://b5ee2de9b2ce4e93bbd5f225fa041d74@o1327726.ingest.sentry.io/6590666',
    // To set your release and dist versions
    release: 'my-project-name@' + process.env.npm_package_version,
    dist: '1',
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
    integrations: [
      new BrowserTracing({
        tracingOrigins: ['localhost', 'https://trip-your-pan.web.app/home'],
      }),
    ]
  },
  // Forward the init method to the sibling Framework.
  SentrySibling.init
);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
