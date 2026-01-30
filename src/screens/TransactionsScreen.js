import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius } from '../constants/theme';

const TransactionsScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const transactions = [
        {
            id: 1,
            type: 'UPI',
            description: 'UPI- TRANSFER TO 4695809...',
            date: '16/01/2026',
            amount: 4000.00,
            isCredit: false,
            balance: 75.10,
        },
        {
            id: 2,
            type: 'Within SBI',
            description: 'TRANSFER TO 31996081209...',
            date: '16/01/2026',
            amount: 75015.34,
            isCredit: true,
            balance: 4075.10,
        },
        {
            id: 3,
            type: 'OTHER',
            description: 'OTHER- OTHPG 070123...',
            date: '16/01/2026',
            amount: 1122.00,
            isCredit: false,
            balance: 79090.44,
        },
        {
            id: 4,
            type: 'IMPS',
            description: 'IMPS- TRANSFER TO 469829...',
            date: '16/01/2026',
            amount: 50000.00,
            isCredit: true,
            balance: 80212.44,
        },
    ];

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Transactions</Text>
                <TouchableOpacity>
                    <Ionicons name="refresh" size={22} color={Colors.textSecondary} />
                </TouchableOpacity>
            </View>

            {/* Account Selector */}
            <View style={styles.accountSelector}>
                <Text style={styles.selectorLabel}>Select Account</Text>
                <View style={styles.selectorRow}>
                    <View style={styles.accountAvatar}>
                        <Ionicons name="person" size={16} color={Colors.textWhite} />
                    </View>
                    <View style={styles.accountInfo}>
                        <Text style={styles.accountNumber}>XXXXXXX4860</Text>
                        <Text style={styles.accountMeta}>Savings Account · Available Balance: ₹75.10</Text>
                    </View>
                </View>
            </View>

            {/* Search and Links */}
            <View style={styles.searchSection}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={20} color={Colors.textMuted} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search here..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholderTextColor={Colors.textLight}
                    />
                </View>
                <View style={styles.transactionLinks}>
                    <TouchableOpacity style={styles.transactionLink}>
                        <Ionicons name="swap-vertical-outline" size={14} color={Colors.primary} />
                        <Text style={styles.transactionLinkText}>Recent Transfers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transactionLink}>
                        <Ionicons name="document-text-outline" size={14} color={Colors.primary} />
                        <Text style={styles.transactionLinkText}>Request Statement</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Transaction List */}
            <ScrollView style={styles.transactionList}>
                <View style={styles.monthHeader}>
                    <Text style={styles.monthText}>January 2026</Text>
                </View>

                {transactions.map((transaction) => (
                    <TouchableOpacity key={transaction.id} style={styles.transactionItem}>
                        <View style={[
                            styles.transactionIcon,
                            transaction.isCredit ? styles.creditIcon : styles.debitIcon
                        ]}>
                            <Ionicons
                                name={transaction.isCredit ? 'arrow-down' : 'arrow-up'}
                                size={20}
                                color={transaction.isCredit ? Colors.creditGreen : Colors.debitRed}
                            />
                        </View>
                        <View style={styles.transactionDetails}>
                            <Text style={styles.transactionType}>{transaction.type}</Text>
                            <Text style={styles.transactionDesc} numberOfLines={1}>
                                {transaction.description}
                            </Text>
                            <Text style={styles.transactionDate}>{transaction.date}</Text>
                        </View>
                        <View style={styles.transactionAmount}>
                            <Text style={[
                                styles.amount,
                                transaction.isCredit ? styles.creditAmount : styles.debitAmount
                            ]}>
                                {transaction.isCredit ? '+' : '-'}₹{transaction.amount.toLocaleString('en-IN', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </Text>
                            <Text style={styles.balanceAfter}>
                                Balance: ₹{transaction.balance.toFixed(2)}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}

                <View style={{ height: 100 }} />
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
    accountSelector: {
        backgroundColor: Colors.white,
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.base,
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderLight,
    },
    selectorLabel: {
        fontSize: FontSizes.xs,
        color: Colors.textMuted,
        marginBottom: Spacing.sm,
    },
    selectorRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    accountAvatar: {
        width: 32,
        height: 32,
        backgroundColor: Colors.primary,
        borderRadius: BorderRadius.full,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Spacing.md,
    },
    accountInfo: {},
    accountNumber: {
        fontSize: FontSizes.base,
        fontWeight: FontWeights.semiBold,
        color: Colors.textPrimary,
    },
    accountMeta: {
        fontSize: FontSizes.xs,
        color: Colors.textMuted,
        marginTop: 2,
    },
    searchSection: {
        backgroundColor: Colors.white,
        paddingHorizontal: Spacing.base,
        paddingBottom: Spacing.base,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background,
        borderRadius: BorderRadius.xxl,
        paddingHorizontal: Spacing.base,
        paddingVertical: Spacing.sm,
        gap: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: FontSizes.base,
        color: Colors.textPrimary,
    },
    transactionLinks: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 20,
        marginTop: Spacing.md,
    },
    transactionLink: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    transactionLinkText: {
        fontSize: FontSizes.sm,
        color: Colors.primary,
        fontWeight: FontWeights.medium,
    },
    transactionList: {
        flex: 1,
    },
    monthHeader: {
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.lg,
        backgroundColor: Colors.lightGray,
    },
    monthText: {
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.semiBold,
        color: Colors.textSecondary,
    },
    transactionItem: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        paddingVertical: Spacing.base,
        paddingHorizontal: Spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderLight,
        gap: 12,
    },
    transactionIcon: {
        width: 40,
        height: 40,
        borderRadius: BorderRadius.full,
        alignItems: 'center',
        justifyContent: 'center',
    },
    creditIcon: {
        backgroundColor: Colors.successLight,
    },
    debitIcon: {
        backgroundColor: Colors.errorLight,
    },
    transactionDetails: {
        flex: 1,
    },
    transactionType: {
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.medium,
        color: Colors.textPrimary,
        marginBottom: 2,
    },
    transactionDesc: {
        fontSize: FontSizes.xs,
        color: Colors.textMuted,
    },
    transactionDate: {
        fontSize: FontSizes.xs,
        color: Colors.textLight,
        marginTop: 4,
    },
    transactionAmount: {
        alignItems: 'flex-end',
    },
    amount: {
        fontSize: FontSizes.base,
        fontWeight: FontWeights.semiBold,
    },
    creditAmount: {
        color: Colors.creditGreen,
    },
    debitAmount: {
        color: Colors.debitRed,
    },
    balanceAfter: {
        fontSize: FontSizes.xs,
        color: Colors.textMuted,
        marginTop: 2,
    },
});

export default TransactionsScreen;
