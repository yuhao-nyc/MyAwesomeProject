import React from 'react'
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import { Header } from './widgets/Header'
import { EventList } from './widgets/EventList'
import { EventData } from './widgets/EventData'

interface Props {
    name?: String;
}

interface State {
    showContent?: Boolean;
    textInput?: String;
}

export class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            showContent: false,
            textInput: ''
        }
    }

    toggleContent = () => {
        this.setState({
            showContent: !this.state.showContent,
        })
        // console.error('errored')
        // console.warn('warnings')
    }

    render() {
        return (
            <ScrollView>
                <View style={{margin: 20}}>
                    <Header/>
                    <TextInput
                        placeholder="what's your name?"
                        onChangeText={(text) => {this.setState({textInput: text})}}
                        value={this.state.textInput}
                        style={styles.inputBox}
                    />
                    <Text style={styles.name}>
                        Hello, 
                        <Text>{this.state.textInput}</Text>
                        {this.props.name}
                    </Text>
                    <View style={styles.toggleBtn}>
                        <Button
                            title="Toggle"
                            onPress={this.toggleContent}
                            color="green"
                        />
                    </View>
                    <View>
                        {
                            this.state.showContent ? <Text style={styles.content}>Some Content you don't wanna see </Text> : <Text></Text>
                        }
                    </View>
                    <EventList/>
                    <EventData/>
                </View>
            </ScrollView>  
        )
    }

}

const styles = StyleSheet.create({
    name: {
        fontSize: 36,
        top: 20,
        flex: 1,
    },
    toggleBtn: {
        marginTop: 60,
        marginBottom: 60
    },
    content: {
        fontSize: 24,
        marginTop: 10,
        marginBottom: 40,
        color: 'red'
    },
    inputBox: {
        marginTop: 30
    }
})
