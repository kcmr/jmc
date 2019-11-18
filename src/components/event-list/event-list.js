import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';
import moment from 'moment';
import classNames from './event-list.scss';

const formatTime = ({ start, end }) => [start, end].map((time) => html`
  <span class="${classNames.hour}">
    ${moment(time).format('HH:mm')}
  </span>
`);

const getEventClasses = ({ time: { start, end }, talk }) => classMap({
  [classNames.current]: moment().isBetween(start, end, null, '[]'),
  [classNames.alt]: !talk,
  [classNames.event]: true
});

export const eventList = (events, tick) => html`
  <ul class="${classNames.EventList}">
    ${events.map((event) => html`
      <li class="${getEventClasses(event, tick)}">
        <div class="${classNames.date}">${formatTime(event.time)}</div>
        <div class="${classNames.title}">${event.title}</div>
        <div class="${classNames.speaker}">${event.speaker}</div>
      </li>
    `)}
  </ul>
`;
