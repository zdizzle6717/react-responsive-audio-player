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
      <div id="audio_player" className="audio_player">

        <div className="audio_controls">
          <div id="play_pause_button" className="play_pause_button audio_button paused">
            <div className="play_pause_inner">
              <div className="left"></div>
              <div className="right"></div>
              <div className="triangle_1"></div>
              <div className="triangle_2"></div>
            </div>
          </div>
          <div id="skip_button" className="skip_button audio_button">
            <div className="skip_button_inner">
              <div className="right_facing_triangle"></div>
              <div className="right_facing_triangle"></div>
            </div>
          </div>
        </div>

        <div id="audio_progress_container" className="audio_progress_container">
          <div id="audio_progress" className="audio_progress"></div>
          <div id="audio_progress_overlay" className="audio_progress_overlay">
            <div className="audio_info_marquee">
              <div id="audio_info" className="audio_info noselect" draggable="false"></div>
            </div>
            <div id="audio_time_progress" className="audio_time_progress noselect" draggable="false"></div>
          </div>
        </div>

      </div>
    );
  }

}

module.exports = AudioPlayer;
