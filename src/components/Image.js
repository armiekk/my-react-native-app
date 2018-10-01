import React from 'react';
import { Image as NativeImage, Dimensions } from 'react-native';

class Image extends React.Component {

    state = {
        dimensions: {
            width: null,
            height: null
        }
    }

    componentDidMount() {
        if (!!this.props.source && !!this.props.source.uri) {
            this._setImageSize(this.props.source.uri);
        }
    }

    _setImageSize = (url) => {
        if (!!url) {
            NativeImage.getSize(url, (width, height) => {
                const screenWidth = Dimensions.get('window').width;
                const calculatedHeight = (screenWidth * height) / width;
                this.setState({ dimensions: { width: screenWidth, height: calculatedHeight } })
            });
        }
    }

    render() {
        console.log(this.props.source);
        return <NativeImage {...this.props} style={{ height: this.state.dimensions.height, flex: 1 }} />
    }
}

export default Image;