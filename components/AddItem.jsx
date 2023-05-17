import { useState } from 'react';
import { Text, View, TextInput,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddItem = ({onAdd}) => {

 const [text, setText] = useState('')

 const onChange = (textValue) => setText(textValue);

 const onSubmit = () => {
    onAdd(text);
    setText('');
  };

  return (
    <View className='h-21 pt-2 pl-1 pr-1 pb-2 text-sm'>
    <TextInput value={text} placeholder='Add Item...' onChangeText={onChange}/>
    <TouchableOpacity className='bg-purple-200 p-2 mt-6 w-full' onPress={onSubmit}>
    <Text className='text-white text-xl text-center'><Ionicons name="ios-add" size={20} color="black"/>Add Item</Text>
    </TouchableOpacity>
    </View>
  )
}

export default AddItem
