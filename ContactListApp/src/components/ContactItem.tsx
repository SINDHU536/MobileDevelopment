import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactItem = ({ contact, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.phone}>{contact.phone}</Text>
    </TouchableOpacity>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    color: 'gray',
  },
});
