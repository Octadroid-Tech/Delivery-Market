import {View, Text} from 'react-native';


const Login = () => {
  return (
    <View className="flex-1 bg-blue-300 items-center justify-center">
      <Text className="text-8xl font-bold">Login</Text>
      <Text className="text-8xl text-gray-600 mt-2">Welcome back! Please login to your account.</Text>
    </View>
  );
};

export default Login;