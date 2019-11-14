import React, { Component } from "react"
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";
import {ImageCrop} from "expo-image-cropper-gl-react"
import { Asset } from 'expo-asset'


const imageURI = Asset.fromModule(require('./assets/my.jpg')).uri;
const { width } = Dimensions.get("window");
const rows = 3;
const cols = 3;
const widthGrid = (width / cols);
const heightGrid = (width / rows);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: 'black', paddingBottom: 20 },
  originalImage: { height: 200, width: 200, position: 'absolute', bottom: 0 },
  doneContainer: { width: 100, borderColor: 'white', borderWidth: 2, alignItems: 'center', marginTop: 20 },
  done: { fontSize: 20, color: 'white' },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  boxContainer: {
    width: widthGrid,
    height: heightGrid,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#696969',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },

});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: imageURI,
      height: width,
      width,
      newImage: imageURI,
    };
  }

  render() {

    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <ImageCrop
          ref={"cropper"}
          image={this.state.image}
          cropHeight={this.state.height}
          cropWidth={this.state.width}
        />

        <View style={styles.sectionContainer} pointerEvents='none'>
          <View style={styles.boxContainer} />
          <View style={styles.boxContainer} />
          <View style={styles.boxContainer} />
          <View style={styles.boxContainer} />
          <View style={styles.boxContainer} />
          <View style={styles.boxContainer} />
          <View style={styles.boxContainer} />
          <View style={styles.boxContainer} />
          <View style={styles.boxContainer} />
        </View>


        <TouchableOpacity
          style={styles.doneContainer}
          onPress={() => {
            this.capture();
          }}
        >
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
        <Image source={{ uri: this.state.newImage }} style={styles.originalImage} />
      </View>
    );
  }
  capture() {
    this.refs.cropper.crop().then(res => {
      this.setState({
        newImage: res.uri
      });
    });
  }
}

export default App;
