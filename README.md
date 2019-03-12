# expo-image-cropper-gl-react
![](https://img.shields.io/npm/v/react-native-image-cropper.svg) 
![](https://img.shields.io/badge/gl--react->=2.1-05F561.svg) 
![](https://img.shields.io/badge/gl--react--expo-05F561.svg)

This Image cropper is based on the gl-react-expo [library](https://github.com/gre/gl-react/tree/master/packages/gl-react-expo)

If you want a copy of same cropper for react native app [React-Native-Cropper](https://github.com/stoffern/react-native-image-cropper)

 <p align="center">
    <a href="https://i.imgur.com/VSZPMHy.gif">
        <img src="https://i.imgur.com/VSZPMHy.gif" height="480"   >
    </a>
</p>


## Installation
```
npm i expo-image-cropper-gl-react --save
```
or
```
yarn add expo-image-cropper-gl-react
```

## Requirements
- `gl-react` You need to install gl-react. `npm i -S gl-react` 
- `gl-react-expo` You need to install gl-react-expo and link the repo in RN. 
- `react-native`

#### `{ImageCrop}` Props
- `image` **(required)**: uri to image that should be cropped.
- `cropHeight` **(required)**: height of the image in cropped size.
- `cropWidth` **(required)**: width of the image in cropped size.
- `zoom`: range 0 - 100 setting zoom value. where 100 = full zoom. (default: 0)
- `maxZoom`: max zoom value, should be bigger than minZoom value (default: 100)
- `minZoom`: min zoom value, should be smaller than maxZoom value (default: 0) 
- `panToMove`: Use pan to move image? (default: true)
- `pinchToZoom` Use pinch to zoom image? (default: true)
- `quality`: a value from 0 to 1 to describe the quality of the snapshot. 0 means 0% (most compressed) and 1 means 100% (best quality). (default: 1)
- `type`: the file type default value is **"png"**, **"jpg"** is also supported. Refer to implementations to see more supported values. (default: jpg)
- `format`: the format of the output. Supported values: **"base64"**, **"file"**. (default: base64)
- `filePath`: if format is **"file"**, the path to write the image to (default: "")
- `pixelRatio`: the pixel ratio to use for the rendering. By default the screen pixel scale will be used.

#### `{ImageCrop}` Functions
- `crop()`: returns a base64 encoded image.


## Example
```js
...
import {ImageCrop} from 'expo-image-cropper-gl-react'


...
render() {
  return (
  <View>
    <ImageCrop
        ref={"cropper"}
        image={this.state.image}
        cropHeight={this.state.height}
        cropWidth={this.state.width}
    />
    <Text onPress={this.capture()}>Capture()</Text>
  </View>
    
  )
} 
capture(){
  this.refs.cropper.crop()
  .then(base64 => console.log(base64))
}
...

```
