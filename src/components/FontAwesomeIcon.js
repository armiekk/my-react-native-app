import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

class FontAwesomeIcon extends React.Component {
    render() {
        return (
            <FontAwesome
                name={this.props.name}
                size={26}
                style={{ marginBottom: -3 }}
            />
        );
    }
}

export default FontAwesomeIcon;