import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    StatusBar,
    Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import Svg, { Path, Circle, Defs, LinearGradient as SvgLinearGradient, Stop, G } from 'react-native-svg';
import LottieView from 'lottie-react-native';
import { YonoIcon, SecurityIcon, ExploreIcon, OffersIcon } from '../components/CustomIcons';
import AnimatedQrIcon from '../components/AnimatedQrIcon';

const { width } = Dimensions.get('window');
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius, Shadows } from '../constants/theme';

const CustomEyeIcon = ({ color = '#fff' }) => (
    <Svg width={24} height={24} viewBox="0 0 256 256">
        <G transform="translate(1.4 1.4) scale(2.81 2.81)">
            <Path d="M 45 73.264 c -14.869 0 -29.775 -8.864 -44.307 -26.346 c -0.924 -1.112 -0.924 -2.724 0 -3.836 C 15.225 25.601 30.131 16.737 45 16.737 c 14.868 0 29.775 8.864 44.307 26.345 c 0.925 1.112 0.925 2.724 0 3.836 C 74.775 64.399 59.868 73.264 45 73.264 z M 6.934 45 C 19.73 59.776 32.528 67.264 45 67.264 c 12.473 0 25.27 -7.487 38.066 -22.264 C 70.27 30.224 57.473 22.737 45 22.737 C 32.528 22.737 19.73 30.224 6.934 45 z" fill={color} />
            <Path d="M 45 62 c -9.374 0 -17 -7.626 -17 -17 s 7.626 -17 17 -17 s 17 7.626 17 17 S 54.374 62 45 62 z M 45 34 c -6.065 0 -11 4.935 -11 11 s 4.935 11 11 11 s 11 -4.935 11 -11 S 51.065 34 45 34 z" fill={color} />
        </G>
    </Svg>
);

const HomeScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Banking');
    const [activePaymentTab, setActivePaymentTab] = useState('UPI');

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>RK</Text>
                    </View>
                    <Text style={styles.greetingText}>
                        Hello <Text style={styles.greetingName}>Rakesh!</Text>
                    </Text>
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity>
                        <Ionicons name="search-outline" size={24} color={Colors.textSecondary} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="notifications-outline" size={24} color={Colors.textSecondary} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="log-out" size={22} color={Colors.textSecondary} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Quick Access Circles - Using real image strip */}
            {/* Quick Access Circles - Separate Images */}
            <View style={styles.quickAccess}>
                <TouchableOpacity style={styles.quickAccessItem}>
                    <Image
                        source={require('../../assets/images/welcome_yono_real.png')}
                        style={styles.quickAccessImage}
                    />
                    <Text style={styles.quickAccessText}>Welcome to{'\n'}Yono</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quickAccessItem}>
                    <Image
                        source={require('../../assets/images/security_real.png')}
                        style={styles.quickAccessImage}
                    />
                    <Text style={styles.quickAccessText}>Security</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quickAccessItem}>
                    <Image
                        source={require('../../assets/images/explore_real.png')}
                        style={styles.quickAccessImage}
                    />
                    <Text style={styles.quickAccessText}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quickAccessItem}>
                    <Image
                        source={require('../../assets/images/offers_real.png')}
                        style={styles.quickAccessImage}
                    />
                    <Text style={styles.quickAccessText}>Offers</Text>
                </TouchableOpacity>
            </View>

            {/* Main Tabs */}
            <View style={styles.mainTabs}>
                {['Banking', 'Lifestyle', 'Rewards'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.mainTab, activeTab === tab && styles.mainTabActive]}
                        onPress={() => setActiveTab(tab)}
                    >
                        {activeTab === tab && (
                            <>
                                <View style={styles.tabNotchLeft}>
                                    <Svg width="12" height="12" viewBox="0 0 12 12">
                                        <Path d="M12,12 L12,0 C12,6.627 6.627,12 0,12 L12,12 Z" fill="#fff" />
                                    </Svg>
                                </View>
                                <View style={styles.tabNotchRight}>
                                    <Svg width="12" height="12" viewBox="0 0 12 12">
                                        <Path d="M0,12 L0,0 C0,6.627 5.373,12 12,12 L0,12 Z" fill="#fff" />
                                    </Svg>
                                </View>
                            </>
                        )}
                        <Text style={[styles.mainTabText, activeTab === tab && styles.mainTabTextActive]}>
                            {tab}
                        </Text>
                        {activeTab === tab && (
                            <View style={{
                                height: 3,
                                width: 20,
                                backgroundColor: '#592d82',
                                position: 'absolute',
                                bottom: 8,
                                borderRadius: 1.5
                            }} />
                        )}
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Account Cards Horizontal Scroll */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.accountCardsScroll}
                    contentContainerStyle={styles.accountCardsScrollContent}
                >
                    {/* Account Card */}
                    <View style={styles.accountCardWrapper}>
                        <LinearGradient
                            colors={['#E11D8C', '#C0126A', '#8B0A4A']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.accountCard}
                        >
                            {/* Decorative SVG Overlay - Matching the exact SVG design */}
                            <View style={styles.cardDecorativeArc}>
                                <Svg width={300} height={250} viewBox="0 0 300 250">
                                    <Defs>
                                        {/* Gradient for the bright right circle - matching circleGrad */}
                                        <SvgLinearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <Stop offset="0%" stopColor="#FF2BA6" />
                                            <Stop offset="100%" stopColor="#C0126A" />
                                        </SvgLinearGradient>
                                    </Defs>
                                    {/* Dark inner curve - scaled from cx=1100, cy=650, r=520 on 1536x1024 */}
                                    <Circle
                                        cx="215"
                                        cy="160"
                                        r="130"
                                        fill="#7A0A43"
                                        opacity="0.35"
                                    />
                                    {/* Bright right curve - scaled from cx=1380, cy=520, r=420 on 1536x1024 */}
                                    <Circle
                                        cx="270"
                                        cy="125"
                                        r="105"
                                        fill="url(#circleGrad)"
                                    />
                                    {/* Trigger update */}
                                </Svg>
                            </View>

                            {/* Refresh button positioned on right side */}
                            <View style={styles.refreshBtnContainer}>
                                <TouchableOpacity style={styles.refreshBtnNew}>
                                    <Ionicons name="refresh" size={22} color={Colors.textWhite} />
                                </TouchableOpacity>
                            </View>

                            {/* Card Content */}
                            <View style={styles.accountCardContent}>
                                <View style={styles.accountCardHeader}>
                                    <Text style={styles.accountLabelText}>TRANSACTION ACCOUNTS (XX)</Text>
                                    <TouchableOpacity style={styles.eyeIconBtn}>
                                        <View style={styles.eyeIconCircle}>
                                            <CustomEyeIcon color={Colors.textWhite} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <Text style={styles.balanceLabel}>Combined Balance</Text>
                                <Text style={styles.balanceAmount}>₹XXXX.xx</Text>

                                <View style={styles.accountCardActions}>
                                    <TouchableOpacity style={styles.cardActionBtnNew}>
                                        <Text style={styles.cardActionBtnTextNew}>View Accounts</Text>
                                        <View style={styles.cardActionUnderline} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardActionBtnNew}>
                                        <Text style={styles.cardActionBtnTextNew}>Transactions</Text>
                                        <View style={styles.cardActionUnderline} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>

                    {/* Personal Finance Manager Card - White with purple arc */}
                    <View style={styles.accountCardWrapper}>
                        <View style={styles.lightCard}>
                            {/* Decorative SVG Overlay */}
                            <View style={styles.cardDecorativeArc}>
                                <Svg width={300} height={250} viewBox="0 0 300 250">
                                    <Defs>
                                        <SvgLinearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <Stop offset="0%" stopColor="#9B7FCF" />
                                            <Stop offset="100%" stopColor="#7B5BAD" />
                                        </SvgLinearGradient>
                                    </Defs>
                                    <Circle cx="215" cy="160" r="130" fill="#DDD5E8" opacity="0.5" />
                                    <Circle cx="270" cy="125" r="105" fill="url(#purpleGrad)" opacity="0.6" />
                                </Svg>
                            </View>
                            <View style={styles.accountCardContent}>
                                <View style={styles.accountCardHeader}>
                                    <Text style={styles.lightCardTitle}>PERSONAL FINANCE MANAGER</Text>
                                    <View style={{ width: 40 }} />
                                </View>
                                <Text style={styles.lightCardDescription}>
                                    One dashboard, all your finances-start using Personal Financial Manager now!
                                </Text>
                                <TouchableOpacity style={styles.lightCardBtn}>
                                    <Text style={styles.lightCardBtnText}>Start Now</Text>
                                    <View style={styles.lightCardUnderline} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Investments Card - White with purple arc */}
                    <View style={styles.accountCardWrapper}>
                        <View style={styles.lightCard}>
                            <View style={styles.cardDecorativeArc}>
                                <Svg width={300} height={250} viewBox="0 0 300 250">
                                    <Defs>
                                        <SvgLinearGradient id="purpleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <Stop offset="0%" stopColor="#9B7FCF" />
                                            <Stop offset="100%" stopColor="#7B5BAD" />
                                        </SvgLinearGradient>
                                    </Defs>
                                    <Circle cx="215" cy="160" r="130" fill="#DDD5E8" opacity="0.5" />
                                    <Circle cx="270" cy="125" r="105" fill="url(#purpleGrad2)" opacity="0.6" />
                                </Svg>
                            </View>
                            <View style={styles.accountCardContent}>
                                <View style={styles.accountCardHeader}>
                                    <Text style={styles.lightCardTitle}>INVESTMENTS</Text>
                                    <View style={{ width: 40 }} />
                                </View>
                                <Text style={styles.lightCardDescription}>Ready to start investing?</Text>
                                <TouchableOpacity style={styles.lightCardBtn}>
                                    <Text style={styles.lightCardBtnText}>Invest Now</Text>
                                    <View style={styles.lightCardUnderline} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* General Insurance Card - Purple gradient */}
                    <View style={styles.accountCardWrapper}>
                        <LinearGradient
                            colors={['#5C2D91', '#7B3FA0', '#9B5FC0']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.accountCard}
                        >
                            <View style={styles.cardDecorativeArc}>
                                <Svg width={300} height={250} viewBox="0 0 300 250">
                                    <Defs>
                                        <SvgLinearGradient id="purpleBrightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <Stop offset="0%" stopColor="#B48DD8" />
                                            <Stop offset="100%" stopColor="#8B5FC8" />
                                        </SvgLinearGradient>
                                    </Defs>
                                    <Circle cx="215" cy="160" r="130" fill="#4A1D70" opacity="0.35" />
                                    <Circle cx="270" cy="125" r="105" fill="url(#purpleBrightGrad)" />
                                </Svg>
                            </View>
                            <View style={styles.accountCardContent}>
                                <View style={styles.accountCardHeader}>
                                    <Text style={styles.accountLabelText}>GENERAL INSURANCE</Text>
                                    <TouchableOpacity style={styles.eyeIconBtn}>
                                        <View style={styles.eyeIconCircle}>
                                            <Ionicons name="eye" size={18} color={Colors.textWhite} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.balanceLabel}>Tap on the Eye Icon above</Text>
                                <Text style={styles.balanceAmount}>To View your Policy details</Text>
                                <TouchableOpacity style={styles.cardActionBtnNew}>
                                    <Text style={styles.cardActionBtnTextNew}>Buy New</Text>
                                    <View style={styles.cardActionUnderline} />
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </View>

                    {/* Life Insurance Card - Purple gradient */}
                    <View style={styles.accountCardWrapper}>
                        <LinearGradient
                            colors={['#5C2D91', '#7B3FA0', '#9B5FC0']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.accountCard}
                        >
                            <View style={styles.cardDecorativeArc}>
                                <Svg width={300} height={250} viewBox="0 0 300 250">
                                    <Defs>
                                        <SvgLinearGradient id="purpleBrightGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <Stop offset="0%" stopColor="#B48DD8" />
                                            <Stop offset="100%" stopColor="#8B5FC8" />
                                        </SvgLinearGradient>
                                    </Defs>
                                    <Circle cx="215" cy="160" r="130" fill="#4A1D70" opacity="0.35" />
                                    <Circle cx="270" cy="125" r="105" fill="url(#purpleBrightGrad2)" />
                                </Svg>
                            </View>
                            <View style={styles.accountCardContent}>
                                <View style={styles.accountCardHeader}>
                                    <Text style={styles.accountLabelText}>LIFE INSURANCE</Text>
                                    <TouchableOpacity style={styles.eyeIconBtn}>
                                        <View style={styles.eyeIconCircle}>
                                            <CustomEyeIcon color={Colors.textWhite} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.balanceLabel}>Tap on the Eye Icon above</Text>
                                <Text style={styles.balanceAmount}>To View your Policy details</Text>
                                <TouchableOpacity style={styles.cardActionBtnNew}>
                                    <Text style={styles.cardActionBtnTextNew}>Buy New</Text>
                                    <View style={styles.cardActionUnderline} />
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </View>
                </ScrollView>

                {/* Payments & Transfers */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Payments & Transfers</Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.paymentTabs}
                    contentContainerStyle={styles.paymentTabsContent}
                >
                    {['UPI', 'Fund Transfer', 'Bills', 'Yono Cash'].map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[styles.paymentTab, activePaymentTab === tab && styles.paymentTabActive]}
                            onPress={() => setActivePaymentTab(tab)}
                        >
                            <Text style={[styles.paymentTabText, activePaymentTab === tab && styles.paymentTabTextActive]}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* UPI Section */}
                <View style={styles.upiSection}>
                    <View style={styles.upiIdRow}>
                        <Text style={styles.upiId}>
                            UPI: <Text style={styles.upiIdValue}>amishasriv... @sbi</Text>
                        </Text>
                        <TouchableOpacity style={styles.upiLiteBtn}>
                            <Text style={styles.upiLiteBtnText}>Enable UPI LITE</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.upiPaymentsHeader}>
                        <Text style={styles.upiPaymentsTitle}>UPI Payments</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAllLink}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.iconGrid}>
                        <TouchableOpacity style={styles.gridItem}>
                            <View style={styles.gridIcon}>
                                <Ionicons name="phone-portrait-outline" size={22} color={Colors.primary} />
                            </View>
                            <Text style={styles.gridItemText}>Pay to{'\n'}Mobile or{'\n'}Contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gridItem}>
                            <View style={styles.gridIcon}>
                                <MaterialCommunityIcons name="sync" size={22} color={Colors.primary} />
                            </View>
                            <Text style={styles.gridItemText}>Quick{'\n'}Transfer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gridItem}>
                            <View style={styles.gridIcon}>
                                <MaterialCommunityIcons name="cellphone-arrow-down" size={22} color={Colors.primary} />
                            </View>
                            <Text style={styles.gridItemText}>Send Money</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gridItem}>
                            <View style={styles.gridIcon}>
                                <Ionicons name="receipt-outline" size={22} color={Colors.primary} />
                            </View>
                            <Text style={styles.gridItemText}>Bill{'\n'}Payments</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Deposits Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Deposits</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllLink}>View All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.iconGrid}>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="time-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Fixed{'\n'}Deposit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="sync-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Recurring{'\n'}Deposit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="calendar-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Annuity{'\n'}Deposit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="flash-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Auto Sweep</Text>
                    </TouchableOpacity>
                </View>

                {/* Home Loan Banner */}
                <View style={styles.promoContainer}>
                    <Image
                        source={require('../../assets/images/home_loan_banner.png')}
                        style={styles.promoBanner}
                        resizeMode="cover"
                    />
                </View>

                {/* Loans Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Loans</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllLink}>View All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.iconGrid}>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="person-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Personal{'\n'}Loan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <MaterialCommunityIcons name="chart-line" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Loan Against{'\n'}Mutual Fund</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <MaterialCommunityIcons name="gold" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Gold Loan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="home-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Home Loan</Text>
                    </TouchableOpacity>
                </View>

                {/* Credit Score Widget */}
                <TouchableOpacity style={styles.creditScoreWidget}>
                    <Text style={styles.creditScoreText}>What is your{'\n'}Credit Score {'>'}</Text>
                    <View style={styles.creditScoreMeter}>
                        <MaterialCommunityIcons name="speedometer" size={40} color={Colors.primary} />
                    </View>
                </TouchableOpacity>

                {/* Investments Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Investments</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllLink}>View All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.iconGrid}>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <MaterialCommunityIcons name="chart-box-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Mutual{'\n'}Fund</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <MaterialCommunityIcons name="chart-timeline-variant" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Demat &{'\n'}Securities</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <MaterialCommunityIcons name="piggy-bank-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>NPS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="wallet-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>PPF</Text>
                    </TouchableOpacity>
                </View>

                {/* Personal Finance Manager */}
                <TouchableOpacity style={styles.pfmWidget}>
                    <Text style={styles.pfmText}>Personal Finance{'\n'}Manager {'>'}</Text>
                    <Ionicons name="pie-chart-outline" size={28} color={Colors.textWhite} />
                </TouchableOpacity>

                {/* Cards Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Cards</Text>
                </View>

                <View style={styles.iconGrid}>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="card-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Credit{'\n'}Cards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="card-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Debit Cards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <MaterialCommunityIcons name="currency-usd" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Forex{'\n'}Cards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="subway-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>NCMC</Text>
                    </TouchableOpacity>
                </View>

                {/* Insurance Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Insurance</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllLink}>View All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.iconGrid}>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="heart-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Life</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="medkit-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Health</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="warning-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Accident</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="car-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Motor</Text>
                    </TouchableOpacity>
                </View>

                {/* Services Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Services</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllLink}>View All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.iconGrid}>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="person-circle-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Account{'\n'}Related</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="document-text-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Tax Related</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <MaterialCommunityIcons name="checkbook" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>Cheque{'\n'}Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridItem}>
                        <View style={styles.gridIcon}>
                            <Ionicons name="lock-closed-outline" size={22} color={Colors.primary} />
                        </View>
                        <Text style={styles.gridItemText}>e-Secure{'\n'}Lock</Text>
                    </TouchableOpacity>
                </View>

                {/* Bottom Spacing */}
                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Bottom Navigation with Curved Notch */}
            <View style={styles.bottomNavContainer}>
                {/* SVG Background with smooth curved notch */}
                <Svg
                    width={width}
                    height={115}
                    style={styles.bottomNavSvg}
                >
                    <Path
                        d={`M0,50 
                           L${width * 0.5 - 46},50 
                           C${width * 0.5 - 44},50 ${width * 0.5 - 44},0 ${width * 0.5},0 
                           C${width * 0.5 + 44},0 ${width * 0.5 + 44},50 ${width * 0.5 + 46},50 
                           L${width},50 
                           L${width},115 
                           L0,115 
                           Z`}
                        fill="#fff"
                    />
                </Svg>

                {/* Navigation Items */}
                <View style={styles.bottomNavItems}>
                    <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
                        <Ionicons name="home" size={24} color={Colors.primary} />
                        <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="cash-outline" size={24} color={Colors.textMuted} />
                        <Text style={styles.navText}>Loans</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItemCenter}>
                        <LinearGradient
                            colors={[Colors.primary, Colors.primaryDark]}
                            style={styles.scanQrButton}
                        >
                            <AnimatedQrIcon size={140} />
                        </LinearGradient>
                        <Text style={styles.navTextCenter}>Scan QR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="shield-checkmark-outline" size={24} color={Colors.textMuted} />
                        <Text style={styles.navText}>Insurance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="trending-up-outline" size={24} color={Colors.textMuted} />
                        <Text style={styles.navText}>Investments</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5ebf1',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 44,
        paddingHorizontal: Spacing.lg,
        paddingBottom: Spacing.base,
        backgroundColor: '#f5ebf1',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: BorderRadius.full,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Spacing.md,
        backgroundColor: '#F8D7E8',
        borderWidth: 2,
        borderColor: '#E8B4D4',
    },
    avatarText: {
        color: '#9B4DCA',
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.bold,
    },
    greetingText: {
        fontSize: FontSizes.lg,
        color: Colors.textPrimary,
        lineHeight: 24,
    },
    greetingName: {
        color: Colors.primary,
        fontWeight: FontWeights.bold,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    quickAccess: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: Spacing.lg,
        backgroundColor: '#f5ebf1',
    },
    quickAccessItem: {
        alignItems: 'center',
        flex: 1,
    },
    quickAccessImage: {
        width: 80,
        height: 80,
        marginBottom: Spacing.sm,
        resizeMode: 'contain',
    },
    quickAccessText: {
        fontSize: FontSizes.xs,
        color: Colors.textSecondary,
        textAlign: 'center',
    },
    mainTabs: {
        flexDirection: 'row',
        backgroundColor: '#f5ebf1',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 16,
        marginHorizontal: 0,
    },
    mainTab: {
        flex: 1,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    mainTabActive: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        position: 'relative',
        overflow: 'visible',
    },
    tabNotchLeft: {
        position: 'absolute',
        bottom: 0,
        left: -12,
        width: 12,
        height: 12,
    },
    tabNotchRight: {
        position: 'absolute',
        bottom: 0,
        right: -12,
        width: 12,
        height: 12,
    },
    mainTabText: {
        fontSize: FontSizes.base,
        fontWeight: FontWeights.medium,
        color: Colors.textSecondary,
    },
    mainTabTextActive: {
        color: '#592d82',
        fontWeight: FontWeights.bold,
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
    },
    accountCardsScroll: {
        marginTop: Spacing.sm,
    },
    accountCardsScrollContent: {
        paddingLeft: Spacing.base,
        paddingRight: Spacing.base,
    },
    accountCardWrapper: {
        width: width * 0.72,
        marginRight: Spacing.sm,
        borderRadius: 20,
    },
    featureCardWrapper: {
    },
    accountCard: {
        borderRadius: 20,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.lg,
        minHeight: 200,
        overflow: 'hidden',
    },
    featureCardLight: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.lg,
        minHeight: 200,
        borderWidth: 1,
        borderColor: '#eee',
    },
    featureCardPurple: {
        borderRadius: 20,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.lg,
        minHeight: 200,
    },
    cardDecorativeArc: {
        position: 'absolute',
        right: -80,
        top: -25,
        bottom: -25,
        justifyContent: 'center',
    },
    accountCardContent: {
        flex: 1,
        zIndex: 1,
    },
    accountCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.base,
    },
    accountLabelText: {
        fontSize: 13,
        color: Colors.textWhite,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    eyeIconBtn: {
        padding: 2,
    },
    eyeIconCircle: {
        width: 38,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    balanceLabel: {
        fontSize: 13,
        color: Colors.textWhite,
        opacity: 0.9,
        marginBottom: 4,
    },
    balanceAmount: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.textWhite,
        letterSpacing: 0.5,
        marginBottom: 20,
    },
    refreshBtnContainer: {
        position: 'absolute',
        right: 25,
        top: '55%',
        marginTop: -10, // Center vertically roughly
        zIndex: 2,
    },
    refreshBtnNew: {
        padding: 4,
    },
    // Removed old balanceRow and refreshBtn as they are no longer used in this layout
    balanceRow: {
        display: 'none',
    },
    refreshBtn: {
        display: 'none',
    },
    accountCardActions: {
        flexDirection: 'row',
        gap: 40,
        marginTop: Spacing.sm,
    },
    cardActionBtnNew: {
        alignItems: 'flex-start',
    },
    cardActionBtnTextNew: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.textWhite,
        marginBottom: 2,
    },
    cardActionUnderline: {
        height: 2,
        width: '100%',
        backgroundColor: Colors.textWhite,
        marginTop: 1,
    },
    // Light card styles for white cards
    lightCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.lg,
        minHeight: 200,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#f0e8f5',
    },
    lightCardTitle: {
        fontSize: 12,
        color: '#5C2D91',
        fontWeight: FontWeights.bold,
        letterSpacing: 0.5,
        marginBottom: Spacing.sm,
    },
    lightCardDescription: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
        marginBottom: Spacing.base,
        maxWidth: '80%',
    },
    lightCardBtn: {
        alignItems: 'flex-start',
        marginTop: 'auto',
    },
    lightCardBtnText: {
        fontSize: 14,
        fontWeight: FontWeights.semibold,
        color: '#5C2D91',
        marginBottom: 2,
    },
    lightCardUnderline: {
        height: 2,
        width: '100%',
        backgroundColor: '#5C2D91',
        marginTop: 1,
    },
    // Keep old styles for backward compatibility
    accountLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    refreshBtn: {
        width: 28,
        height: 28,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: BorderRadius.full,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardActionBtn: {
        flex: 1,
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.base,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: BorderRadius.md,
        alignItems: 'center',
    },
    cardActionBtnActive: {
        backgroundColor: Colors.white,
    },
    cardActionBtnText: {
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.medium,
        color: Colors.textWhite,
    },
    cardActionBtnTextActive: {
        color: Colors.primary,
    },
    cardsScroll: {
        marginBottom: Spacing.base,
    },
    cardsScrollContent: {
        paddingHorizontal: Spacing.base,
        gap: 12,
    },
    featureCard: {
        width: 160,
        borderRadius: BorderRadius.lg,
        padding: Spacing.base,
    },
    featureCardLight: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.borderLight,
    },
    featureCardTitle: {
        fontSize: FontSizes.xs,
        color: Colors.textWhite,
        opacity: 0.85,
        marginBottom: Spacing.sm,
    },
    featureCardTitleDark: {
        color: Colors.textSecondary,
    },
    featureCardContent: {
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.medium,
        color: Colors.textWhite,
        lineHeight: 18,
    },
    featureCardContentDark: {
        color: Colors.textPrimary,
    },
    featureCardBtn: {
        backgroundColor: Colors.primary,
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.md,
        borderRadius: BorderRadius.sm,
        alignSelf: 'flex-start',
        marginTop: Spacing.md,
    },
    featureCardBtnText: {
        fontSize: FontSizes.xs,
        fontWeight: FontWeights.semiBold,
        color: Colors.textWhite,
    },
    featureCardBtnDark: {
        backgroundColor: '#5C2D91',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Spacing.base,
        paddingTop: Spacing.lg,
        paddingBottom: Spacing.md,
    },
    sectionTitle: {
        fontSize: FontSizes.md,
        fontWeight: FontWeights.semiBold,
        color: Colors.textPrimary,
    },
    viewAllLink: {
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.medium,
        color: Colors.primary,
    },
    paymentTabs: {
        marginBottom: Spacing.base,
    },
    paymentTabsContent: {
        paddingHorizontal: Spacing.base,
        gap: 8,
    },
    paymentTab: {
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.lg,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.borderLight,
        borderRadius: BorderRadius.xxl,
    },
    paymentTabActive: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    paymentTabText: {
        fontSize: FontSizes.sm,
        color: Colors.textSecondary,
    },
    paymentTabTextActive: {
        color: Colors.textWhite,
    },
    upiSection: {
        backgroundColor: Colors.white,
        marginHorizontal: Spacing.base,
        borderRadius: BorderRadius.lg,
        padding: Spacing.base,
        marginBottom: Spacing.base,
    },
    upiIdRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.base,
    },
    upiId: {
        fontSize: FontSizes.sm,
        color: Colors.textSecondary,
    },
    upiIdValue: {
        fontWeight: FontWeights.semiBold,
        color: Colors.textPrimary,
    },
    upiLiteBtn: {
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.base,
        borderWidth: 1.5,
        borderColor: Colors.primary,
        borderRadius: BorderRadius.xxl,
    },
    upiLiteBtnText: {
        fontSize: FontSizes.sm,
        fontWeight: FontWeights.medium,
        color: Colors.primary,
    },
    upiPaymentsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    upiPaymentsTitle: {
        fontSize: FontSizes.base,
        fontWeight: FontWeights.medium,
        color: Colors.textPrimary,
    },
    iconGrid: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        marginHorizontal: Spacing.base,
        borderRadius: BorderRadius.lg,
        padding: Spacing.base,
        justifyContent: 'space-between',
    },
    gridItem: {
        alignItems: 'center',
        flex: 1,
    },
    gridIcon: {
        width: 44,
        height: 44,
        backgroundColor: Colors.lightGray,
        borderRadius: BorderRadius.md,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Spacing.sm,
    },
    gridItemText: {
        fontSize: FontSizes.xs,
        color: Colors.textSecondary,
        textAlign: 'center',
        lineHeight: 14,
    },
    creditScoreWidget: {
        marginHorizontal: Spacing.base,
        marginTop: Spacing.base,
        padding: Spacing.base,
        backgroundColor: '#FCE4EC',
        borderRadius: BorderRadius.lg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    creditScoreText: {
        fontSize: FontSizes.base,
        fontWeight: FontWeights.semiBold,
        color: Colors.textPrimary,
        lineHeight: 22,
    },
    creditScoreMeter: {},
    pfmWidget: {
        marginHorizontal: Spacing.base,
        marginTop: Spacing.base,
        marginBottom: Spacing.base,
        padding: Spacing.base,
        backgroundColor: Colors.primary,
        borderRadius: BorderRadius.lg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pfmText: {
        fontSize: FontSizes.base,
        fontWeight: FontWeights.semiBold,
        color: Colors.textWhite,
        lineHeight: 22,
    },
    promoContainer: {
        marginHorizontal: Spacing.base,
        marginTop: Spacing.base,
        borderRadius: BorderRadius.lg,
        overflow: 'hidden',
    },
    promoBanner: {
        width: '100%',
        height: 100,
        borderRadius: BorderRadius.lg,
    },
    bottomNavContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 115,
    },
    bottomNavSvg: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 10,
    },
    bottomNavItems: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingBottom: Spacing.lg,
        paddingTop: Spacing.sm,
    },
    navItem: {
        alignItems: 'center',
        paddingVertical: Spacing.xs,
    },
    navItemActive: {},
    navText: {
        fontSize: FontSizes.xs,
        color: Colors.textMuted,
        marginTop: 4,
    },
    navTextActive: {
        color: Colors.primary,
    },
    navItemCenter: {
        alignItems: 'center',
        marginTop: -62,
    },
    scanQrButton: {
        width: 68,
        height: 68,
        borderRadius: BorderRadius.full,
        alignItems: 'center',
        justifyContent: 'center',
        ...Shadows.purple,
        overflow: 'hidden',
    },
    qrLottie: {
        width: 44,
        height: 44,
    },
    navTextCenter: {
        fontSize: FontSizes.xs,
        color: Colors.textMuted,
        marginTop: 4,
    },
});

export default HomeScreen;
