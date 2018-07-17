import * as React from 'react'
import { StyleSheet, FlatList, Text, View, ActivityIndicator, Button, Modal, TextInput } from 'react-native'

/// Scan List Component
export default class ScansList extends React.Component {

    state = {
        modalVisible: false,
        name: '',
        room: '',
        comment: '',
    }

    componentDidMount() {
        this.getUserScans()
    }

    getUserScans() {
        this.props.getUserScans()
    }

    createScan() {
        const { name, room, comment } = this.state
        this.props.createScan(name, room, comment)
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible })
    }

    render() {

        const { scans } = this.props

        return (
            <View style={{ flex: 1 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Button
                                title='Cancel'
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}
                            />
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={(name) => this.setState({ name })}
                                value={this.state.text}
                                placeholder='Name'
                            />
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={(room) => this.setState({ room })}
                                value={this.state.text}
                                placeholder='Room'
                            />
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                                onChangeText={(comment) => this.setState({ comment })}
                                value={this.state.text}
                                placeholder='Comment'
                            />
                            <Button
                                title='Submit'
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                    this.createScan()
                                }}
                            />
                        </View>
                    </View>
                </Modal>
                <ActivityIndicator
                    style={styles.activityIndicator}
                    color='yellow'
                    size='large'
                    animating={scans.get('isFetching')}
                />
                <FlatList style={styles.list}
                    data={scans.get('data').toJS()}
                    keyExtractor={(item) => item['id']}
                    renderItem={({ item }) => (
                        <View style={{marginLeft: 16, height: 70}}>
                            <Text style={{ fontSize: 18, color: 'yellow', fontWeight: 'bold' }} >{item.name}</Text>
                            <Text style={{ color: 'yellow' }} >{item.room}</Text>
                            <Text style={{ color: 'yellow' }} >{item.comment}</Text>
                        </View>
                    )}
                />
                <Button onPress={() => this.setModalVisible(true)} title='Add scan' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: 'purple',
        paddingTop: 44,
    },
    activityIndicator: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});