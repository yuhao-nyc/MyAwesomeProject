import React from 'react'
import { Button, StyleSheet, Text, View, Linking, Image, FlatList, SectionList, ActivityIndicator } from 'react-native'

interface Props {}

interface State {
    data: object,
    isLoading: boolean,
}

export class EventData extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            data: {},
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('http://www.ui.simplebet.io/simple_pricing/api/v1/events/mlb/7c2bd871-4bdf-4fe2-8392-1a543f569858?format=full')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator size="large" color="#28C856"/>
            )
        }
        const data: any = this.state.data;
        const event_info: any = data.event_info;

        return (
            <View style={{top: 10}}>
                {
                    this.state.data === null ? null : 
                    <View>
                        <Text>Event Details:</Text>
                        <Text>{data.message_uuid}</Text>
                        <Text>{data.event_info.scheduled}</Text>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({})