import React from 'react';
import { View } from 'react-native';
import { Route, Link } from 'react-router-native';

const TabLink = ({ children, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <Link
            style={{
                flex: 1,
                height: 40,
                alignItems: 'center',
                borderBottomWidth: 1,
                borderStyle: 'solid',
                borderColor: match && match.isExact ? '#FF006D' : '#dddddd'
            }}
            underlayColor='#f0f4f7'
            to={to}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {children}
            </View>
        </Link>
    )} />
)

export default TabLink;