import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ProfileScreen = ({ route }: any) => {
  const { firstname, surname, picture, company } = route.params.details;
  console.log(route.params, "picture")

  return (
    <View style={styles.container}>

      <View style={styles.icontainer}>
        <View style={styles.pwarpper}>
          <Image style={styles.pimage} source={{ uri: picture }} />
        </View>
        <Text style={styles.name}>{firstname} {surname}</Text>
        <Text style={styles.cname}>{company}</Text>
        <Text style={styles.profiledes}>When the user clicks on any of the connections from his connection list, he
          will be redirected to the profile page of that particular connection. This page
          should display the information regarding that connection. Please refer to the
          image attached below.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    paddingTop: 120,
    backgroundColor: '#E4E4E4',
  },
  pwarpper: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginTop: -60,
    justifyContent: 'center',
    backgroundColor: '#E4E4E4',
    alignItems: 'center'
  },
  icontainer: {
    width: '90%',
    height: 300,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    alignItems: 'center'
  },
  pimage: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10
  },
  profiledes: {
    margin: 10,
    textAlign: 'center',
  },
  cname: {
    marginTop: 5
  }
});

export default ProfileScreen;
