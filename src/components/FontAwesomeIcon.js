import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

class FontAwesomeIcon extends React.Component {
    render() {
        return (
            <FontAwesome
                name={this.props.name}
                size={this.props.size || 26}
                style={{ marginBottom: -3 }}
                color={this.props.color}
            />
        );
    }
}

export default FontAwesomeIcon;