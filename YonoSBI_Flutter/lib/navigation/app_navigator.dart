import 'package:flutter/material.dart';
import '../screens/login_screen.dart';
import '../screens/home_screen.dart';
import '../screens/account_summary_screen.dart';
import '../screens/transactions_screen.dart';
import '../screens/account_details_screen.dart';
import '../screens/manage_accounts_screen.dart';

class AppNavigator extends StatefulWidget {
  const AppNavigator({super.key});

  @override
  State<AppNavigator> createState() => _AppNavigatorState();
}

class _AppNavigatorState extends State<AppNavigator> {
  @override
  Widget build(BuildContext context) {
    return const LoginScreen();
  }
}
