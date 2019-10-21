import React from 'react'
import { Button, StyleSheet, Text, View, Linking, Image, FlatList, SectionList } from 'react-native'

interface Props {}

interface State {}

export class EventList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    render() {
        const listData = [
            {
                away_tame: {
                    abbreviation: "HOU",
                    brief_name: "astros",
                    city: "houston",
                },
                home_team: {
                    abbreviation: "NYY",
                    brief_name: "yankees",
                    city: "new york",
                },
                status: 'final'
            },
            {
                away_tame: {
                    abbreviation: "STL",
                    brief_name: "cardinals",
                    city: "st. louis",
                },
                home_team: {
                    abbreviation: "WSH",
                    brief_name: "nationals",
                    city: "washington",
                },
                status: 'final'
            },
        ]

        return (
            <View>
                <Text>
                    Name List:
                </Text>
                {/* TODO: need to revisit nested objects in FlatList and SectionList */}
                {/* <FlatList
                    data={listData}
                    renderItem={({item}) => <Text style={styles.listItem}>{item.status}</Text>}
                >
                </FlatList> */}
                <Text>
                    {
                        listData.map(item => (`${item.away_tame.abbreviation} ${item.away_tame.brief_name} ${item.away_tame.city}`))
                    }
                </Text>
                
                {/* <SectionList
                    sections={listData}
                    renderItem={({item}) => <Text style={styles.listItem}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text></Text>}
                    keyExtractor={(item, index) => index}
                >

                </SectionList> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listItem: {
        color: 'blue',
        fontSize: 16,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd'
    }
})