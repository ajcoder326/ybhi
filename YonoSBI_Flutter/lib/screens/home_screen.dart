import 'package:flutter/material.dart';
import '../constants/theme.dart';
import '../widgets/account_card.dart';
import '../widgets/icon_grid.dart';
import 'account_summary_screen.dart';
import 'transactions_screen.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String _activeTab = 'Banking';
  String _activePaymentTab = 'UPI';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: Column(
          children: [
            // Header
            _buildHeader(),
            
            // Quick Access Circles
            _buildQuickAccess(),
            
            // Main Tabs
            _buildMainTabs(),
            
            // Content
            Expanded(
              child: SingleChildScrollView(
                child: Column(
                  children: [
                    // Account Cards
                    _buildAccountCards(),
                    
                    // Payments & Transfers
                    _buildPaymentsSection(),
                    
                    // Deposits
                    _buildDepositsSection(),
                    
                    // Home Loan Banner
                    _buildPromoBanner(),
                    
                    // Loans
                    _buildLoansSection(),
                    
                    // Credit Score Widget
                    _buildCreditScoreWidget(),
                    
                    // Investments
                    _buildInvestmentsSection(),
                    
                    const SizedBox(height: 100),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildHeader() {
    return Container(
      padding: const EdgeInsets.all(AppSpacing.base),
      color: AppColors.white,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: [
              Container(
                width: 40,
                height: 40,
                decoration: BoxDecoration(
                  color: AppColors.primary,
                  borderRadius: BorderRadius.circular(AppBorderRadius.full),
                ),
                child: const Center(
                  child: Text(
                    'RK',
                    style: TextStyle(
                      color: AppColors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: AppFontSizes.sm,
                    ),
                  ),
                ),
              ),
              const SizedBox(width: AppSpacing.md),
              const Text.rich(
                TextSpan(
                  text: 'Hello ',
                  style: TextStyle(
                    fontSize: AppFontSizes.base,
                    color: AppColors.textSecondary,
                  ),
                  children: [
                    TextSpan(
                      text: 'Rakesh!',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: AppColors.textPrimary,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          Row(
            children: [
              IconButton(
                icon: const Icon(Icons.search),
                onPressed: () {},
                color: AppColors.textSecondary,
              ),
              IconButton(
                icon: const Icon(Icons.notifications_outlined),
                onPressed: () {},
                color: AppColors.textSecondary,
              ),
              IconButton(
                icon: const Icon(Icons.logout),
                onPressed: () {},
                color: AppColors.textSecondary,
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildQuickAccess() {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: AppSpacing.base),
      color: AppColors.white,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          _buildQuickAccessItem('Welcome to\nYono', Icons.home),
          _buildQuickAccessItem('Security', Icons.security),
          _buildQuickAccessItem('Explore', Icons.explore),
          _buildQuickAccessItem('Offers', Icons.local_offer),
        ],
      ),
    );
  }

  Widget _buildQuickAccessItem(String label, IconData icon) {
    return Column(
      children: [
        Container(
          width: 60,
          height: 60,
          decoration: BoxDecoration(
            gradient: const LinearGradient(
              colors: [AppColors.primary, AppColors.primaryLight],
            ),
            borderRadius: BorderRadius.circular(AppBorderRadius.full),
          ),
          child: Icon(icon, color: AppColors.white, size: 28),
        ),
        const SizedBox(height: 8),
        Text(
          label,
          textAlign: TextAlign.center,
          style: const TextStyle(
            fontSize: AppFontSizes.xs,
            color: AppColors.textSecondary,
          ),
        ),
      ],
    );
  }

  Widget _buildMainTabs() {
    return Container(
      color: AppColors.white,
      child: Row(
        children: ['Banking', 'Lifestyle', 'Rewards'].map((tab) {
          final isActive = _activeTab == tab;
          return Expanded(
            child: GestureDetector(
              onTap: () => setState(() => _activeTab = tab),
              child: Container(
                padding: const EdgeInsets.symmetric(vertical: AppSpacing.base),
                decoration: BoxDecoration(
                  color: isActive ? AppColors.white : Colors.transparent,
                  border: Border(
                    bottom: BorderSide(
                      color: isActive ? AppColors.primary : Colors.transparent,
                      width: 3,
                    ),
                  ),
                ),
                child: Text(
                  tab,
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: AppFontSizes.base,
                    fontWeight: isActive ? FontWeight.bold : FontWeight.normal,
                    color: isActive ? AppColors.primary : AppColors.textSecondary,
                  ),
                ),
              ),
            ),
          );
        }).toList(),
      ),
    );
  }

  Widget _buildAccountCards() {
    return SizedBox(
      height: 220,
      child: ListView(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.all(AppSpacing.base),
        children: [
          AccountCard(
            title: 'TRANSACTION ACCOUNTS (XX)',
            subtitle: 'Combined Balance',
            amount: '₹XXXX.xx',
            gradient: const LinearGradient(
              colors: [Color(0xFFE11D8C), Color(0xFFC0126A), Color(0xFF8B0A4A)],
            ),
            onViewAccounts: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const AccountSummaryScreen()),
              );
            },
            onTransactions: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const TransactionsScreen()),
              );
            },
          ),
          AccountCard(
            title: 'PERSONAL FINANCE MANAGER',
            subtitle: 'One dashboard, all your finances',
            amount: '',
            isLight: true,
            buttonText: 'Start Now',
            onViewAccounts: () {},
          ),
          AccountCard(
            title: 'INVESTMENTS',
            subtitle: 'Ready to start investing?',
            amount: '',
            isLight: true,
            buttonText: 'Invest Now',
            onViewAccounts: () {},
          ),
          AccountCard(
            title: 'GENERAL INSURANCE',
            subtitle: 'Tap on the Eye Icon above',
            amount: 'To View your Policy details',
            gradient: const LinearGradient(
              colors: [Color(0xFF5C2D91), Color(0xFF7B3FA0), Color(0xFF9B5FC0)],
            ),
            buttonText: 'Buy New',
            onViewAccounts: () {},
          ),
          AccountCard(
            title: 'LIFE INSURANCE',
            subtitle: 'Tap on the Eye Icon above',
            amount: 'To View your Policy details',
            gradient: const LinearGradient(
              colors: [Color(0xFF5C2D91), Color(0xFF7B3FA0), Color(0xFF9B5FC0)],
            ),
            buttonText: 'Buy New',
            onViewAccounts: () {},
          ),
        ],
      ),
    );
  }

  Widget _buildPaymentsSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.all(AppSpacing.base),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                'Payments & Transfers',
                style: TextStyle(
                  fontSize: AppFontSizes.lg,
                  fontWeight: FontWeight.bold,
                  color: AppColors.textPrimary,
                ),
              ),
            ],
          ),
        ),
        
        // Payment Tabs
        SizedBox(
          height: 40,
          child: ListView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(horizontal: AppSpacing.base),
            children: ['UPI', 'Fund Transfer', 'Bills', 'Yono Cash'].map((tab) {
              final isActive = _activePaymentTab == tab;
              return Padding(
                padding: const EdgeInsets.only(right: AppSpacing.md),
                child: GestureDetector(
                  onTap: () => setState(() => _activePaymentTab = tab),
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: AppSpacing.base,
                      vertical: AppSpacing.sm,
                    ),
                    decoration: BoxDecoration(
                      color: isActive ? AppColors.primary : AppColors.white,
                      borderRadius: BorderRadius.circular(AppBorderRadius.xxl),
                      border: Border.all(
                        color: isActive ? AppColors.primary : AppColors.borderLight,
                      ),
                    ),
                    child: Text(
                      tab,
                      style: TextStyle(
                        fontSize: AppFontSizes.sm,
                        fontWeight: isActive ? FontWeight.w600 : FontWeight.normal,
                        color: isActive ? AppColors.white : AppColors.textSecondary,
                      ),
                    ),
                  ),
                ),
              );
            }).toList(),
          ),
        ),
        
        const SizedBox(height: AppSpacing.base),
        
        // UPI Section
        Container(
          margin: const EdgeInsets.symmetric(horizontal: AppSpacing.base),
          padding: const EdgeInsets.all(AppSpacing.base),
          decoration: BoxDecoration(
            color: AppColors.white,
            borderRadius: BorderRadius.circular(AppBorderRadius.lg),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text.rich(
                    TextSpan(
                      text: 'UPI: ',
                      style: TextStyle(
                        fontSize: AppFontSizes.sm,
                        color: AppColors.textSecondary,
                      ),
                      children: [
                        TextSpan(
                          text: 'amishasriv... @sbi',
                          style: TextStyle(
                            fontWeight: FontWeight.w600,
                            color: AppColors.textPrimary,
                          ),
                        ),
                      ],
                    ),
                  ),
                  TextButton(
                    onPressed: () {},
                    child: const Text(
                      'Enable UPI LITE',
                      style: TextStyle(fontSize: AppFontSizes.xs),
                    ),
                  ),
                ],
              ),
              
              const SizedBox(height: AppSpacing.md),
              
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    'UPI Payments',
                    style: TextStyle(
                      fontSize: AppFontSizes.md,
                      fontWeight: FontWeight.bold,
                      color: AppColors.textPrimary,
                    ),
                  ),
                  TextButton(
                    onPressed: () {},
                    child: const Text('View All'),
                  ),
                ],
              ),
              
              const SizedBox(height: AppSpacing.md),
              
              IconGrid(
                items: const [
                  IconGridItem(
                    icon: Icons.phone_android,
                    label: 'Pay to\nMobile or\nContact',
                  ),
                  IconGridItem(
                    icon: Icons.sync,
                    label: 'Quick\nTransfer',
                  ),
                  IconGridItem(
                    icon: Icons.send,
                    label: 'Send Money',
                  ),
                  IconGridItem(
                    icon: Icons.receipt,
                    label: 'Bill\nPayments',
                  ),
                ],
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildDepositsSection() {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(AppSpacing.base),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                'Deposits',
                style: TextStyle(
                  fontSize: AppFontSizes.lg,
                  fontWeight: FontWeight.bold,
                  color: AppColors.textPrimary,
                ),
              ),
              TextButton(
                onPressed: () {},
                child: const Text('View All'),
              ),
            ],
          ),
        ),
        
        Container(
          margin: const EdgeInsets.symmetric(horizontal: AppSpacing.base),
          padding: const EdgeInsets.all(AppSpacing.base),
          decoration: BoxDecoration(
            color: AppColors.white,
            borderRadius: BorderRadius.circular(AppBorderRadius.lg),
          ),
          child: const IconGrid(
            items: [
              IconGridItem(icon: Icons.access_time, label: 'Fixed\nDeposit'),
              IconGridItem(icon: Icons.sync, label: 'Recurring\nDeposit'),
              IconGridItem(icon: Icons.calendar_today, label: 'Annuity\nDeposit'),
              IconGridItem(icon: Icons.flash_on, label: 'Auto Sweep'),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildPromoBanner() {
    return Container(
      margin: const EdgeInsets.all(AppSpacing.base),
      height: 120,
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [AppColors.primary, AppColors.primaryLight],
        ),
        borderRadius: BorderRadius.circular(AppBorderRadius.lg),
      ),
      child: const Center(
        child: Text(
          'Home Loan Banner',
          style: TextStyle(
            color: AppColors.white,
            fontSize: AppFontSizes.lg,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    );
  }

  Widget _buildLoansSection() {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(AppSpacing.base),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                'Loans',
                style: TextStyle(
                  fontSize: AppFontSizes.lg,
                  fontWeight: FontWeight.bold,
                  color: AppColors.textPrimary,
                ),
              ),
              TextButton(
                onPressed: () {},
                child: const Text('View All'),
              ),
            ],
          ),
        ),
        
        Container(
          margin: const EdgeInsets.symmetric(horizontal: AppSpacing.base),
          padding: const EdgeInsets.all(AppSpacing.base),
          decoration: BoxDecoration(
            color: AppColors.white,
            borderRadius: BorderRadius.circular(AppBorderRadius.lg),
          ),
          child: const IconGrid(
            items: [
              IconGridItem(icon: Icons.person, label: 'Personal\nLoan'),
              IconGridItem(icon: Icons.trending_up, label: 'Loan Against\nMutual Fund'),
              IconGridItem(icon: Icons.diamond, label: 'Gold Loan'),
              IconGridItem(icon: Icons.home, label: 'Home Loan'),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildCreditScoreWidget() {
    return Container(
      margin: const EdgeInsets.all(AppSpacing.base),
      padding: const EdgeInsets.all(AppSpacing.base),
      decoration: BoxDecoration(
        color: AppColors.white,
        borderRadius: BorderRadius.circular(AppBorderRadius.lg),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const Text(
            'What is your\nCredit Score >',
            style: TextStyle(
              fontSize: AppFontSizes.md,
              fontWeight: FontWeight.w600,
              color: AppColors.textPrimary,
            ),
          ),
          const Icon(
            Icons.speed,
            size: 40,
            color: AppColors.primary,
          ),
        ],
      ),
    );
  }

  Widget _buildInvestmentsSection() {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(AppSpacing.base),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                'Investments',
                style: TextStyle(
                  fontSize: AppFontSizes.lg,
                  fontWeight: FontWeight.bold,
                  color: AppColors.textPrimary,
                ),
              ),
              TextButton(
                onPressed: () {},
                child: const Text('View All'),
              ),
            ],
          ),
        ),
        
        Container(
          margin: const EdgeInsets.symmetric(horizontal: AppSpacing.base),
          padding: const EdgeInsets.all(AppSpacing.base),
          decoration: BoxDecoration(
            color: AppColors.white,
            borderRadius: BorderRadius.circular(AppBorderRadius.lg),
          ),
          child: const IconGrid(
            items: [
              IconGridItem(icon: Icons.show_chart, label: 'Mutual\nFunds'),
              IconGridItem(icon: Icons.account_balance, label: 'Bonds'),
              IconGridItem(icon: Icons.trending_up, label: 'Stocks'),
              IconGridItem(icon: Icons.diamond, label: 'Gold'),
            ],
          ),
        ),
      ],
    );
  }
}
