import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ListItem = ({item, onDelete}) => {
  return (
    <TouchableOpacity className='p-4 bg-gray-100 border-b-2 border-gray-200'>
    <View className='flex flex-row justify-between items-center'>
    <Text className='text-xs'>{item.title}</Text>
    <Ionicons name="ios-close" size={22} color="firebrick" onPress={() => onDelete(item.id)}/>
    </View>
    </TouchableOpacity>
  )
}

export default ListItem
