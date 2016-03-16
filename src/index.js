const React = require('react');

class AudioPlayer extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    require('./index.scss');
  }

  render () {
    return (
      <div className="audio_player">Audio Player</div>
    );
  }

}

module.exports = AudioPlayer;
