import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'
import commonStyles from '../commonStyles'
import backgroundImage from '../../assets/imgs/login.jpg'

export default class Auth extends Component {
    state = {
        stageNow: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    signinOrSignup = () => {
        if (this.state.stageNow) {
            Alert.alert('Sucesso!', 'Criar conta')
        } else {
            Alert.alert('Sucesso!', 'Logar')
        }
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}> 
                        { this.state.stageNow ? 'Crie sua conta' : 'Informe seus dados' }
                    </Text>
                    { this.state.stageNow && 
                        <TextInput placeholder='Nome' style={styles.input} value={ this.state.name }
                            onChangeText={ name => this.setState({ name })} />
                    }
                    <TextInput placeholder='E-mail' style={styles.input} value={ this.state.email }
                            onChangeText={ email => this.setState({ email })} />
                    <TextInput placeholder='Password' style={styles.input} value={ this.state.password }
                            onChangeText={ password => this.setState({ password })} />
                    { this.state.stageNow && 
                        <TextInput placeholder='Confirmação' style={styles.input} value={ this.state.confirmPassword }
                            onChangeText={ confirmPassword => this.setState({ confirmPassword })} />
                    }
                    <TouchableOpacity onPress={ this.signinOrSignup }>
                        <View style={ styles.button }>
                            <Text style={ styles.buttonText }>
                                { this.state.stageNow ? 'Registrar' : 'Login' }
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 10 }} onPress={ () => this.setState({ stageNow: !this.state.stageNow })}>
                            <Text style={ styles.buttonText }>
                                { this.state.stageNow ? 'Já possui conta?' : 'Ainda não possui conta?' }
                            </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 70,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%',
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF'
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20
    }
})