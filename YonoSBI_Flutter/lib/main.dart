import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'navigation/app_navigator.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
  ]);
  runApp(const YonoSBIApp());
}

class YonoSBIApp extends StatelessWidget {
  const YonoSBIApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'YONO SBI',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: const Color(0xFF592D82),
        scaffoldBackgroundColor: const Color(0xFFF5F5F7),
        fontFamily: 'System',
        useMaterial3: true,
      ),
      home: const AppNavigator(),
    );
  }
}
