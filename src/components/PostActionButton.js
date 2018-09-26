import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

// component
import FontAwesomeIcon from './FontAwesomeIcon';

class PostActionButton extends React.Component {

    state = {
        active: false
    }

    onPressIn = () => this.setState({ active: true })

    onPressOut = () => this.setState({ active: false })

    render() {
        const { active } = this.state;
        const buttonStyles = StyleSheet.create({
            activeButton: { backgroundColor: '#FF002B' },
            deactiveButton: { backgroundColor: '#fff' }
        });
        return (
            <View style={[styles.postActionButtonContainer, this.props.style, active ? buttonStyles.activeButton : buttonStyles.deactiveButton]}>
                <TouchableWithoutFeedback onPress={this.props.onPress} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        {this.props.iconPos && this.props.iconPos === 'right' ? (
                            <React.Fragment>
                                <Text style={{ color: active ? '#fff' : '#FF002B' }}>{this.props.title}</Text>
                                <View style={{ width: 5 }}></View>
                                <FontAwesomeIcon size={this.props.labelSize || 26} name={this.props.label} color={active ? '#fff' : '#FF002B'} />
                            </React.Fragment>
                        ) :
                            <React.Fragment>
                                <FontAwesomeIcon size={this.props.labelSize || 26} name={this.props.label} color={active ? '#fff' : '#FF002B'} />
                                <View style={{ width: 5 }}></View>
                                <Text style={{ color: active ? '#fff' : '#FF002B' }}>{this.props.title}</Text>
                            </React.Fragment>
                        }
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    postActionButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})

export default PostActionButton;