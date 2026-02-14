import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:lottie/lottie.dart';
import '../constants/theme.dart';
import '../components/wave_curve.dart';
import '../components/bottom_nav_curve.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  String loginType = 'mpin'; // 'mpin' or 'username'
  final List<TextEditingController> _mpinControllers = List.generate(6, (_) => TextEditingController());
  final List<FocusNode> _mpinFocusNodes = List.generate(6, (_) => FocusNode());

  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool _showPassword = false;
  bool _showHeader = true;

  @override
  void dispose() {
    for (var controller in _mpinControllers) {
      controller.dispose();
    }
    for (var node in _mpinFocusNodes) {
      node.dispose();
    }
    _usernameController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  void _handleMpinChange(String value, int index) {
    if (value.length == 1) {
      if (index < 5) {
        _mpinFocusNodes[index + 1].requestFocus();
      } else {
        _mpinFocusNodes[index].unfocus();
        // Handle login submission
      }
    } else if (value.isEmpty && index > 0) {
      _mpinFocusNodes[index - 1].requestFocus();
    }
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final padding = MediaQuery.of(context).padding;

    return Scaffold(
      backgroundColor: const Color(0xFFbfc7d1),
      body: Stack(
        children: [
          // Purple Background Container
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            child: Column(
              children: [
                Container(
                  width: double.infinity,
                  height: 300, // Approximate height for the gradient part
                  decoration: const BoxDecoration(
                    gradient: LinearGradient(
                      colors: [AppColors.primary, AppColors.primaryDark],
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                    ),
                  ),
                  child: Stack(
                    children: [
                      // Decorative Curves
                      Positioned(
                        top: -30,
                        left: 0,
                        child: SvgPicture.asset(
                          'assets/icons/purple_bg_curves.svg',
                          width: size.width,
                          height: 300,
                          fit: BoxFit.cover,
                        ),
                      ),
                      // Header Content
                      Padding(
                        padding: EdgeInsets.only(top: padding.top + 20, left: 20, right: 20),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: const [
                                Text(
                                  'Hello',
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 22,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                SizedBox(height: 8),
                                Text(
                                  'Rahul',
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 22,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.end,
                              children: [
                                RichText(
                                  text: const TextSpan(
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 18,
                                      fontWeight: FontWeight.bold,
                                    ),
                                    children: [
                                      TextSpan(text: 'Yono'),
                                      TextSpan(
                                        text: '●',
                                        style: TextStyle(color: Color(0xFF00C2FF)),
                                      ),
                                      TextSpan(text: 'SBI'),
                                    ],
                                  ),
                                ),
                                const SizedBox(height: 6),
                                Row(
                                  children: const [
                                    Icon(Icons.location_on_outlined, color: Colors.white, size: 14),
                                    SizedBox(width: 4),
                                    Text(
                                      'Locate Us',
                                      style: TextStyle(color: Colors.white, fontSize: 12),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const WaveCurve(height: 90),
              ],
            ),
          ),

          // Main Content ScrollView
          Positioned.fill(
            child: SingleChildScrollView(
              padding: const EdgeInsets.only(bottom: 160), // Space for bottom nav
              child: Column(
                children: [
                  const SizedBox(height: 150), // Initial spacing

                  // Login Card
                  Container(
                    margin: const EdgeInsets.symmetric(horizontal: 16),
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.95),
                      borderRadius: BorderRadius.circular(16),
                      boxShadow: [AppShadows.md],
                    ),
                    child: Column(
                      children: [
                        // Card Header
                        if (_showHeader)
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                            decoration: const BoxDecoration(
                              color: Color(0xFFFAF5FF),
                              borderRadius: BorderRadius.only(
                                topLeft: Radius.circular(16),
                                topRight: Radius.circular(16),
                              ),
                            ),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                const Text(
                                  'View Balance',
                                  style: TextStyle(
                                    fontSize: 16,
                                    fontWeight: FontWeight.w600,
                                    color: Color(0xFF333333),
                                  ),
                                ),
                                GestureDetector(
                                  onTap: () => setState(() => _showHeader = false),
                                  child: const Icon(Icons.close, size: 22, color: Color(0xFF666666)),
                                ),
                              ],
                            ),
                          ),

                        Padding(
                          padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              if (loginType == 'mpin') ...[
                                const SizedBox(height: 16),
                                const Text(
                                  'Login using MPIN',
                                  style: TextStyle(
                                    fontSize: 14,
                                    fontWeight: FontWeight.w500,
                                    color: Color(0xFF333333),
                                  ),
                                ),
                                const SizedBox(height: 16),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: List.generate(6, (index) {
                                    return SizedBox(
                                      width: 40,
                                      height: 40,
                                      child: TextField(
                                        controller: _mpinControllers[index],
                                        focusNode: _mpinFocusNodes[index],
                                        keyboardType: TextInputType.number,
                                        maxLength: 1,
                                        textAlign: TextAlign.center,
                                        obscureText: true,
                                        decoration: InputDecoration(
                                          counterText: "",
                                          contentPadding: EdgeInsets.zero,
                                          border: OutlineInputBorder(
                                            borderRadius: BorderRadius.circular(6),
                                            borderSide: const BorderSide(color: Color(0xFF9B7FB8)),
                                          ),
                                          enabledBorder: OutlineInputBorder(
                                            borderRadius: BorderRadius.circular(6),
                                            borderSide: const BorderSide(color: Color(0xFF9B7FB8)),
                                          ),
                                        ),
                                        style: const TextStyle(
                                          fontSize: 22,
                                          fontWeight: FontWeight.bold,
                                        ),
                                        onChanged: (val) => _handleMpinChange(val, index),
                                      ),
                                    );
                                  }),
                                ),
                                const SizedBox(height: 10),
                                Align(
                                  alignment: Alignment.centerRight,
                                  child: Text(
                                    'Forgot MPIN?',
                                    style: TextStyle(
                                      color: AppColors.primary,
                                      fontSize: 13,
                                      fontWeight: FontWeight.w600,
                                      decoration: TextDecoration.underline,
                                    ),
                                  ),
                                ),
                              ],

                              const SizedBox(height: 18),
                              Row(
                                children: [
                                  Expanded(child: Container(height: 1, color: AppColors.primary.withOpacity(0.3))),
                                  const Padding(
                                    padding: EdgeInsets.symmetric(horizontal: 12),
                                    child: Text(
                                      'OR',
                                      style: TextStyle(
                                        color: AppColors.primary,
                                        fontWeight: FontWeight.w600,
                                        fontSize: 14,
                                      ),
                                    ),
                                  ),
                                  Expanded(child: Container(height: 1, color: AppColors.primary.withOpacity(0.3))),
                                ],
                              ),
                              const SizedBox(height: 18),

                              if (loginType == 'mpin')
                                Center(
                                  child: GestureDetector(
                                    onTap: () => setState(() => loginType = 'username'),
                                    child: RichText(
                                      text: const TextSpan(
                                        style: TextStyle(color: AppColors.primary, fontSize: 14),
                                        children: [
                                          TextSpan(text: 'Login with ', style: TextStyle(fontWeight: FontWeight.w500)),
                                          TextSpan(text: 'Username', style: TextStyle(fontWeight: FontWeight.bold, decoration: TextDecoration.underline)),
                                        ],
                                      ),
                                    ),
                                  ),
                                ),

                              if (loginType == 'username') ...[
                                const Text(
                                  'Login using Username',
                                  style: TextStyle(
                                    fontSize: 14,
                                    fontWeight: FontWeight.w500,
                                    color: Color(0xFF333333),
                                  ),
                                ),
                                const SizedBox(height: 16),
                                TextField(
                                  controller: _usernameController,
                                  decoration: InputDecoration(
                                    hintText: 'Username',
                                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
                                    contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                                  ),
                                ),
                                const SizedBox(height: 12),
                                TextField(
                                  controller: _passwordController,
                                  obscureText: !_showPassword,
                                  decoration: InputDecoration(
                                    hintText: 'Password',
                                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(8)),
                                    contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                                    suffixIcon: IconButton(
                                      icon: Icon(
                                        _showPassword ? Icons.visibility_off : Icons.visibility,
                                        color: Colors.grey,
                                      ),
                                      onPressed: () => setState(() => _showPassword = !_showPassword),
                                    ),
                                  ),
                                ),
                                const SizedBox(height: 10),
                                Align(
                                  alignment: Alignment.centerRight,
                                  child: Text(
                                    'Forgot Username or Password?',
                                    style: TextStyle(
                                      color: AppColors.primary,
                                      fontSize: 13,
                                      fontWeight: FontWeight.w600,
                                      decoration: TextDecoration.underline,
                                    ),
                                  ),
                                ),
                                const SizedBox(height: 16),
                                SizedBox(
                                  width: double.infinity,
                                  child: ElevatedButton(
                                    onPressed: (_usernameController.text.isNotEmpty && _passwordController.text.isNotEmpty)
                                      ? () {} : null,
                                    style: ElevatedButton.styleFrom(
                                      backgroundColor: AppColors.primary,
                                      padding: const EdgeInsets.symmetric(vertical: 14),
                                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                                      disabledBackgroundColor: const Color(0xFFE0E0E0),
                                    ),
                                    child: const Text(
                                      'Login',
                                      style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white), // Fixed color for active state
                                    ),
                                  ),
                                ),
                                const SizedBox(height: 15),
                                Center(
                                  child: GestureDetector(
                                    onTap: () => setState(() => loginType = 'mpin'),
                                    child: RichText(
                                      text: const TextSpan(
                                        style: TextStyle(color: AppColors.primary, fontSize: 13),
                                        children: [
                                          TextSpan(text: 'Login with '),
                                          TextSpan(text: 'MPIN', style: TextStyle(fontWeight: FontWeight.bold, decoration: TextDecoration.underline)),
                                        ],
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),

                  // View Balance Button (Outside Card)
                  Container(
                    margin: const EdgeInsets.only(top: 16, left: 36, right: 36),
                    width: double.infinity,
                    child: ElevatedButton(
                      onPressed: () => setState(() => _showHeader = true),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppColors.primary,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                        elevation: 5,
                      ),
                      child: const Text(
                        'View Balance',
                        style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600, color: Colors.white),
                      ),
                    ),
                  ),

                  // Tabs
                  Container(
                    margin: const EdgeInsets.only(top: 20, left: 16, right: 16),
                    child: Row(
                      children: [
                        Expanded(
                          child: Container(
                            decoration: const BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.only(topLeft: Radius.circular(16), topRight: Radius.circular(16)),
                            ),
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            child: Column(
                              children: [
                                const Text(
                                  'Transact',
                                  style: TextStyle(
                                    color: AppColors.primary,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 15,
                                  ),
                                ),
                                const SizedBox(height: 6),
                                Container(
                                  width: 28,
                                  height: 3,
                                  decoration: BoxDecoration(
                                    color: AppColors.primary,
                                    borderRadius: BorderRadius.circular(2),
                                  ),
                                )
                              ],
                            ),
                          ),
                        ),
                        Expanded(
                          child: Container(
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            child: const Center(
                              child: Text(
                                'Calculators',
                                style: TextStyle(
                                  color: Color(0xFF888888),
                                  fontWeight: FontWeight.w500,
                                  fontSize: 15,
                                ),
                              ),
                            ),
                          ),
                        ),
                        Expanded(
                          child: Container(
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            child: const Center(
                              child: Text(
                                'Offers',
                                style: TextStyle(
                                  color: Color(0xFF888888),
                                  fontWeight: FontWeight.w500,
                                  fontSize: 15,
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),

                  // Transact Card (Icons)
                  Container(
                    color: Colors.white,
                    padding: const EdgeInsets.fromLTRB(8, 20, 8, 24),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        _buildQuickAction('Pay to\nMobile or\nContact', 'pay_to_mobile.svg'),
                        _buildQuickAction('Quick\nTransfer', 'quick_transfer.svg'),
                        _buildQuickAction('Send\nMoney', 'send_money.svg'),
                        _buildQuickAction('Bill\nPayments', 'bill_payments.svg'),
                      ],
                    ),
                  ),

                  // Banner
                  Container(
                    margin: const EdgeInsets.only(top: 16, left: 16, right: 16),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12),
                      color: Colors.white,
                      boxShadow: [AppShadows.sm],
                    ),
                    clipBehavior: Clip.antiAlias,
                    child: Image.asset(
                      'assets/images/nps_banner.png',
                      height: 260,
                      width: double.infinity,
                      fit: BoxFit.cover,
                    ),
                  ),
                ],
              ),
            ),
          ),

          // Bottom Navigation
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            height: 150,
            child: Stack(
              children: [
                Positioned(
                  bottom: 30,
                  left: 0,
                  right: 0,
                  height: 150,
                  child: const BottomNavCurve(height: 150),
                ),
                Positioned(
                  bottom: 30, // Adjust based on padding
                  left: 0,
                  right: 0,
                  child: Container(
                    height: 80, // Height of the items area
                    padding: const EdgeInsets.only(bottom: 10),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        _buildNavItem('Yono Cash', iconName: 'yono_cash.svg'),
                        _buildNavItem('Contact Us', iconName: 'contact_us.svg'),
                        const SizedBox(width: 60), // Space for center button
                        _buildNavItem('Products', iconName: 'products.svg'),
                        _buildNavItem('More', iconData: Icons.more_horiz),
                      ],
                    ),
                  ),
                ),
                Positioned(
                  bottom: 60, // Peak position
                  left: 0,
                  right: 0,
                  child: Center(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Container(
                          width: 64,
                          height: 64,
                          decoration: BoxDecoration(
                            color: AppColors.primary,
                            borderRadius: BorderRadius.circular(32),
                          ),
                          child: Center(
                            child: Lottie.asset(
                              'assets/animations/qr-scanner.json',
                              width: 40,
                              height: 40,
                              fit: BoxFit.contain,
                            ),
                          ),
                        ),
                        const SizedBox(height: 4),
                        const Text(
                          'Scan QR',
                          style: TextStyle(
                            color: Color(0xFF666666),
                            fontSize: 9,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildQuickAction(String label, String iconName) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: 50,
          height: 50,
          alignment: Alignment.center,
          margin: const EdgeInsets.only(bottom: 4),
          child: SvgPicture.asset(
            'assets/icons/$iconName',
            width: 40,
            height: 40,
          ),
        ),
        Text(
          label,
          textAlign: TextAlign.center,
          style: const TextStyle(
            fontSize: 11,
            color: Color(0xFF444444),
            height: 1.2,
          ),
        ),
      ],
    );
  }

  Widget _buildNavItem(String label, {String? iconName, IconData? iconData}) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        if (iconName != null)
          SvgPicture.asset(
            'assets/icons/$iconName',
            width: 22,
            height: 22,
            colorFilter: const ColorFilter.mode(Color(0xFF666666), BlendMode.srcIn),
          )
        else if (iconData != null)
          Icon(iconData, size: 22, color: const Color(0xFF666666)),
        const SizedBox(height: 4),
        Text(
          label,
          style: const TextStyle(
            color: Color(0xFF666666),
            fontSize: 9,
            fontWeight: FontWeight.w500,
          ),
        ),
      ],
    );
  }
}
