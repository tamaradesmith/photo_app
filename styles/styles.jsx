import { StyleSheet, Dimensions } from 'react-native';

const background = '#FFFAEB';
const mainColour = "#0fb9ed";

const PHOTO_WIDTH = Dimensions.get('screen').width / 1.5;
const PHOTO_Text = Dimensions.get('screen').width / 2;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: background,
    fontSize: 30,
    alignItems: 'center',
  },

  photoDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  photoView: {
    borderRadius: 32,
    borderWidth: 2,
    width: PHOTO_WIDTH,
    height: PHOTO_WIDTH,
    backgroundColor: background,
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
    width: PHOTO_WIDTH * 1.05,
    height: PHOTO_WIDTH * 1.05,
    borderRadius: 39,
  },

  button: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: mainColour,
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },

  footerText: {
    fontSize: 24,
    flex: 1
  },
});

export default styles;