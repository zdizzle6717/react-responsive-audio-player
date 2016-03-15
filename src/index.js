import { Component } from 'react';

class AudioPlayer extends Component {

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

export default AudioPlayer;
