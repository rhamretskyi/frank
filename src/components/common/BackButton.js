import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Image source={require('../../img/back.png')} />
    </TouchableOpacity>
  );
};

export { BackButton };

const styles = {
    buttonStyle: {
        position: 'absolute',
        padding: 20,
        paddingTop: 40,
    }
}
