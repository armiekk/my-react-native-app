import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';

// component
import FontAwesomeIcon from '../components/FontAwesomeIcon';

class PostEditorOption extends React.Component {
  render() {
    const { onPress, title, iconName } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => (!!onPress ? onPress() : {})}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 25,
            borderColor: 'solid',
            borderTopWidth: 1,
            borderColor: '#dddddd'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              width: 50
            }}
          >
            <FontAwesomeIcon name={iconName} color="#000" />
          </View>
          <Text style={{ flex: 1 }}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default PostEditorOption;
