import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius, Shadows } from '../constants/theme';

const AccountSummaryScreen = ({ navigation }) => {
    const accountData = {
        type: 'SAVINGS A/C',
        number: '44723514860',
        balance: 75.10,
        availableBalance: 75.10,
        holdAmount: 0.00,
        unclearedBalance: 0.00,
        modBalance: 0.00,
        description: 'LOTUS SAVING BANK-ADHAR-CHQ',
        modeOfOperation: 'Single',
        currency: 'Rupees',
        rateOfInterest: '2.5%',
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />

            {/* Header */}
            <LinearGradient
                colors={[Colors.primary, Colors.primaryDark]}
                style={styles.header}
            >
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color={Colors.textWhite} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Accounts</Text>
                <View style={{ width: 32 }} />
            </LinearGradient>

            <ScrollView style={styles.content}>
                {/* Account Card */}
                <LinearGradient
                    colors={['#6B3FA0', '#9B6BC3', '#7B4AAB']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.accountCard}
                >
                    <Text style={styles.accountType}>{accountData.type}</Text>
                    <View style={styles.accountNumberRow}>
                        <Text style={styles.accountNumberLabel}>ACCOUNT NUMBER</Text>
                        <Ionicons name="eye-off-outline" size={16} color={Colors.textWhite} />
                    </View>
                    <Text style={styles.accountNumber}>{accountData.number}</Text>

                    <Text style={styles.balanceLabel}>AVAILABLE BALANCE</Text>
                    <Text style={styles.balanceAmount}>₹{accountData.balance.toFixed(2)}</Text>

                    <View style={styles.cardActions}>
                        <TouchableOpacity style={styles.cardActionBtn}>
                            <Text style={styles.cardActionText}>Manage Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.cardActionBtn, styles.cardActionBtnOutline]}>
                            <Text style={styles.cardActionTextOutline}>View Debit Card</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

                {/* Summary Section */}
                <View style={styles.summarySection}>
                    <View style={styles.summaryHeader}>
                        <Text style={styles.summaryTitle}>Summary</Text>
                    </View>

                    <View style={styles.summaryTable}>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Available Balance</Text>
                            <Text style={styles.summaryValue}>₹{accountData.availableBalance.toFixed(2)}</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Hold/Lien Amount</Text>
                            <Text style={styles.summaryValue}>₹{accountData.holdAmount.toFixed(2)}</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Uncleared Balance</Text>
                            <Text style={styles.summaryValue}>₹{accountData.unclearedBalance.toFixed(2)}</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>MOD Balance</Text>
                            <Text style={styles.summaryValue}>₹{accountData.modBalance.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>

                {/* Account Details Section */}
                <View style={styles.detailsSection}>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Account Description</Text>
                        <Text style={styles.detailValue}>{accountData.description}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Mode of Operation</Text>
                        <Text style={styles.detailValue}>{accountData.modeOfOperation}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Currency</Text>
                        <Text style={styles.detailValue}>{accountData.currency}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Rate of Interest</Text>
                        <Text style={styles.detailValue}>{accountData.rateOfInterest}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Nominee(s)</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewDetailsLink}>View Details</Text>
                        </TouchableOpacity>
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
        color: Colors.textWhite,
    },
    content: {
        flex: 1,
    },
    accountCard: {
        margin: Spacing.base,
        borderRadius: BorderRadius.xl,
        padding: Spacing.lg,
        ...Shadows.purple,
    },
    accountType: {
        fontSize: FontSizes.xs,
        color: Colors.textWhite,
        opacity: 0.85,
        letterSpacing: 0.5,
        marginBottom: Spacing.md,
    },
    accountNumberRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 4,
    },
    accountNumberLabel: {
        fontSize: FontSizes.xs,
        color: Colors.textWhite,
        opacity: 0.7,
    },
    accountNumber: {
        fontSize: FontSizes.lg,
        fontWeight: FontWeights.semiBold,
        color: Colors.textWhite,
        marginBottom: Spacing.md,
    },
    balanceLabel: {
        fontSize: FontSizes.xs,
        color: Colors.textWhite,
        opacity: 0.7,
        marginBottom: 4,
    },
    balanceAmount: {
        fontSize: FontSizes.xxxl,
        fontWeight: FontWeights.bold,
        color: Colors.textWhite,
    },
    cardActions: {
        flexDirection: 'row',
        gap: 12,
        marginTop: Spacing.lg,
    },
    cardActionBtn: {
        flex: 1,
        paddingVertical: Spacing.sm,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: BorderRadius.md,
        alignItems: 'center',
    },
    cardActionBtnOutline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
    },
    cardActionText: {
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.medium,
        color: Colors.textWhite,
    },
    cardActionTextOutline: {
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.medium,
        color: Colors.textWhite,
    },
    summarySection: {
        backgroundColor: Colors.white,
        marginHorizontal: Spacing.base,
        borderRadius: BorderRadius.lg,
        overflow: 'hidden',
    },
    summaryHeader: {
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.base,
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderLight,
    },
    summaryTitle: {
        fontSize: FontSizes.md,
        fontWeight: FontWeights.semiBold,
        color: Colors.textPrimary,
    },
    summaryTable: {},
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.base,
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderLight,
    },
    summaryLabel: {
        fontSize: FontSizes.sm,
        color: Colors.textSecondary,
    },
    summaryValue: {
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.medium,
        color: Colors.textPrimary,
    },
    detailsSection: {
        backgroundColor: Colors.white,
        marginHorizontal: Spacing.base,
        marginTop: Spacing.base,
        marginBottom: Spacing.xxl,
        borderRadius: BorderRadius.lg,
        overflow: 'hidden',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.base,
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderLight,
    },
    detailLabel: {
        fontSize: FontSizes.sm,
        color: Colors.textSecondary,
    },
    detailValue: {
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.medium,
        color: Colors.textPrimary,
        textAlign: 'right',
        flex: 1,
        marginLeft: Spacing.base,
    },
    viewDetailsLink: {
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.medium,
        color: Colors.primary,
    },
});

export default AccountSummaryScreen;
