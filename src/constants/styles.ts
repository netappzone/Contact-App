import {StyleSheet} from 'react-native';
import colors from './colors';

// const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: colors.border,
  },
  headerLeftContainer: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.blue,
    marginTop: 5,
    paddingLeft: 10,
  },
  headerRightContainer: {
    paddingRight: 10,
    marginTop: 5,
  },
  detailsRightContainer: {
    backgroundColor: colors.border,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  homeText: {
    alignSelf: 'center',
  },
  // Styling for ContactList component

  contactContainer: {
    flex: 1,
  },

  contact: {
    margin: 10,
  },
  listDivider: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
    alignItems: 'center',
  },
  avatar: {
    flexDirection: 'row',
  },
  detailsAvatar: {
    alignSelf: 'center',
    marginTop: 10,
  },

  // Search styling starts here
  searchContainer: {
    margin: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  searchText: {
    backgroundColor: 'lightgray',
    paddingVertical: 5,
    elevation: 4,
    borderRadius: 10,
    // borderColor: 'gray',
    // borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    bordeRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginRight: 10,
  },
  TextInputStyled: {
    color: colors.blue,
    paddingLeft: 5,
  },

  // Details Screen Styling
  detailsNameWrapStyle: {
    backgroundColor: '#FFFDFD',
    borderTopLeftRadius: 20.0,
    borderBottomRightRadius: 20.0,
    marginHorizontal: 10.0,
    elevation: 5.0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10.0,
  },
  detailsNameText: {
    alignSelf: 'center',
    fontSize: 25,
  },
  detailsInfoWrapStyle: {
    backgroundColor: '#FFFDFD',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: 10.0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10.0,
  },
  detailsText: {
    color: colors.blue,
    marginTop: 5.0,
  },
  detailsDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.black,
    marginHorizontal: 20,
    marginTop: 5,
  },
  divider2: {
    width: '100%',
    borderBottomWidth: 0.4,
    marginVertical: 10,
    borderColor: colors.gray,
  },
  detailsMessageStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 10.0,
    marginLeft: 10,
  },
  detailsMessageCardStyle: {
    flex: 0.33,
    backgroundColor: colors.white,
    elevation: 3.0,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
    padding: 10.0,
    // paddingVertical: 8,
    flexDirection: 'column',
  },
});
