import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactDetailsScreen = ({ route }: any) => {

  const { contact } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Contact Details</Text>

      <Text style={styles.text}>Name: {contact.name}</Text>

      <Text style={styles.text}>Phone: {contact.phone}</Text>

    </View>
  );
};

export default ContactDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
