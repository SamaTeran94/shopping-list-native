import { Text, View, TextInput,TouchableOpacity } from 'react-native';

const SearchBox = ({onChange}) => {

  const handleChange = (text) => {
    onChange(text)
  }
  return (
    <View className='h-21 pt-2 pl-1 pr-1 pb-5 text-sm'>
    <TextInput placeholder='Search....' onChangeText={handleChange}/>
    </View>
  )
}

export default SearchBox
