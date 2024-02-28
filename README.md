# Reproduction

Reproduction of https://github.com/react-native-video/react-native-video/issues/3480

With `selectedTextTrack` & `textTracks`:

- video do not play
- error is thrown with `onError` callback

```json
{
  "error": {
    "domain": "AVFoundationErrorDomain",
    "localizedFailureReason": "An unknown error occurred (-12783)",
    "localizedDescription": "The operation could not be completed",
    "code": -11800,
    "localizedRecoverySuggestion": ""
  },
  "target": 3
}
```
