import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,TouchableOpacity, ScrollView} from 'react-native';


export default function Home(){


return(
<View style={styles.homeContainer}>
    <View style={styles.headerStyle}>
        <Text style={styles.headerTitleText}>Home</Text>
    {/* <View style={styles.divider}></View> */}
    </View>
    <View style={styles.imageContainer}>
        <Image source= {require('../assets/yash_raj_sales_app_logo.png')}/>
    </View>
    <View style={styles.buttonContainer}>
            <View style={styles.topButtonContainer}>
                <TouchableOpacity style={styles.topButton1}>
                    <Image source={require('../assets/paymentHistoryIcon-removebg-preview.png')} style={styles.imagePaymentHistory}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.topButton2}>
                <Image source={require('../assets/orderHistoryIcon-removebg-preview.png')} style={styles.imagePaymentHistory}/>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomButtonContainer}>
            <TouchableOpacity style={styles.bottomButton} Text="Dealers">
            <Image source={require('../assets/dealersIcon-removebg-preview.png')} style={styles.imageDealers}/>
            </TouchableOpacity>
            </View>      
    </View>
    <View style={styles.footer}>

    </View>   
</View>
   
);

}

const styles = StyleSheet.create({
    imageContainer: {
        flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    homeContainer:{
        width: '100%',
        height: '100%',
        paddingTop:24,
        justifyContent: 'flex-start',
        backgroundColor:'#757575'
    },
    headerStyle:{
        height:40,
        backgroundColor:'#558b2f',
        marginBottom:24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitleText:{
        color:'#fff',
        fontWeight:'normal',
        fontSize:18
    },
    divider:{
        padding:2,
        backgroundColor:'#689F38',
        marginTop:20
    },
    buttonContainer:{
        flex:2,
        marginTop:20,
        
       
    },
    topButtonContainer:{
        flex:1,
        flexDirection:'row',
        paddingVertical:10,
      
        
    },
    bottomButtonContainer:{
        flex:1,
        paddingVertical:10,
       
       
    },
    topButton1:{
        flex:1,
        
        borderRadius:10,
        marginEnd:5,
        marginStart:5,
        elevation:4


    },
    topButton2:{
        flex:1,
        borderRadius:10,
        marginStart:5,
        marginEnd:5,
        elevation:4,
        

    },
    bottomButton:{
        flex:1,
        borderRadius:10,
        marginStart:5,
        marginEnd:5,
        elevation:4,
      
    },
    footer:{
        flex:.25,
        padding:20
    },
    imagePaymentHistory:{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
    },
    imageDealers:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
    }
   
    
  });