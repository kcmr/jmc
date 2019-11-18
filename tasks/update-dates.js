#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const moment = require('moment');
const { title, description, events } = require('../data/agenda.json');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);

const dates = events.map((event) => event.time);

function getUpdatedDates(dates) {
  const dateFormat = 'YYYY-MM-DD HH:mm';
  let lastDate = moment().format(dateFormat);
  const addFiveMinutes = (lastDate) => moment(lastDate).add(5, 'minutes').format(dateFormat);

  return dates.map((date, index) => {
    lastDate = index ? addFiveMinutes(lastDate) : lastDate;

    return {
      start: lastDate,
      end: addFiveMinutes(lastDate)
    };
  });
}

function getUpdatedEvents(dates) {
  const updatedDates = getUpdatedDates(dates);

  return events.map((event, index) => ({
    ...event,
    time: updatedDates[index]
  }));
}

(async() => {
  const filePath = path.join(__dirname, '..', 'data', 'mocks.json');
  const events = getUpdatedEvents(dates);
  const data = { title, description, events };

  await writeFile(filePath, JSON.stringify(data, null, 2));
  console.log('Mocks updated!');
})();
