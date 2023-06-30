import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, {useEffect, useRef} from 'react'
import { Avatar, Icon } from "react-native-elements";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { colors, parameters } from "../global/styles";
import {GOOGLE_MAPS_APIKEY} from '@env'

const SCREEN_HEIGHT = Dimensions.get('window').height;  // get height dimension of device
const SCREEN_WIDTH = Dimensions.get('window').width;    // get width dimension of device


const DestinationScreen = ({navigation}) => { 

    const textInput1 = useRef(4)
    const textInput2 = useRef(5)
  return (
    <>
    <View style={styles.view2}>
        <View style={styles.view1}>
                <Icon
                type='material-community'
                name='arrow-left'
                color={colors.grey1}
                size={32}
                onPress={()=>navigation.goBack()}
                />
            </View>
            <View style={styles.view2}>
                <TouchableOpacity>
                    <View style={{top:19,alignItems:'center'}}>
                        <View style={styles.view3}>
                            <Avatar 
                                rounded
                                avatarStyle={{}}
                                size={30}
                                source={require('../../assets/blankProfilePic.jpg')}
                                />
                                <Text style={{marginLeft:5}}>For Someone</Text>
                                <Icon 
                                type='material-community'
                                name='chevron-down'
                                color={colors.grey1}
                                size={26}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView
                nestedScrollEnabled={true}
            >
                <GooglePlacesAutocomplete 
                    nearbyPlacesAPI="GooglePlacesSearch"
                    placeholder='Going to...'
                    listViewDisplayed='auto'
                    debounce={400}
                    currentLocation={false}
                    ref={textInput1}
                    minLength={2}
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    autoFocus={false}
                    returnKeyType={'default'}
                    styles={autoComplete}
                    query={
                        {
                            key: GOOGLE_MAPS_APIKEY, 
                            language:'en'
                        }
                    }

                    disableScroll={true} // <--- 2. this works
                />
            </ScrollView>
        </View>
    </>
  )
}

export default DestinationScreen

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:parameters.statusBarHeight
    },
    
    view1:{
      position:"absolute",
      top:25,
      left:12,
      backgroundColor:colors.white,
      height:40,
      width:40,
      borderRadius:20,
      justifyContent:"center",
      alignItems:"center",
      marginTop:2, 
      zIndex: 10
      
    },
    
    view3:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:2,   
      marginBottom:10,
      backgroundColor: colors.white,
      height:45,
      zIndex: 10
    },
    
    view2:{backgroundColor:colors.white,
          zIndex:4,
          paddingBottom:10,
          
    },

    view24:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:15,
        paddingHorizontal:20   
    }, 
    
    view25:{
        flexDirection:'row',
        alignItems:"baseline"
    },
    
    flatlist:{
        marginTop:20,
        zIndex:17,
        elevation:8
    },    
    
});
    
    
const autoComplete = {

    textInput:{
        backgroundColor: colors.grey6,
        height: 50,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 15,
        flex: 1,
        borderWidth:1,
        marginHorizontal:15,
    },
    container: {
        paddingTop:20,
        //flex: 1,
        backgroundColor:colors.white
            },
    
    textInputContainer: {
        flexDirection: 'row',
    },

    poweredContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#c8c7cc',
        borderTopWidth: 0.5,
      },
      powered: {},
      listView: {},
      row: {
        backgroundColor: '#FFFFFF',
        padding: 13,
        height: 44,
        flexDirection: 'row',
      },
      separator: {
        height: 0.5,
        backgroundColor: '#c8c7cc',
      },
      description: {},
      loader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 20,
      },

}
