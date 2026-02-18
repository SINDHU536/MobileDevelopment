import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ContactItem from '../components/ContactItem';
import { CONTACTS } from '../utils/constants';

const ContactListScreen = ({ navigation }: any) => {

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Contact List</Text>

      <FlatList
        data={CONTACTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem
            contact={item}
            onPress={() =>
              navigation.navigate('ContactDetails', { contact: item })
            }
          />
        )}
      />

    </View>
  );
};

export default ContactListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
