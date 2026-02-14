import 'package:flutter/material.dart';

class WaveCurve extends StatelessWidget {
  final double height;

  const WaveCurve({Key? key, this.height = 80}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: height,
      width: double.infinity,
      child: CustomPaint(
        painter: _WaveCurvePainter(),
      ),
    );
  }
}

class _WaveCurvePainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final width = size.width;
    final height = size.height;

    // Secondary Layer (Light Pinkish)
    // Path d="M0,${height * 0.7}
    // C${width * 0.35},${height * 0.1}, ${width * 0.65},${height}, ${width},${height * 0.7}
    // L${width},0 L0,0 Z"
    final path2 = Path()
      ..moveTo(0, height * 0.7)
      ..cubicTo(width * 0.35, height * 0.1, width * 0.65, height, width, height * 0.7)
      ..lineTo(width, 0)
      ..lineTo(0, 0)
      ..close();

    final paint2 = Paint()
      ..color = const Color(0xFF9B8BC4)
      ..style = PaintingStyle.fill;

    canvas.drawPath(path2, paint2);

    // Main Layer (Gradient)
    // Path d="M0,${height * 0.6}
    // C${width * 0.35},${0}, ${width * 0.65},${height}, ${width},${height * 0.6}
    // L${width},0 L0,0 Z"
    final path1 = Path()
      ..moveTo(0, height * 0.6)
      ..cubicTo(width * 0.35, 0, width * 0.65, height, width, height * 0.6)
      ..lineTo(width, 0)
      ..lineTo(0, 0)
      ..close();

    final paint1 = Paint()
      ..shader = const LinearGradient(
        colors: [Color(0xFF1e1259), Color(0xFF150d40)],
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
      ).createShader(Rect.fromLTWH(0, 0, width, height))
      ..style = PaintingStyle.fill;

    canvas.drawPath(path1, paint1);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
