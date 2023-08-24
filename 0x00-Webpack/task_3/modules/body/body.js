import $ from 'jquery';
import "./body.css";
import _ from 'lodash';

$(document).ready(() => {
  const button = $('<button>').text('Click here to get started');
  const countParagraph = $('<p>').attr('id', 'count');

  $('body')
  .append(button)
  .append(countParagraph);

  let count = 0;

  const updateCounter = () => {
    count++;
    countParagraph.text(`${count} clicks on the button`);
  };

  button.on('click', _.debounce(updateCounter, 500, { leading: true, trailing: false }));
});