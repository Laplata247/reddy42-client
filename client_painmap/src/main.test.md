import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import { ConsultationsProvider } from './contexts'
import { GenderProvider } from './contexts'
import App from './App';

test('renders the application with providers', () => {
    const { container } = render(
        <React.StrictMode>
            <AuthProvider>
                <Router>
                    <GenderProvider>
                        <ConsultationsProvider>
                            <App />
                        </ConsultationsProvider>
                    </GenderProvider>
                </Router>
            </AuthProvider>
        </React.StrictMode>
    );

});

// You can add more tests as needed, for example, to ensure the providers are working correctly.
