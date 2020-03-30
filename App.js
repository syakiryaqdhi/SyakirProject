import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';

function CustomHeader ({title, isHome, navigation}) {
  return(
    <View style={{flexDirection:'row', height:50, backgroundColor:'#eeeeee', borderColor:'#eeeeee', borderBottomColor:'#9e9e9e', borderWidth:0.5}}>
        <View style={{flex:1, justifyContent:'center'}}>
          {
            isHome ?
            <TouchableOpacity onPress={() => navigation.openDrawer()} >
              <Image
              style={{width:27, height:27, marginLeft: 5}}
              source={require('./Icon/menu.png')}
              resizeMode="contain"
              />
            </TouchableOpacity>
            :
            <TouchableOpacity 
            style={{flexDirection: 'row', alignItems:'center'}}
            onPress={() => navigation.goBack()}
            >
              <Image style={{width:20,height:20,marginLeft:5}} 
              source={require('./Icon/back.png')}
              resizeMode="contain"
              />
              <Text>Back</Text>
            </TouchableOpacity>
          }
      </View>
         <View style={{flex:1.5,justifyContent:'center'}}>
           <Text style={{textAlign:'center'}}>{title}</Text>
         </View>
         <View style={{flex:1}}>
         </View>
    </View>
  )
}

function Item({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <CustomHeader title="Item" isHome={true} navigation={navigation} />
      <View style={{position:'relative', marginHorizontal:12, marginTop:5, borderWidth:1,borderColor:'#e8e8e8', borderRadius:25, height: 40}} >
        <TextInput placeholder="Search Item" style={{fontSize:13, paddingLeft:45, paddingRight:14}} />
        <Image source={require('./Icon/search.png')} style={{position: 'absolute', width:20, height:20, marginVertical: 8, marginLeft:12}} />
      </View>
      <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1}}>
       <TouchableOpacity
         style ={{marginTop:20}}
         onPress={() => navigation.navigate('ItemDetail') }
       >
         <Image source={require('./Icon/61183.png')} 
          style={{width:60,height:60, marginRight:15,marginBottom:15}}
         />
       </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function ItemDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <CustomHeader title="Items" navigation={navigation} />
      <View style={{flex: 1, flexDirection:'row'}}>
        <TouchableOpacity 
        style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e8e8e8', borderRadius:25, height: 35, marginHorizontal:5, marginTop:3}}
        onPress={() => navigation.navigate('AddItems') } >
        <Text  >Items</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e8e8e8', borderRadius:25, height: 35, marginHorizontal:5, marginTop:3}}
                onPress={() => navigation.navigate('Category') } > 
        <Text>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e8e8e8', borderRadius:25, height: 35, marginHorizontal:5, marginTop:3}}
                onPress={() => navigation.navigate('Discount') } > 
        <Text>Discount</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:10, borderWidth:1}} >

      </View>
    </SafeAreaView>
  );
}

function AddItems({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
    <CustomHeader title="Items" navigation={navigation} />
    <View style={{flex: 1, flexDirection:'row'}}>
      <TouchableOpacity style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e8e8e8', borderRadius:25, height: 35, marginHorizontal:5, marginTop:3, backgroundColor:'black'}} >
      <Text style={{color:'white'}}  >Items</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e8e8e8', borderRadius:25, height: 35, marginHorizontal:5, marginTop:3}} 
                      onPress={() => navigation.navigate('Category') }>
      <Text>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e8e8e8', borderRadius:25, height: 35, marginHorizontal:5, marginTop:3}}
                      onPress={() => navigation.navigate('Discount') } >
      <Text>Discount</Text>
      </TouchableOpacity>
    </View>
    <View style={{flex:10, borderWidth:1}} >
      <Text>AddItems</Text>
    </View>
  </SafeAreaView>
  )
}

function Category({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <CustomHeader title="Items" navigation={navigation} />
      <View style={{flex: 1, flexDirection:'row'}}>
        <TouchableOpacity 
        style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e8e8e8', borderRadius:25, height: 35, marginHorizontal:5, marginTop:3}}
        onPress={() => navigation.navigate('AddItems') } >
        <Text  >Items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e8e8e8', borderRadius:25, height: 35, marginHorizontal:5, marginTop:3, backgroundColor:'black'}}
                onPress={() => navigation.navigate('Category') } > 
        <Text style={{color:'white'}} >Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e8e8e8', borderRadius:25, height: 35, marginHorizontal:5, marginTop:3}}
                onPress={() => navigation.navigate('Discount') } > 
        <Text>Discount</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:10, borderWidth:1}} >
<Text>Category</Text>
      </View>
    </SafeAreaView>
  );
}

function Discount({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <CustomHeader title="Items" navigation={navigation} />
      <View style={{flex: 1, flexDirection:'row'}}>
        <TouchableOpacity 
        style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e8e8e8', borderRadius:25, height: 35, marginHorizontal:5, marginTop:3}}
        onPress={() => navigation.navigate('AddItems') } >
        <Text  >Items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e8e8e8', borderRadius:25, height: 35, marginHorizontal:5, marginTop:3}}
                onPress={() => navigation.navigate('Category') } > 
        <Text>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e8e8e8', borderRadius:25, height: 35, marginHorizontal:5, marginTop:3, backgroundColor:'black'}}
                onPress={() => navigation.navigate('Discount') } > 
        <Text style={{color:'white'}} >Discount</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:10, borderWidth:1}} >
