import {Avatar} from '@rneui/base';
import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../routes/RootNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import styles from '../constants/styles';
import moment from 'moment';
import {Icon} from '@rneui/themed';
import colors from '../constants/colors';

type Props = StackScreenProps<RootStackParamList, 'Details'>;

const DetailsPage = ({route}: Props) => {
  const details = route.params;
  return (
    <SafeAreaView style={styles.detailsContainer}>
      <View style={styles.detailsAvatar}>
        <Avatar size={120} rounded source={{uri: details.picture.medium}} />
      </View>
      <View style={styles.detailsNameWrapStyle}>
        <Text style={styles.detailsNameText}>
          {`${details.name.first} ${details.name.last}`}
        </Text>
      </View>
      <View style={styles.detailsMessageStyle}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {}}
          style={styles.detailsMessageCardStyle}>
          <Icon type="entypo" name="chat" size={20} color={colors.blue} />
          <Text style={styles.detailsText}>message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {}}
          style={styles.detailsMessageCardStyle}>
          <Icon type="ionicons" name="call" size={20} color={colors.blue} />
          <Text style={styles.detailsText}>call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.detailsMessageCardStyle}>
          <Icon type="ionicons" name="mail" size={20} color={colors.blue} />
          <Text style={styles.detailsText}>mail</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailsInfoWrapStyle}>
        <Text>Email</Text>
        <Text style={styles.detailsText}>{details.email}</Text>
      </View>
      <View style={styles.detailsInfoWrapStyle}>
        <Text>Work</Text>

        <Text style={styles.detailsText}>{details.phone}</Text>

        <View style={styles.divider2} />

        <Text>Mobile</Text>
        <Text style={styles.detailsText}>{details.cell}</Text>
      </View>

      <View style={styles.detailsInfoWrapStyle}>
        <Text>Date of Birth</Text>
        <Text style={styles.detailsText}>
          {moment(`${details.dob.date}`).format('MMM D, YYYY')}
        </Text>
      </View>
      <View style={styles.detailsInfoWrapStyle}>
        <Text>Address</Text>
        <Text style={styles.detailsText}>
          {details.location.street.number} {details.location.street.name},
        </Text>
        <Text style={styles.detailsText}>
          {details.location.city} {details.location.state},
        </Text>
        <Text style={styles.detailsText}>{details.location.country}.</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailsPage;
