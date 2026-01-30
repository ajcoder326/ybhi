import 'package:flutter/material.dart';
import '../constants/theme.dart';

class AccountSummaryScreen extends StatelessWidget {
  const AccountSummaryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: Column(
          children: [
            // Header
            Container(
              padding: const EdgeInsets.all(AppSpacing.base),
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: [AppColors.primary, AppColors.primaryDark],
                ),
              ),
              child: Row(
                children: [
                  IconButton(
                    icon: const Icon(Icons.arrow_back, color: AppColors.white),
                    onPressed: () => Navigator.pop(context),
                  ),
                  const Text(
                    'Accounts',
                    style: TextStyle(
                      fontSize: AppFontSizes.lg,
                      fontWeight: FontWeight.w600,
                      color: AppColors.white,
                    ),
                  ),
                ],
              ),
            ),
            
            Expanded(
              child: SingleChildScrollView(
                child: Column(
                  children: [
                    // Account Card
                    Container(
                      margin: const EdgeInsets.all(AppSpacing.base),
                      padding: const EdgeInsets.all(AppSpacing.lg),
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(
                          colors: [Color(0xFF6B3FA0), Color(0xFF9B6BC3), Color(0xFF7B4AAB)],
                        ),
                        borderRadius: BorderRadius.circular(AppBorderRadius.xl),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            'SAVINGS A/C',
                            style: TextStyle(
                              fontSize: AppFontSizes.xs,
                              color: AppColors.white,
                              letterSpacing: 0.5,
                            ),
                          ),
                          const SizedBox(height: AppSpacing.md),
                          Row(
                            children: [
                              const Text(
                                'ACCOUNT NUMBER',
                                style: TextStyle(
                                  fontSize: AppFontSizes.xs,
                                  color: AppColors.white,
                                ),
                              ),
                              const SizedBox(width: 8),
                              const Icon(Icons.visibility_off, size: 16, color: AppColors.white),
                            ],
                          ),
                          const SizedBox(height: 4),
                          const Text(
                            '44723514860',
                            style: TextStyle(
                              fontSize: AppFontSizes.lg,
                              fontWeight: FontWeight.w600,
                              color: AppColors.white,
                            ),
                          ),
                          const SizedBox(height: AppSpacing.md),
                          const Text(
                            'AVAILABLE BALANCE',
                            style: TextStyle(
                              fontSize: AppFontSizes.xs,
                              color: AppColors.white,
                            ),
                          ),
                          const SizedBox(height: 4),
                          const Text(
                            '₹75.10',
                            style: TextStyle(
                              fontSize: AppFontSizes.xxxl,
                              fontWeight: FontWeight.bold,
                              color: AppColors.white,
                            ),
                          ),
                          const SizedBox(height: AppSpacing.lg),
                          Row(
                            children: [
                              Expanded(
                                child: ElevatedButton(
                                  onPressed: () {},
                                  style: ElevatedButton.styleFrom(
                                    backgroundColor: Colors.white.withOpacity(0.2),
                                    foregroundColor: AppColors.white,
                                    elevation: 0,
                                  ),
                                  child: const Text('Manage Account'),
                                ),
                              ),
                              const SizedBox(width: 12),
                              Expanded(
                                child: OutlinedButton(
                                  onPressed: () {},
                                  style: OutlinedButton.styleFrom(
                                    foregroundColor: AppColors.white,
                                    side: const BorderSide(color: AppColors.white),
                                  ),
                                  child: const Text('View Debit Card'),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                    
                    // Summary Section
                    Container(
                      margin: const EdgeInsets.symmetric(horizontal: AppSpacing.base),
                      decoration: BoxDecoration(
                        color: AppColors.white,
                        borderRadius: BorderRadius.circular(AppBorderRadius.lg),
                      ),
                      child: Column(
                        children: [
                          Container(
                            padding: const EdgeInsets.all(AppSpacing.base),
                            decoration: const BoxDecoration(
                              border: Border(
                                bottom: BorderSide(color: AppColors.borderLight),
                              ),
                            ),
                            child: const Row(
                              children: [
                                Text(
                                  'Summary',
                                  style: TextStyle(
                                    fontSize: AppFontSizes.md,
                                    fontWeight: FontWeight.w600,
                                    color: AppColors.textPrimary,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          _buildSummaryRow('Available Balance', '₹75.10'),
                          _buildSummaryRow('Hold/Lien Amount', '₹0.00'),
                          _buildSummaryRow('Uncleared Balance', '₹0.00'),
                          _buildSummaryRow('MOD Balance', '₹0.00'),
                        ],
                      ),
                    ),
                    
                    const SizedBox(height: AppSpacing.base),
                    
                    // Account Details
                    Container(
                      margin: const EdgeInsets.symmetric(horizontal: AppSpacing.base),
                      decoration: BoxDecoration(
                        color: AppColors.white,
                        borderRadius: BorderRadius.circular(AppBorderRadius.lg),
                      ),
                      child: Column(
                        children: [
                          _buildDetailRow('Account Description', 'LOTUS SAVING BANK-ADHAR-CHQ'),
                          _buildDetailRow('Mode of Operation', 'Single'),
                          _buildDetailRow('Currency', 'Rupees'),
                          _buildDetailRow('Rate of Interest', '2.5%'),
                          _buildDetailRowWithLink('Nominee(s)', 'View Details'),
                        ],
                      ),
                    ),
                    
                    const SizedBox(height: AppSpacing.xxl),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSummaryRow(String label, String value) {
    return Container(
      padding: const EdgeInsets.all(AppSpacing.base),
      decoration: const BoxDecoration(
        border: Border(
          bottom: BorderSide(color: AppColors.borderLight),
        ),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            label,
            style: const TextStyle(
              fontSize: AppFontSizes.sm,
              color: AppColors.textSecondary,
            ),
          ),
          Text(
            value,
            style: const TextStyle(
              fontSize: AppFontSizes.sm,
              fontWeight: FontWeight.w500,
              color: AppColors.textPrimary,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDetailRow(String label, String value) {
    return Container(
      padding: const EdgeInsets.all(AppSpacing.base),
      decoration: const BoxDecoration(
        border: Border(
          bottom: BorderSide(color: AppColors.borderLight),
        ),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            label,
            style: const TextStyle(
              fontSize: AppFontSizes.sm,
              color: AppColors.textSecondary,
            ),
          ),
          Expanded(
            child: Text(
              value,
              textAlign: TextAlign.right,
              style: const TextStyle(
                fontSize: AppFontSizes.sm,
                fontWeight: FontWeight.w500,
                color: AppColors.textPrimary,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDetailRowWithLink(String label, String linkText) {
    return Container(
      padding: const EdgeInsets.all(AppSpacing.base),
      decoration: const BoxDecoration(
        border: Border(
          bottom: BorderSide(color: AppColors.borderLight),
        ),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            label,
            style: const TextStyle(
              fontSize: AppFontSizes.sm,
              color: AppColors.textSecondary,
            ),
          ),
          Text(
            linkText,
            style: const TextStyle(
              fontSize: AppFontSizes.sm,
              fontWeight: FontWeight.w500,
              color: AppColors.primary,
            ),
          ),
        ],
      ),
    );
  }
}
