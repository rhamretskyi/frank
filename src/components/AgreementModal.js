import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';

import { CardSection, Card } from './common/Index';

const AgreementModal = ({isVisible, onAgree, onDisagree}) => {
    return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}>
        <View style={styles.modalBody}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={onAgree}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
}

const styles = {
    modalBody: {
        margin: 20,
        marginTop: 120,
        height: 430,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
    }
}

export default AgreementModal;
