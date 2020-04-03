/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TrackPlayer, { setupPlayer } from 'react-native-track-player';




class App extends Component {





  componentDidMount() {
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          // TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          // TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          // TrackPlayer.CAPABILITY_STOP
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE
        ]
      });
      TrackPlayer.add({
        id: "salo",
        url: 'http://online.radioroks.ua/RadioROKS_Ballads',
        title: "Rock",
        artist: "rocker"
      });

      console.log("OK");
    })
  }

  state = {}
  // https://us4.internet-radio.com/proxy/douglassinclair?mp=/stream

  play = () => {
    console.log("start")
    // AudioPlayer.start('https://us4.internet-radio.com/proxy/douglassinclair?mp=/stream',(resp)=>{
    //   console.log("resp: ", resp)
    // });
    TrackPlayer.play();
  }

  pause = () => {
    console.log("pause")
    // AudioPlayer.stop();
    TrackPlayer.pause();
  }
  stop = () => {
    console.log("stop")
    // AudioPlayer.stop();
    TrackPlayer.stop();
  }
  render() {
    return (
      <View >
        <View style={ { padding: 5 } }>

          <Button title=">" onPress={ () => this.play() }></Button>
        </View>
        <View style={ { padding: 5 } }>

          <Button title="||" onPress={ () => this.pause() }></Button>
        </View>
        <View style={ { padding: 5 } }>

          <Button title="o" onPress={ () => this.stop() }></Button>
        </View>
      </View>
    );
  }
}
export default App;
