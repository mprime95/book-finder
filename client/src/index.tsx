import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './components/app/store';
import './index.css';
import App from './components/app/components/App';

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
    <Auth0Provider
        domain="dev-gum3edpumyws630p.us.auth0.com"
        clientId="55eLbEhv0ayZdiy5wVqZ4eYENTRMMgGv"
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <App />
    </Auth0Provider>
    </Provider>
);
