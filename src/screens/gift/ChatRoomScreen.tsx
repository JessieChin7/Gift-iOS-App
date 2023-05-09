import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './ChatRoomScreen.style';
import { useAppContext } from '../../context/AppContext';
interface ChatRoomScreenProps {
    navigation: any;
}
interface FriendOption {
    label: string;
    value: string;
    image: any;
}

const ChatRoomScreen: React.FC<ChatRoomScreenProps> = ({ navigation }) => {
    const [chatRooms, setChatRooms] = useState<FriendOption[]>([
        // { label: "小明", value: "小明", image: require('../../assets/little-ming.png') },
        { label: "中明", value: "中明", image: require('../../assets/medium-ming.png') },
        { label: "大明", value: "大明", image: require('../../assets/big-ming.png') },
    ]);

    const [searchText, setSearchText] = useState('');

    const handleAddChatRoom = () => {
        // setChatRooms([...chatRooms, `Chat Room ${chatRooms.length + 1}`]);
        navigation.navigate('FriendSelection');
    };

    const filteredChatRooms = chatRooms.filter((chatRoom) =>
        chatRoom.label.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Chat Rooms</Text> */}
            <TextInput
                style={{
                    height: 49,
                    width: 339,
                    borderColor: '#D9D9D9',
                    borderWidth: 1,
                    borderRadius: 14,
                    paddingHorizontal: 10,
                    marginTop: 25,
                    alignSelf: 'center',
                }}
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
                placeholder="Search conversation"
            />
            <FlatList
                data={filteredChatRooms}
                style={{ alignSelf: 'center', margin: 0, padding: 0 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#ddd',
                            height: 96,
                            width: 341,
                            borderRadius: 13,
                            marginTop: 25,
                            justifyContent: 'flex-start',
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    // onPress={() => navigation.navigate('GameScreen')}
                    >
                        <Image source={item.image} style={[styles.friendImage]} />
                        <Text style={[styles.friendName]}>{item.label}</Text>
                        <Text style={[styles.dateText]}>03 FEB</Text>
                    </TouchableOpacity>
                )}
            // keyExtractor={(item) => item}
            />
            <Button
                mode="contained"
                onPress={handleAddChatRoom}
                style={{ backgroundColor: '#FFFFFF', alignSelf: 'center' }}
            >
                <Image source={require('../../assets/addButton.png')} style={{ width: 42, height: 42, resizeMode: 'contain' }} />
            </Button>
        </View>
    );
};

export default ChatRoomScreen;
