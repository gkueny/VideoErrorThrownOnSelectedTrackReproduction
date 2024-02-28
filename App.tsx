import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Video, {
  OnTextTracksData,
  OnVideoErrorData,
  ResizeMode,
  SelectedTrack,
  SelectedTrackType,
  TextTrackType,
  TextTracksType,
  VideoRef,
} from 'react-native-video';

function App(): React.JSX.Element {
  const videoRef = useRef<VideoRef>();

  const [selectedTextTrack, setSelectedTextTrack] = useState<SelectedTrack>({
    type: SelectedTrackType.INDEX,
    value: 0,
  });
  const onError = useCallback((error: OnVideoErrorData) => {
    console.log({error});
  }, []);

  console.log({selectedTextTrack});
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{
            uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          onError={onError}
          style={styles.backgroundVideo}
          resizeMode={ResizeMode.CONTAIN}
          selectedTextTrack={selectedTextTrack}
          textTracks={[
            {
              title: 'Custom English',
              language: 'en',
              type: TextTracksType.VTT,
              uri: 'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt',
            },
            {
              title: 'Custom Spanish',
              language: 'es',
              type: TextTracksType.VTT, // "application/x-subrip"
              uri: 'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_es.vtt',
            },
          ]}
          onTextTracks={(e: OnTextTracksData) => {
            console.log({e});
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          setSelectedTextTrack({
            type: SelectedTrackType.INDEX,
            value: 0,
          })
        }>
        <Text>EN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setSelectedTextTrack({
            type: SelectedTrackType.INDEX,
            value: 1,
          })
        }>
        <Text>ES</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  videoContainer: {
    width: '100%',
    height: 500,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
