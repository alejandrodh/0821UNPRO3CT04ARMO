import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Camera} from 'expo-camera';
import {db, storage} from '../firebase/config';

class MyCamera extends Component{
    constructor(props){
        super(props);
        this.state = {
            permission: false,
            photo: '',
        }
        this.camera //Para hacer referencia a esta cámara y poder usar los métodos internos.

    }

    componentDidMount(){
        Camera.requestCameraPermissionsAsync()
            .then(()=>{
                this.setState({
                    permission: true,
                })
            })
            .catch(error => console.log(error))
        
    }

    takePicture(){
        //Método para sacar una foto.
        this.camera.takePictureAsync()
            .then( photo => {
                this.setState({
                    photo: photo.uri, //La ruta interna hacia la carpeta temporal en donde se encuentra la imagen.
                })
            })
            .catch( error => console.log(error))
        console.log(Camera);
        console.log(this.camera);
    }

    clear(){
        //Setear el estado photo a ''.
    }

    savePhoto(){
        fetch(this.state.photo)
            .then( res => res.blob())
            .then( image => {
                //Guardar imagen en el storage.
                //Darle un nombre a la imagen.
                const ref = storage.ref(`photos/${Date.now()}.jpg`)
                ref.put(image)
                    .then(()=>{
                        ref.getDownloadURL()
                            .then( url => {
                                //pasar por props la url pública al formulario que carga el nuevo posteo
                                this.props.onImageUpload(url);

                                //Actualizo el estado para que se renderice de nuevo la cámara.
                                this.setState({
                                    photo:''
                                })
                            })
                            .catch(error => console.log(error))
                    })
                    .catch(error => console.log(error))

                //Subir archivo al storage.

                //Tomar la url pública y pasarla al form de carga de posteos.
            })
            .catch(error => console.log(error))

    }


    render(){
        return(
            <React.Fragment>
                {
                    this.state.permission ?
                        this.state.photo ?
                        <React.Fragment>
                            <Image 
                                style={styles.preview}
                                source={ {uri:this.state.photo} }
                            />
                            <View style={styles.actionArea}>
                                <TouchableOpacity onPress={()=>this.savePhoto()}>
                                    <Text> Aceptar </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>this.clear()}>
                                    <Text> Rechazar </Text>
                                </TouchableOpacity>
                            </View>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <Camera 
                                style={styles.cameraBody}
                                type={Camera.Constants.Type.back}
                                ref={ reference => this.camera = reference}
                            />
                            <TouchableOpacity 
                                style={styles.button}
                                onPress={()=>this.takePicture()}>
                                <Text>Sacar Foto</Text>
                            </TouchableOpacity>
                        </React.Fragment>
                    :
                    <Text>No hay permisos para usar la cámara.</Text>
                }
            </React.Fragment>
        )
    }

}

const styles = StyleSheet.create({
    cameraBody:{
        flex:7
    },
    button: {
        flex:1
    },
    preview:{
        flex:7
    },
    actionArea:{
        flex: 2,
    }

})

export default MyCamera;