import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';

import { CardSection, Card, TurqButton } from './common/Index';

const AgreementModal = ({isVisible, onAgree, onDisagree, signUpFormValues}) => {
    return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}>
        <View style={styles.modalStyle}>
          <View style={styles.textBodyStyle}>
            <Text style={styles.headerStyle}>Terms and Agreenment</Text>
            <Text style={styles.subHeaderStyle}>Please read the following terms before proceding.</Text>
            <Text style={styles.bodyStyle}>
            You agree to digital sign a letter of authorization, allowing “Frank LLC” to request your utility data on your behalf. This data will not be shared with third parties. 
            You agree that “Frank LLC” will be your exclusive broker for a period of up to 365 days unless termination is agreed by both parties in writing.            
            </Text>
          </View>
          <View style={styles.buttonsStyle}>
              <TurqButton onPress={onDisagree}>
                Disagree
              </TurqButton>
              <TurqButton onPress={() => onAgree(signUpFormValues)}>
                Agree
              </TurqButton>
          </View>
        </View>
      </Modal>
    );
}

const styles = {
    modalStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 20,
        marginTop: 120,
        height: 430,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
    },
    textBodyStyle: {
      alignSelf: 'stretch',
      alignItems: 'center',
    },
    headerStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: 10
    },
    subHeaderStyle: {
      textAlign: 'center',
      paddingTop: 30,
      paddingBottom: 30,
    },
    bodyStyle: {
      textAlign: 'center'
    },
    buttonsStyle: {
      flexDirection: 'row',
      paddingTop: 10,
      zIndex: 20
    }
}

export default AgreementModal;
