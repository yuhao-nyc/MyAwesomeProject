import React from 'react'
import { Button, StyleSheet, Text, View, Linking, Image } from 'react-native'

interface Props {}

interface State {}

export class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    render() {
        const logo = {
            uri: 'https://assets.website-files.com/5d5c3321a47ce772f0f4b293/5d65a5691b07769229ac1892_favicon%20(2).png'
        }
        return (
            <View>
                <Image source={logo} style={styles.logo}/>
                <Text
                    onPress={() => Linking.openURL('https://www.simplebet.io/')}
                    style={styles.header}
                >
                    Home
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        color: '#28C856',
        fontSize: 24,
        left: 20,
        top: 5,
    },
    logo: {
        width: 20,
        height: 20,
        left: 0,
        top: 30,
    }
})