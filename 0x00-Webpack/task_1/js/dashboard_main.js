import $ from 'jquery';
import _ from 'lodash';

$(document).ready( () => {
  const button = $('<button>').text('Click here to get started');
  const countParagraph = $('<p>').attr('id', 'count');

  $('body')
  .append($('<p>').text('Holberton Dashboard'))
  .append($('<p>').text('Dashboard data for the students'))
  .append(button)
  .append(countParagraph)
  .append($('<p>').text('Copyright - Holberton School'));
  
  let count = 0;

  const updateCounter = () => {
    count++;
    countParagraph.text(`$(count) clicks on the button`);
  };

  button.on('click', _.debounce(updateCounter, 500));
});