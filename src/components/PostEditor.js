import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import MainStyles from '../constants/MainStyles';
import UserBadge from '../components/UserBadge';

class PostEditor extends React.Component {
  onTapPostTextInput = () => {
    this.props.navigation.navigate('PostEditor');
  };

  render() {
    return (
      <View style={[MainStyles.postEditor, styles.postEditorWrapper]}>
        <View style={styles.postEditorMargin}>
          <UserBadge />
        </View>
        <View style={[styles.postEditorMargin, styles.postInputContainer]}>
          <TextInput
            style={MainStyles.postInput}
            underlineColorAndroid="transparent"
            onFocus={this.onTapPostTextInput}
            placeholder="บอกอะไรสักหน่อยสิ..."
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postEditorWrapper: {
    flexDirection: 'row'
  },
  postEditorMargin: {
    margin: 8
  },
  postInputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default withNavigation(PostEditor);
