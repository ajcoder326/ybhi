import 'package:flutter/material.dart';
import '../constants/theme.dart';

class BottomNavCurve extends StatelessWidget {
  final double height;

  const BottomNavCurve({Key? key, this.height = 150}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: height,
      width: double.infinity,
      child: CustomPaint(
        painter: _BottomNavPainter(),
      ),
    );
  }
}

class _BottomNavPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final width = size.width;
    // We assume the height is provided as 150 or similar, but the path logic relies on specific Y values (65, 20, 150).
    // If the widget height scales, we might want to scale these values.
    // For now, I'll stick to the logic in JS, assuming the container is ~150 tall.
    // If height differs significantly, it might look off, but let's assume height >= 150 or scaled.
    // Actually, to make it robust, let's map Y=150 to size.height.
    // But 65 and 20 are "top" offsets.
    // Let's assume absolute values as in JS, as they are likely tuned for the specific look.
    // But if size.height < 150, we might clip.
    // Let's use relative if possible?
    // JS used 65/150 approx 0.43H. 20/150 approx 0.13H.
    // But "20" is likely 20px from top. "65" is 65px from top.

    // Fixed offsets
    const double basePathY = 65.0;
    const double humpPeakY = 20.0;
    final double bottomY = size.height; // Or 150

    final path = Path()
      ..moveTo(0, basePathY)
      ..lineTo(width * 0.5 - 80, basePathY)
      ..cubicTo(
        width * 0.5 - 50, basePathY,
        width * 0.5 - 45, humpPeakY,
        width * 0.5, humpPeakY,
      )
      ..cubicTo(
        width * 0.5 + 45, humpPeakY,
        width * 0.5 + 50, basePathY,
        width * 0.5 + 80, basePathY,
      )
      ..lineTo(width, basePathY)
      ..lineTo(width, bottomY)
      ..lineTo(0, bottomY)
      ..close();

    final paint = Paint()
      ..color = AppColors.white
      ..style = PaintingStyle.fill;

    // Shadow
    canvas.drawShadow(path, Colors.black, 8.0, true);

    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
