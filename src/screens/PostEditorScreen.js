import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


// component 
import AppHeader from '../components/AppHeader';
import FontAwesomeIcon from '../components/FontAwesomeIcon';


class PostEditorScreen extends React.Component {
  static navigationOptions = {
    header: props => <AppHeader {...props} renderRightBtn={() => (
      <TouchableWithoutFeedback>
        <View><Text>โพสต์</Text></View>
      </TouchableWithoutFeedback>
    )} displayBackButton={true} title="สร้างโพสต์" />
  };

  state = {
    image: null,
  };

  _pickImage = () => {
    console.log(ImagePicker)
  };

  render() {
    const { image } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'space-between' }}
          behavior="padding"
          keyboardVerticalOffset={
            Platform.select({
              ios: () => 0,
              android: () => 82
            })()
          }
        >
          <View style={{ flex: 1 }}>
            <TextInput style={{ fontSize: 28, padding: 16 }} placeholder="ระบุข้อความที่ต้องการ" placeholderTextColor="#dddddd" multiline={true} autoFocus={true} underlineColorAndroid="transparent"></TextInput>
            {image &&
              <Image source={{ uri: image }} style={{ resizeMode: 'cover', height: 180 }} />
            }
          </View>
          <View>
            <TouchableWithoutFeedback onPress={() => this._pickImage()}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 25, borderColor: 'solid', borderTopWidth: 1, borderColor: '#dddddd' }}>
                <View style={{
                  flexDirection: 'row',
                  width: 50,
                }}><FontAwesomeIcon name="image" color="#000" /></View>
                <Text style={{ flex: 1, }}>เพิ่มรูป</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default PostEditorScreen;
