import {Avatar} from '@rneui/base';
import React from 'react';
import {Text, View} from 'react-native';
import styles from '../constants/styles';
import {Contact} from '../model/model';

type contactItem = {
  contact: Contact;
};

const ContactListItem = ({contact}: contactItem) => {
  return (
    <View style={styles.contactContainer}>
      <View style={styles.listDivider}>
        <View style={styles.avatar}>
          <Avatar size={30} rounded source={{uri: contact.picture.medium}} />
        </View>
        <View style={styles.contact}>
          <Text>
            {contact.name.first} {contact.name.last}
          </Text>
        </View>
      </View>
      <View style={styles.detailsDivider} />
    </View>
  );
};

export default ContactListItem;