<Text>Discount</Text>
      </View>
    </SafeAreaView>
  );
}

function Transaksi({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <CustomHeader title="Transaksi" isHome={true} navigation={navigation}/>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
       <Text>Transaksi</Text>
       <TouchableOpacity
         style ={{marginTop:20}}
         onPress={() => navigation.navigate('TransaksiDetail') }
       >
         <Text>Go Transaksi Detail</Text>
       </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function TransaksiDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <CustomHeader title="Transaksi Detail" navigation={navigation} />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
       <Text>Transaksi Detail</Text>
      </View>
    </SafeAreaView>
  );
}

function Pelanggan({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <CustomHeader title="Pelanggan" isHome={true} navigation={navigation}/>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
       <Text>Pelanggan</Text>
       <TouchableOpacity
         style ={{marginTop:20}}
         onPress={() => navigation.navigate('PelangganDetail') }
       >
         <Text>Go Pelanggan Detail</Text>
       </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function PelangganDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <CustomHeader title="Pelanggan Detail" navigation={navigation} />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
       <Text>Pelanggan Detail</Text>
      </View>
    </SafeAreaView>
  );
}

function Kas({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <CustomHeader title="Kas" isHome={true} navigation={navigation}/>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
       <Text>Kas</Text>
       <TouchableOpacity
         style ={{marginTop:20}}
         onPress={() => navigation.navigate('KasDetail') }
       >
         <Text>Go Kas Detail</Text>
       </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function KasDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <CustomHeader title="Kas Detail" navigation={navigation} />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
       <Text>Kas Detail</Text>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <CustomHeader title="Notifications" navigation={navigation} />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
       <Text>Notifications Screen</Text>
      </View>
    </SafeAreaView>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}} >
      <View style={{height:150,alignItems:'center',justifyContent:'center'}} >
        <Image 
          source={require('./Icon/Profile.png')}
          style={{height:100,width:100,borderRadius:60}}
        />
        <View>
          <Text style={{fontWeight:'bold',fontSize:20}} >Yoga Pratama Ucum</Text>
        </View>
      </View>
      <ScrollView style={{marginLeft:5}} >
        <TouchableOpacity
          style ={{marginTop:20}}
          onPress={() => props.navigation.navigate('MenuTab') }>
          <Text>Menu Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style ={{marginTop:20}}
          onPress={() => props.navigation.navigate('Notifications') }>
          <Text>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const Tab = createBottomTabNavigator();

const NavOptionHandler = () => ({
  headerShown: false })

const StackItem = createStackNavigator()

function ItemStack () {
  return (
    <StackItem.Navigator initialRouteName="Item" >
      <StackItem.Screen name="Item" component={Item} options={NavOptionHandler} />
      <StackItem.Screen name="ItemDetail" component={ItemDetail} options={NavOptionHandler}/>
      <StackItem.Screen name="AddItems" component={AddItems} options={NavOptionHandler}/>
      <StackItem.Screen name="Category" component={Category} options={NavOptionHandler}/>
      <StackItem.Screen name="Discount" component={Discount} options={NavOptionHandler}/>
    </StackItem.Navigator>
  )
}

const StackTransaksi = createStackNavigator()

function TransaksiStack () {
  return (
    <StackTransaksi.Navigator initialRouteName="Transaksi" >
      <StackTransaksi.Screen name="Transaksi" component={Transaksi} options={NavOptionHandler}/>
      <StackTransaksi.Screen name="TransaksiDetail" component={TransaksiDetail} options={NavOptionHandler}/>
    </StackTransaksi.Navigator>
  )
}

const StackPelanggan = createStackNavigator()

function PelangganStack () {
  return (
    <StackPelanggan.Navigator initialRouteName="Pelanggan" >
      <StackPelanggan.Screen name="Pelanggan" component={Pelanggan} options={NavOptionHandler}/>
      <StackPelanggan.Screen name="PelangganDetail" component={PelangganDetail} options={NavOptionHandler}/>
    </StackPelanggan.Navigator>
  )
}

const StackKas = createStackNavigator()

function KasStack () {
  return (
    <StackKas.Navigator initialRouteName="Kas" >
      <StackKas.Screen name="Kas" component={Kas} options={NavOptionHandler}/>
      <StackKas.Screen name="KasDetail" component={KasDetail} options={NavOptionHandler}/>
    </StackKas.Navigator>
  )
}

function TabNavigator () {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Item') {
          iconName = focused
            ? require('./Icon/Item.png')
            : require('./Icon/ItemBlack.png');
        } else if (route.name === 'Transaksi') {
          iconName = focused 
          ? require('./Icon/Transaksi.png')
          : require('./Icon/TransaksiBlack.png');
        } else if (route.name === 'Pelanggan') {
          iconName = focused 
          ? require('./Icon/Pelanggan.png')
          : require('./Icon/PelangganBlack.png');
        } else if (route.name === 'Kas') {
          iconName = focused 
          ? require('./Icon/Kas.png')
          : require('./Icon/KasBlack.png');
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={{width:20, height:20}} resizeMode="contain" /> ;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    }}
>
<Tab.Screen name="Item" component={ItemStack} />
<Tab.Screen name="Transaksi" component={TransaksiStack} />
<Tab.Screen name="Pelanggan" component={PelangganStack} />
<Tab.Screen name="Kas" component={KasStack} />
</Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MenuTab"
      drawerContent={props => CustomDrawerContent(props)} >
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
