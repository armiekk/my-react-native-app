import React from 'react';
import { TouchableWithoutFeedback, View, Button } from 'react-native';
import { ImagePicker } from 'expo';

// component
import FontAwesomeIcon from './FontAwesomeIcon';

class ImagePickerButton extends React.Component {

    state = {
        image: null,
    };

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._pickImage}>
                <View>
                    <FontAwesomeIcon name="image" color="#fff" />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default ImagePickerButton;