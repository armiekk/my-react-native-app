import { StyleSheet, Platform } from 'react-native';

const MainStyles = StyleSheet.create({
  postEditor: {
    backgroundColor: '#FF1C53',
    height: 55,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 4
  },
  pageContainer: {
    paddingTop: 10,
    paddingBottom: 10
  },
  postInput: {
    borderColor: '#FF6302'
  },
  eventHeaderTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  eventHeaderContainer: {
    marginBottom: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  eventCaption: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5
  },
  divider: {
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderColor: '#707070',
    marginTop: 10,
    marginBottom: 4
  },
  statusBarOffset: {
    marginTop: Platform.OS == "ios" ? 20 : 24,
  },
  headerTitle: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default MainStyles;
