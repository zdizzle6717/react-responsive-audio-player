const React = require('react');
const ReactDOM = require('react-dom');
const AudioPlayer = require('react-responsive-audio-player');

const dir = 'audio/';
const playlist = [
  {
    url: `${ dir }marty_mcpaper_theme.mp3`,
    displayText: 'Marty McPaper: Epic Delivery Service'
  },
  {
    url: `${ dir }secret_of_trash_island.mp3`,
    displayText: 'The Secret of Trash Island'
  },
  {
    url: `${ dir }in_the_hall_of_the_mountain_king.mp3`,
    displayText: 'In the Hall of the Mountain King'
  }
];

ReactDOM.render(
  <AudioPlayer playlist={ playlist }/>,
  document.getElementById('audio_player_container')
);
