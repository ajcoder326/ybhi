import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius } from '../constants/theme';

const ManageAccountsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Manage My Accounts</Text>
                <View style={{ width: 32 }} />
            </View>

            <ScrollView style={styles.content}>
                {/* Account Selector */}
                <TouchableOpacity style={styles.accountSelector}>
                    <Text style={styles.selectorLabel}>Select Account</Text>
                    <View style={styles.selectorValue}>
                        <View style={styles.accountInfo}>
                            <View style={styles.accountAvatar}>
                                <Ionicons name="person" size={18} color={Colors.textWhite} />
                            </View>
                            <View>
                                <Text style={styles.accountNumber}>XXXXXXX4860</Text>
                                <Text style={styles.accountType}>Savings Account</Text>
                            </View>
                        </View>
                        <Ionicons name="chevron-down" size={20} color={Colors.textMuted} />
                    </View>
                </TouchableOpacity>

                {/* Quick Links */}
                <View style={styles.quickLinks}>
                    <TouchableOpacity
                        style={styles.quickLink}
                        onPress={() => navigation.navigate('AccountDetails')}
                    >
                        <Ionicons name="eye-outline" size={16} color={Colors.primary} />
                        <Text style={styles.quickLinkText}>View Account Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.quickLink}>
                        <Ionicons name="share-social-outline" size={16} color={Colors.primary} />
                        <Text style={styles.quickLinkText}>Share Account Details</Text>
                    </TouchableOpacity>
                </View>

                {/* Menu Items */}
                <View style={styles.menuList}>
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <Ionicons name="home-outline" size={24} color={Colors.primary} />
                            <Text style={styles.menuText}>Change Home Branch</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <Ionicons name="briefcase-outline" size={24} color={Colors.primary} />
                            <Text style={styles.menuText}>Convert to Salary Account</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <Ionicons name="people-outline" size={24} color={Colors.primary} />
                            <Text style={styles.menuText}>Manage Nominee</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <MaterialCommunityIcons name="checkbook" size={24} color={Colors.primary} />
                            <Text style={styles.menuText}>Cheque Services</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <Ionicons name="settings-outline" size={24} color={Colors.primary} />
                            <Text style={styles.menuText}>Manage Transaction Rights</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <MaterialCommunityIcons name="cellphone-link" size={24} color={Colors.primary} />
                            <Text style={styles.menuText}>Manage UPI</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
                    </TouchableOpacity>
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
    accountSelector: {
        backgroundColor: Colors.white,
        marginHorizontal: Spacing.base,
        marginTop: Spacing.base,
        borderRadius: BorderRadius.lg,
        padding: Spacing.base,
        borderWidth: 1,
        borderColor: Colors.borderLight,
    },
    selectorLabel: {
        fontSize: FontSizes.sm,
        color: Colors.textMuted,
        marginBottom: Spacing.sm,
    },
    selectorValue: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    accountInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    accountAvatar: {
        width: 36,
        height: 36,
        backgroundColor: Colors.primary,
        borderRadius: BorderRadius.full,
        alignItems: 'center',
        justifyContent: 'center',
    },
    accountNumber: {
        fontSize: FontSizes.md,
        fontWeight: FontWeights.semiBold,
        color: Colors.textPrimary,
    },
    accountType: {
        fontSize: FontSizes.sm,
        color: Colors.textMuted,
    },
    quickLinks: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 32,
        backgroundColor: Colors.white,
        marginHorizontal: Spacing.base,
        marginTop: Spacing.md,
        borderRadius: BorderRadius.lg,
        padding: Spacing.base,
    },
    quickLink: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    quickLinkText: {
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.medium,
        color: Colors.primary,
    },
    menuList: {
        backgroundColor: Colors.white,
        marginHorizontal: Spacing.base,
        marginTop: Spacing.base,
        borderRadius: BorderRadius.lg,
        overflow: 'hidden',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 18,
        paddingHorizontal: Spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderLight,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    menuText: {
        fontSize: FontSizes.base,
        color: Colors.textPrimary,
    },
});

export default ManageAccountsScreen;
