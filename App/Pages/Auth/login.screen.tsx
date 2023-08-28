import { SafeAreaView, StyleSheet, View, Text, Linking } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Card, TextInput } from 'react-native-paper';
import { StatusBar } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { colorPrimary, mainStyle } from '../../Style/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);


    return (
        <SafeAreaView style={mainStyle.contentCenter}>
            <StatusBar barStyle='dark-content' backgroundColor={colorPrimary} />
            <View style={mainStyle.view}>
                {/* <Spinner visible={isLoading} color='rgb(66, 103, 178)' /> */}
                {/* <View style={mainStyle.itemCenter}>
                    <Image source={Logopas} style={styles.logoSplash}></Image>
                </View> */}
                <Card>
                    <Card.Title title="Silahkan Login" titleStyle={mainStyle.cardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput
                            mode='outlined'
                            outlineColor={colorPrimary}
                            activeOutlineColor={colorPrimary}
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                            label='Username/Email'
                            keyboardType='default'
                            right={<FontAwesomeIcon icon={faUser} color='white' />}
                        />
                        <TextInput
                            mode='outlined'
                            outlineColor={colorPrimary}
                            activeOutlineColor={colorPrimary}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            label='Password'
                            secureTextEntry={true}
                        />

                        <Button mode='contained' style={[mainStyle.btn, mainStyle.bgPrimary]} onPress={() => { login(username, password) }} >LOGIN</Button>

                        <Button uppercase={false} style={mainStyle.btn} textColor={colorPrimary}
                            onPress={() => {
                                Linking.openURL('https://api.whatsapp.com/send/?phone=6282120741970&text=Bantuan+Lupa+Password&type=phone_number&app_absent=0')
                                // navigation.push('ResetPassword')
                            }}
                        >Lupa Password?</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView >
    )
}

export default LoginScreen


const styles = StyleSheet.create({
    logoSplash: {

        width: 120,
        height: 120,
        marginBottom: 50,
    }
})