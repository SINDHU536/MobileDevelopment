import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import { SKILLS, POSTS } from '../utils/constants';

const ProfileScreen = () => {

  return (

    <ScrollView style={styles.container}>

      {/* Profile Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Sindhu</Text>
        <Text style={styles.role}>React Native Developer</Text>
      </View>

      {/* Skills Section */}
      <Text style={styles.sectionTitle}>Skills</Text>

<View>
  <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={true}
    contentContainerStyle={{ flexDirection: 'row' }}
  >
    {SKILLS.map((skill, index) => (
      <View key={index} style={styles.skillCard}>
        <Text>{skill}</Text>
      </View>
    ))}
  </ScrollView>
</View>

      {/* Posts Section */}
      <Text style={styles.sectionTitle}>Posts</Text>

      {POSTS.map((post, index) => (
        <View key={index} style={styles.postCard}>
          <Text>{post}</Text>
        </View>
      ))}

    </ScrollView>

  );
};

export default ProfileScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  role: {
    fontSize: 16,
    color: 'gray',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },

  skillCard: {
    padding: 10,
    backgroundColor: '#ddd',
    marginRight: 10,
    borderRadius: 5,
  },

  postCard: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
    borderRadius: 5,
  },

});
