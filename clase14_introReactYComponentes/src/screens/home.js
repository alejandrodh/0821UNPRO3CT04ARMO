import React, {Component} from 'react';
import Contador from '../components/Contador';
import {Text,
        TouchableOpacity,
        View,
        StyleSheet } from 'react-native';

class Home extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <View>
                <Text style={styles.title}> Hola Mundo </Text>
                <TouchableOpacity onPress={()=> console.log('Me clickearon')}>
                    <Text>clickeame</Text>
                </TouchableOpacity>
                <Contador />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecoration: 'underline',
        textAlign: 'center',
    }
})

export default Home;