import React, {useState} from 'react';
import {
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import {Text} from '../components/common/Text';
import ContactList from '../components/ContactList';
import styles from '../constants/styles';
import {useContacts} from '../hooks/useContacts';
import {Icon} from '@rneui/themed';
import colors from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

const pageNo = 20;

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [currentPage, setCurrentPage] = useState(pageNo);
  const [search, setSearch] = useState('');
  const {data, isLoading, error} = useContacts({
    limit: currentPage,
  });

  const handleMoreContacts = () => setCurrentPage(page => page + pageNo);

  if (isLoading) {
    return <Text style={styles.homeText}>loading...</Text>;
  }
  if (error) {
    return <Text style={styles.homeText}>Error Loading data</Text>;
  }
  return (
    <SafeAreaView style={styles.appContainer}>
      {/* This is Search textinput starts here */}
      <View style={styles.searchContainer}>
        <View style={styles.searchText}>
          <Icon type="ionicons" name="search" size={30} color={colors.black} />
          <TextInput
            value={search}
            style={styles.TextInputStyled}
            autoCapitalize="none"
            onChangeText={e => setSearch(e)}
            placeholder="Search contact"
            placeholderTextColor={colors.black}
            onEndEditing={event => setSearch(event.nativeEvent.text)}
          />
        </View>
      </View>

      {/* Search ends here */}

      <View>
        <FlatList
          refreshing={isLoading}
          data={data}
          keyExtractor={item => item.email}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details', item);
                }}>
                <ContactList contact={item} />
              </TouchableOpacity>
            </View>
          )}
          extraData={data}
          onEndReached={() => {
            handleMoreContacts();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
