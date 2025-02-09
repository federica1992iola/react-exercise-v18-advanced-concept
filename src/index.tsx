import { createRoot, Root } from 'react-dom/client';
import { App } from './App';
import './style.scss';
import store from './store/book/bookStore';
import { Provider } from 'react-redux';
import { BookContext } from './store/book/bookContext';

const rootElement: HTMLElement | null = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
    <Provider context={BookContext} store={store}>
        <App />
    </Provider>
);
