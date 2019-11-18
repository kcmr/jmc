import { html } from 'lit-html';
import classNames from './header.scss';

export const header = ({ title, description }) => html`
  <h1 class="${classNames.Header}">
    <span class="${classNames.title}">${title}</span>
    <small class="${classNames.subTitle}">${description}</small>
  </h1>
`;
