import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '@shared/ui/core/pages';
import { Icons } from '@shared/ui/core/atoms';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home">
        {props => (
          <View style={styles.container} {...props}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text>{JSON.stringify(process.env)}</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('profile')}
            >
              <Text>Go to profile!</Text>
            </TouchableOpacity>
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen name="profile">
        {props => (
          <Profile
            profileInfo={{
              uri: 'https://media.gettyimages.com/photos/closeup-of-thoughtful-young-woman-wearing-eyeglasses-against-neon-picture-id1132601613?s=612x612',
              userName: 'Филипп Ребийяр Олегович',
              phone: '+7 (951) *** - ** - 24',
            }}
            menu={{
              items: [
                {
                  title: 'Настройки',
                  left: <Icons.Settings />,
                  right: <Icons.ChevronRight />,
                },
                {
                  title: 'Тема приложения',
                  left: <Icons.Moon />,
                  right: <Icons.ChevronRight />,
                },
                {
                  title: 'Служба поддержки',
                  left: <Icons.Phone />,
                },
                {
                  title: 'Выход',
                  left: <Icons.Exit />,
                },
              ],
              onPress: () => null,
            }}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
