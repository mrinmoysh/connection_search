import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useConnections } from '../api';

const ConnectionListScreen = ({ navigation }: { navigation: any }) => {
  const { data: connections, isLoading } = useConnections();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortAscending, setSortAscending] = React.useState(true);

  const filteredConnections = React.useMemo(() => {
    if (!connections) return [];
    const filtered = connections.filter((conn: any) =>
      conn.firstname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return sortAscending
      ? filtered.sort((a: any, b: any) => a.firstname.localeCompare(b.firstname))
      : filtered.sort((a: any, b: any) => b.firstname.localeCompare(a.firstname));
  }, [connections, searchQuery, sortAscending]);

  const handlePress = (item: any) => {
    navigation.navigate('Profile', { details: item });
  };

  const CardItem = ({ item }: { item: any }) => {

    return (
      <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.picture }} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{item.firstname} {item.surname}</Text>
          <View style={styles.itemsContainer}>
            <Text style={styles.item}>{item.company}</Text>
            <Text style={styles.item}>{item.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return <Text>Loading connections...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.serachWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search connections"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <TouchableOpacity style={{ width: 20, marginTop: 10 }} onPress={() => setSortAscending(!sortAscending)}>
          <Image style={{ width: 20, height: 20 }} source={{ uri: sortAscending ? 'https://cdn-icons-png.flaticon.com/512/2516/2516730.png' : 'https://cdn-icons-png.flaticon.com/512/2516/2516725.png' }} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredConnections}
        keyExtractor={(item: any, index: number) => index.toString()}
        renderItem={({ item }) => <CardItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  serachWrapper: {
    height: 40,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: "#E4E4E4",
    borderRadius: 10
  },
  searchInput: {
    height: 40,
    // borderWidth: 1,
    width: '90%',

    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  connectionItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemsContainer: {
    flexDirection: 'column',
  },
  item: {
    marginBottom: 4,
  },
});

export default ConnectionListScreen;
