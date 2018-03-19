import React from 'react';
import { View, Image } from 'react-native';

export const Icon = ({name}) => {

    const renderIcon = () => {
        switch (name) {
            case 'user':
                return (<Image source={require('../../img/user.png')} />)
            case 'key': 
                return (<Image source={require('../../img/key.png')} />) 
            default:
                return null;
        }
    };

    return (
        <View style={styles.iconStyle}>
            {renderIcon()}
        </View>
    )
}

const styles = {
    iconStyle: {
        justifyContent: 'center'
    }
}