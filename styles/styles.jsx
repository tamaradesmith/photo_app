import { StyleSheet, Dimensions } from 'react-native';

const background = '#FDF3EC';


const PHOTO_WIDTH = Dimensions.get('screen').width / 1.5;
const PHOTO_Text = Dimensions.get('screen').width / 2;
const OFFSET = PHOTO_WIDTH;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'green',
    fontSize: 30,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    fontSize: 30,
  },
  photoDiv: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  photoView: {
    borderRadius: 32,
    borderWidth: 2,
    width: PHOTO_WIDTH,
    height: PHOTO_WIDTH,
    backgroundColor: '#aaaaff'
  },

  photo: {
    resizeMode: "contain",
    width: '100%',
    height: '100%',
    borderRadius: 25,
    borderColor: 'black',
  },
  photoText: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: PHOTO_Text / 2,
    left: 5,
    transform: [
      { rotate: "45deg" },
    ],
    fontSize: 18,
    width: PHOTO_Text * 1.25,
    textAlign: 'center',
  },
  container: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    width: PHOTO_WIDTH * 1.1,
    height: PHOTO_WIDTH * 1.1,
    borderRadius: 39,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 35,

  },

});

export default styles;