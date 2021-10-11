import React from 'react'
import { StyleSheet, SafeAreaView,ImageBackground } from 'react-native'


const Screen = ({children}) => {
    return (
        <ImageBackground style={styles.backgroundImage}
        source={require('../assets/image/background.png')}>

        <SafeAreaView
        >
        {children}
        </SafeAreaView>
            
        </ImageBackground>
    )
}

export default Screen

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        width:"100%",
        resizeMode:"cover",
    }
})
