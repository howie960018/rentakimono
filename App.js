import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();

function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown:false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'My Detail' }} />
    </Stack.Navigator>
  )

}

function MyProfileStack() {
  return (
    <View>
            <Text>cart</Text>
    </View>
  )
}

function SearchStack() {
  return (
    <View>
            <Text>SearchStack</Text>
    </View>
  )
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imagestyle} source={require('./assets/foxlogo.png')} />
      <Text style={styles.text}>以簡單的步驟來租借和服吧!</Text>
      <Button style={styles.start} title="開始" onPress={() =>navigation.navigate('Details')} />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{flex:1, backgroundColor:"#ffffff", alignItems: 'center', justifyContent: 'center' }}>
      <Image  style={styles.umbrellastyle} source={require('./assets/images/umbre.png')} />
      <Text>歡迎</Text>
      <Text>Choose your favorite kimono</Text>
      <Button
        title="和服"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="配件"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


function App() {
  return (

    <NavigationContainer>
    <Tab.Navigator
      initialRouteName='Homee'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName
          if (route.name == 'Homee') {
             iconName = focused ? 'ios-home' : 'home-outline'    
             return <Ionicons name={iconName} size={25} color={color} />       
          } else if (route.name == 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline'
            return <Ionicons name={iconName} size={25} color={color} />
          }else if (route.name == 'Search') {
            iconName = focused ? 'search' : 'search-outline'
            return <Ionicons name={iconName} size={25} color={color} />
          }

        }
      })}
      tabBarOptions={{
        activeTintColor: '#F88C8C',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen
      
      name="Homee" component={MyHomeStack} />
      <Tab.Screen name="Cart" component={MyProfileStack} />
      <Tab.Screen name="Search" component={SearchStack} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagestyle: {
    width: 188,
    height: 201,
    marginTop: 129,
    marginBottom: 87,
  },
  text: {
    marginBottom: 30,

  },
  start: {

    width: 311,
    height: 47,
    backgroundColor: '#FFAAAA',

  },
  umbrellastyle:{
    width: 73,
    height: 144,
  }

});
