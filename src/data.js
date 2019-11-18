import agenda from '../data/agenda.json';
import mocks from '../data/mocks.json';

const isProduction = process.env.NODE_ENV === 'production';
const data = isProduction ? agenda : mocks;

export const {
  title,
  description,
  events
} = data;
