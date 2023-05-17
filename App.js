import { useState, useEffect } from 'react';
import { Text, View, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import SearchBox from './components/SearchBox';

const App = () => {

  const [items, setItems] = useState([])
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((items) => {
        setItems(items);
      });
  }, []);

  //ONLY SHOW ITEMS WITH LESS THAN 40 CHARACTERS

  const filteredItems = items.filter((item) => item.title.length <= 40 && item.title.toLowerCase().includes(searchText.toLowerCase()))

  //ADD ITEMS

  /*const addItems = (text) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    setItems((prevItems) => {
      return [{id:id, title:text}, ...prevItems]
    })
  };*/

  const addItems = (text) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newItem = { id: id, title: text }

    if (!text) {
      Alert.alert('Error', 'Please enter an item', { text: 'Ok' })
    } else if (text.length >= 40) {
      Alert.alert('Error', 'Please do not exceed 40 characters', { text: 'Ok' })
    } else {
      setItems([...filteredItems, newItem])
    }
  }

  //DELETE ITEMS

  const deleteItems = (id) => {
    setItems(filteredItems.filter((item) => item.id !== id))
  }

  //SEARCHBOX

  const handleSearch = (text) => {
    setSearchText(text);
  };  

  return (
    <View className='flex-1 pt-14'>
      <Header title='Shopping List' />
      <AddItem onAdd={addItems} />
      <SearchBox onChange={handleSearch}/>
      {filteredItems.length === 0 ? <Text>No Items To Show</Text> : <FlatList data={filteredItems} renderItem={({ item }) => <ListItem item={item} onDelete={deleteItems}></ListItem>}/>}
    </View>
  );
}

export default App;
