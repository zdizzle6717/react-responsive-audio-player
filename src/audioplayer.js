const React = require('react');
const ReactDOM = require('react-dom');
const classNames = require('classnames');

class AudioPlayer extends React.Component {

  render () {
    return (
      <div id="audio_player" className="audio_player"></div>
    );
  }

}

ReactDOM.render(
  <AudioPlayer/>,
  document.getElementById('audio_player_container')
);
