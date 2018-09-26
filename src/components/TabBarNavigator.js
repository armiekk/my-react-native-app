import React from 'react';
import { LinearGradient } from 'expo';
import { BottomTabBar } from 'react-navigation-tabs';

class TabBarNavigator extends React.Component {
    render() {
        return (
            <BottomTabBar {...this.props}/>
        );
    }
}

export default TabBarNavigator;