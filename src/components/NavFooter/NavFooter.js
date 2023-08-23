import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Man from '../../../assets/images/Man.png';
import Blank from '../../../assets/images/blank.png';
import Group from '../../../assets/images/group.png';
import Folder from '../../../assets/images/folder.png';
import Chat from '../../../assets/images/chat.png'
import ManActive from '../../../assets/images/ManActive.png';
import BlankActive from '../../../assets/images/blankActive.png';
import GroupActive from '../../../assets/images/groupActive.png';
import FolderActive from '../../../assets/images/folderActive.png';
import ChatActive from '../../../assets/images/chatActive.png'
import { useState } from "react";

export const NavFooter = ({onChange, activeElement}) => {
    const buttonData = [
        { imageSource: Group, isActive: false, activeSource: GroupActive, id: '' },
        { imageSource: Man, isActive: false, activeSource: ManActive, id: '' },
        { imageSource: Folder, isActive: false, activeSource: FolderActive, id: '' },
        { imageSource: Chat, isActive: false, activeSource: ChatActive, id: 'chat' },
        { imageSource: Blank, isActive: false, activeSource: BlankActive, id: '' },
    ];
    const [currentButtonData, setCurrentButtonData] = useState(buttonData);
    const handleButtonPress = (index) => {
        const updatedButtonData = [...buttonData];
        updatedButtonData[index].isActive = !updatedButtonData[index].isActive;
        setCurrentButtonData(updatedButtonData);
        onChange(updatedButtonData[index].id)
    };

    return (
        <LinearGradient
            colors={['#CCC', '#FFF', '#CCC', '#FFF', '#C4C4C4']}
            start={[0, 0]}
            end={[0, 1]}
            style={styles.gradient}
        >
            <View style={styles.container}>
                <LinearGradient
                    colors={['#0D0D0D', '#333', '#0D0D0D']}
                    start={[0, 0]}
                    end={[1, 0]}
                    style={styles.gradientWrapper}
                >
                    {currentButtonData.map((button, index) => (
                        <LinearGradient
                            key={index}
                            colors={
                                button.isActive
                                    ? ['#B7975AD9', '#8A6E3E', '#E7C173', '#E7C173', '#8A6E3E']  // Градиент для активной кнопки
                                    : ['transparent'] // Градиент для неактивной кнопки
                            }
                            start={[0, 0]}
                            end={[1, 0]}
                            style={[
                                styles.buttonWrapper,
                                button.isActive ? styles.activeButton : null,
                            ]}
                        >
                            <TouchableOpacity
                                style={[
                                    styles.button,
                                ]}
                                onPress={() => handleButtonPress(index)}
                            >
                                <Image source={button.isActive ? button.activeSource : button.imageSource} />
                            </TouchableOpacity>
                        </LinearGradient>
                    ))}
                </LinearGradient>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row'
    },
    buttonWrapper: {
        flex: 1,
        // height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: 'red',
        borderRightColor: 'red',
        borderRightWidth: 2,
        borderLeftWidth: 2,
    },
    gradient: {
        width: '100%',
    },
    buttonGradient: {
        // padding: 10
    },
    activeButton: {
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderRightWidth: 1,
        borderLeftWidth: 1,
    },
    gradientWrapper: {
        paddingBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
    }
});