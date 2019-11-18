import { html, render } from 'lit-html';
import { eventList } from './components/event-list/event-list';
import { header } from './components/header/header';
import { runAtInterval } from './utils/run-at-interval';
import { title, description, events } from './data';

const app = (counter) => html`
  ${header({ title, description })}
  ${eventList(events, counter)}
`;

let counter = 0;
const root = document.getElementById('root');
const renderApp = () => render(app(++counter), root);

runAtInterval(renderApp, 1000);
