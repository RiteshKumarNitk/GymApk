import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Verification = ({ navigation, route }) => {
    const { userdata } = route.params || {};
    
    // Check if userdata exists and has at least one element
    const verificationCode = userdata && userdata.length > 0 ? userdata[0]?.VerificationCode : 'No Verification Code';
    console.log('from verification page', verificationCode);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Verification</Text>
            <Text>{verificationCode}</Text>
            {/* You can add more UI elements here */}
        </View>
    );
};

export default Verification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
