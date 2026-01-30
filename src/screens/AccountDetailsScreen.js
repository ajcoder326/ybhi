import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius } from '../constants/theme';

const AccountDetailsScreen = ({ navigation }) => {
    const accountData = {
        accountNumber: '44723514860',
        holderName: 'Rahul Kumar',
        accountType: 'Savings Account',
        bankName: 'SBI',
        branch: 'SATIPURA',
        ifsc: 'SBIN0017600',
        mmid: '',
        vpa: '',
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Account Details</Text>
                <View style={{ width: 32 }} />
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.detailList}>
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Account Number</Text>
                        <Text style={styles.detailValue}>{accountData.accountNumber}</Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Account Holder's Name</Text>
                        <Text style={styles.detailValue}>{accountData.holderName}</Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Account Type</Text>
                        <Text style={styles.detailValue}>{accountData.accountType}</Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Bank Name</Text>
                        <Text style={styles.detailValue}>{accountData.bankName}</Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Bank Branch</Text>
                        <Text style={styles.detailValue}>{accountData.branch}</Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>IFSC</Text>
                        <Text style={styles.detailValue}>{accountData.ifsc}</Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>MMID</Text>
                        <Text style={styles.detailValue}>{accountData.mmid || '-'}</Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>VPA</Text>
                        <Text style={styles.detailValue}>{accountData.vpa || '-'}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 44,
        paddingHorizontal: Spacing.lg,
        paddingBottom: Spacing.base,
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderLight,
    },
    backBtn: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: FontSizes.lg,
        fontWeight: FontWeights.semiBold,
        color: Colors.textPrimary,
    },
    content: {
        flex: 1,
    },
    detailList: {
        backgroundColor: Colors.white,
        marginTop: Spacing.base,
    },
    detailItem: {
        paddingVertical: Spacing.base,
        paddingHorizontal: Spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderLight,
    },
    detailLabel: {
        fontSize: FontSizes.sm,
        color: Colors.textMuted,
        marginBottom: 4,
    },
    detailValue: {
        fontSize: FontSizes.md,
        fontWeight: FontWeights.medium,
        color: Colors.textPrimary,
    },
});

export default AccountDetailsScreen;
