import { createStackNavigator } from 'react-navigation';

// screen
import SignInScreen from '../screens/SignInScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthNavigator = createStackNavigator({
    SignIn: SignInScreen,
    Register: RegisterScreen,
},
    {
        initialRouteName: 'SignIn',
        headerMode: "none"
    }
);

export default AuthNavigator;