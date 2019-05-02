import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
import areIntlLocalesSupported from 'intl-locales-supported';
import { IntlProvider } from 'react-intl';
import localLanguage from './locale';

var localesMyAppSupports = [
    /* list locales here */
    "zh-CN",
    "en-US"
];

const bw = window as any;
if (bw.Intl) {
    // Determine if the built-in `Intl` has the locale data we need.
    if (!areIntlLocalesSupported(localesMyAppSupports)) {
        // `Intl` exists, but it doesn't have the data we need, so load the
        // polyfill and patch the constructors we need with the polyfill's.
        var IntlPolyfill = require('intl');
        Intl.NumberFormat = IntlPolyfill.NumberFormat;
        Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
} else {
    // No `Intl`, so use and load the polyfill.
    bw.Intl = require('intl');
}
// add plugin for language
const AppContainer: React.FC = () => (
    <IntlProvider locale='en' messages={localLanguage.chooseLocaleMsg()}>
        <App />
    </IntlProvider>
)

ReactDOM.render(<AppContainer />,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
