import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import { SecureStore } from 'expo';

// component
import AppHeader from '../components/AppHeader';
import OptionItem from '../components/OptionItem';

class ProfileScreen extends React.Component {

    static navigationOptions = {
        header: props => <AppHeader {...props} title="ข้อมูลส่วนตัว" />,
    }

    signOut = async () => {
        this.props.navigation.navigate('SignIn', { onSignOut: true });
        await SecureStore.deleteItemAsync('userToken');
    }

    render() {
        return (
            <ScrollView style={styles.pageContainer}>
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <ElevatedView
                            style={styles.userProfileBadgeContainer}
                            elevation={3}
                        >
                            <Image style={styles.userProfileBadge} source={require('../assets/images/person-dummy.jpg')} />
                        </ElevatedView>
                        <Text style={styles.userTitleName}>นายกอไก่ ชอบเที่ยวจัง</Text>
                        <View style={styles.userDetail}>
                            <Text style={{ fontSize: 20 }}>korkai@hitevent.com</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, borderBottomColor: '#dddddd', borderBottomWidth: 1, borderStyle: 'solid' }}>
                        <OptionItem title="แก้ไขข้อมูล" style={{ padding: 15 }} iconName="cog" />
                        <OptionItem title="ออกจากระบบ" onPress={this.signOut} style={{ padding: 15 }} iconName="sign-out" />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#fff',
        flex: 1,
    },
    userProfileBadge: {
        resizeMode: 'contain',
        height: 200,
        width: 200,
    },
    userProfileBadgeContainer: {
        marginTop: 20,
        height: 200,
        width: 200,
        borderRadius: 125,
        overflow: 'hidden'
    },
    userTitleName: {
        fontSize: 30,
        marginTop: 20,
        fontWeight: 'bold'
    },
    userDetail: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
});

export default ProfileScreen;