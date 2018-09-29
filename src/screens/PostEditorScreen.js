import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Image
} from 'react-native';
import { ImagePicker, Permissions } from 'expo';

// component
import AppHeader from '../components/AppHeader';
import FontAwesomeIcon from '../components/FontAwesomeIcon';
import PostEditorOption from '../components/PostEditorOption';

class PostEditorScreen extends React.Component {
  static navigationOptions = {
    header: props => (
      <AppHeader
        {...props}
        renderRightBtn={() => (
          <TouchableWithoutFeedback>
            <View>
              <Text>โพสต์</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        displayBackButton={true}
        title="สร้างโพสต์"
      />
    )
  };

  state = {
    image: null
  };

  _requestCameraPermission = async () => {
    const { status } = await Permissions.getAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );

    if (!!status && status === 'granted') {
      return true;
    } else {
      let { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
      );

      return !!status && status === 'granted';
    }
  };

  _pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    if (!!result && !result.cancelled) {
      this.setState({
        image: result.uri
      });
    }
  };

  _openCamera = async () => {
    const isGranted = await this._requestCameraPermission();
    if (isGranted) {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });

      if (!!result && !result.cancelled) {
        this.setState({
          image: result.uri
        });
      }
    }
  };

  render() {
    const { image } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{
            backgroundColor: '#fff',
            flex: 1,
            justifyContent: 'space-between'
          }}
          behavior="padding"
          keyboardVerticalOffset={Platform.select({
            ios: () => 0,
            android: () => 82
          })()}
        >
          <View style={{ flex: 1 }}>
            <TextInput
              style={{ fontSize: 28, padding: 16 }}
              placeholder="ระบุข้อความที่ต้องการ"
              placeholderTextColor="#dddddd"
              multiline={true}
              autoFocus={true}
              underlineColorAndroid="transparent"
            />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ resizeMode: 'cover', height: 180 }}
              />
            )}
          </View>
          <View>
            <PostEditorOption
              onPress={this._pickImage}
              iconName="image"
              title="เลือกรูป"
            />
            <PostEditorOption
              onPress={this._openCamera}
              iconName="camera"
              title="ถ่ายภาพ"
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default PostEditorScreen;
