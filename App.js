import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoading:true,
            images:[]
        };
        this.loadWallpapers = this.loadWallpapers.blind(this)
    }

    loadWallpapers(){
       axios.get('https://api.unsplash.com/photos/random?count=30&client_id=76529839e09216326738271cb5d6472596d822a488d9581985863f38cb2a3200')
       .then(function(response){
        console.log(response.data);
        this.setState({images:response.data, isLoading:false})
       }) 
       .catch(function(error){
        console.log(error);
       })
       .finally(function(){
        console.log('request completed');
       })
    }
    componentDidMount(){
        this.loadWallpapers()
    }

    render(){
        return  this.state.isLoading? ( 
            <View style = {{
                    flex: 1,
                    backgroundColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center'
            }}>
            <ActivityIndicator size = "large"
            color = "#fff"/>
            </View> 
          ):(
            <View style={{ 
                        flex:1,
                        backgroundColor: 'black'
                    }}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
});