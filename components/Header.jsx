import { Text, View } from 'react-native';

const Header = ({title}) => {
  return (
   <View className='p-4 h-14 bg-blue-500'>
    <Text className='text-white text-base text-center'>{title}</Text>
  </View>
  );
}

export default Header;