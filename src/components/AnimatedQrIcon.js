import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';
import Svg, { G, Path, Rect } from 'react-native-svg';

const AnimatedRect = Animated.createAnimatedComponent(Rect);
const AnimatedView = Animated.createAnimatedComponent(View);

const AnimatedQrIcon = ({ size = 40, style }) => {
    const cornerScale = useRef(new Animated.Value(1)).current;
    const lineOpacity = useRef(new Animated.Value(0)).current;
    const linePosition = useRef(new Animated.Value(0.5)).current; // 0.5 = center
    const lineScaleY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const runAnimation = () => {
            // Reset values
            cornerScale.setValue(1);
            lineOpacity.setValue(0);
            linePosition.setValue(0.5);
            lineScaleY.setValue(0);

            Animated.sequence([
                // 1. Line appears from center (zoom out) + corners expand
                Animated.parallel([
                    Animated.timing(lineScaleY, {
                        toValue: 1,
                        duration: 300,
                        easing: Easing.out(Easing.ease),
                        useNativeDriver: true,
                    }),
                    Animated.timing(lineOpacity, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                    Animated.timing(cornerScale, {
                        toValue: 1.25,
                        duration: 300,
                        easing: Easing.out(Easing.ease),
                        useNativeDriver: true,
                    }),
                ]),

                // 2. Scan up (to top)
                Animated.timing(linePosition, {
                    toValue: 0.15,
                    duration: 500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),

                // 3. Scan down (to bottom)
                Animated.timing(linePosition, {
                    toValue: 0.85,
                    duration: 700,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),

                // 4. Scan up again
                Animated.timing(linePosition, {
                    toValue: 0.15,
                    duration: 700,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),

                // 5. Scan down again
                Animated.timing(linePosition, {
                    toValue: 0.85,
                    duration: 700,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),

                // 6. Return to center
                Animated.timing(linePosition, {
                    toValue: 0.5,
                    duration: 400,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),

                // 7. Line disappears to center (zoom in) + corners contract
                Animated.parallel([
                    Animated.timing(lineScaleY, {
                        toValue: 0,
                        duration: 300,
                        easing: Easing.in(Easing.ease),
                        useNativeDriver: true,
                    }),
                    Animated.timing(lineOpacity, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                    Animated.timing(cornerScale, {
                        toValue: 1,
                        duration: 300,
                        easing: Easing.in(Easing.ease),
                        useNativeDriver: true,
                    }),
                ]),

                // 8. Pause before repeat
                Animated.delay(500),
            ]).start(() => runAnimation());
        };

        runAnimation();

        return () => {
            cornerScale.stopAnimation();
            lineOpacity.stopAnimation();
            linePosition.stopAnimation();
            lineScaleY.stopAnimation();
        };
    }, []);

    const svgSize = size;
    const viewBox = "0 0 400 300";
    const qrHeight = svgSize * 0.75;

    // Calculate line translateY based on position (0-1 range mapped to actual pixels)
    // Constrained to stay inside the corner boundaries
    const lineTranslateY = linePosition.interpolate({
        inputRange: [0, 1],
        outputRange: [-qrHeight * 0.22, qrHeight * 0.22],
    });

    return (
        <View style={[styles.container, style, { width: svgSize, height: qrHeight }]}>
            {/* Static QR Code Pattern */}
            <View style={styles.staticLayer}>
                <Svg width={svgSize} height={qrHeight} viewBox={viewBox}>
                    <G transform="translate(200, 150)">
                        {/* Inner QR pattern - STATIC */}
                        <Path
                            d="M -8.712 -35.544 L -8.073 -34.855 L -8.073 -21.47 L -8.073 -8.084 L -8.712 -7.445 C -9.603 -6.554 -12.282 -6.51 -13.199 -7.372 L -13.802 -7.938 L -13.802 -19.221 L -13.802 -30.504 L -22.526 -30.504 L -31.25 -30.504 L -31.25 -21.584 L -31.25 -12.665 L -25.64 -12.731 L -20.029 -12.796 L -19.39 -12.157 C -18.448 -11.215 -18.448 -8.386 -19.389 -7.445 L -20.028 -6.806 L -27.934 -6.806 C -35.388 -6.806 -35.87 -6.835 -36.38 -7.309 C -37.058 -7.941 -37.353 -15.04 -37.204 -27.163 L -37.109 -34.89 L -36.478 -35.561 L -35.847 -36.233 L -22.598 -36.233 L -9.35 -36.233 L -8.712 -35.544 M 36.033 -35.693 L 36.719 -35.153 L 36.719 -21.519 L 36.719 -7.885 L 36.033 -7.346 C 35.359 -6.816 35.107 -6.806 22.088 -6.806 L 8.83 -6.806 L 8.191 -7.445 L 7.552 -8.084 L 7.552 -21.26 C 7.552 -34.977 7.601 -35.635 8.653 -36.059 C 9.882 -36.553 35.372 -36.213 36.033 -35.693 M 2.128 -34.76 C 2.851 -34.106 2.819 -30.518 2.084 -29.854 C 1.341 -29.181 -1.991 -29.267 -2.709 -29.978 C -3.357 -30.619 -3.336 -34.006 -2.678 -34.732 C -2.098 -35.373 1.428 -35.394 2.128 -34.76 M 13.542 -21.584 L 13.542 -12.665 L 22.266 -12.608 L 30.99 -12.55 L 30.99 -21.527 L 30.99 -30.504 L 22.266 -30.504 L 13.542 -30.504 L 13.542 -21.584 M -19.329 -25.15 C -18.555 -24.608 -18.435 -18.783 -19.181 -17.959 C -19.792 -17.284 -25.35 -17.248 -26.086 -17.914 C -26.763 -18.526 -26.799 -24.342 -26.132 -25.08 C -25.541 -25.732 -20.238 -25.787 -19.329 -25.15 M 25.565 -25.125 C 26.15 -24.596 26.289 -18.356 25.729 -17.795 C 25.092 -17.158 19.11 -17.383 18.635 -18.062 C 17.968 -19.014 18.056 -24.341 18.75 -25.035 C 19.465 -25.75 24.797 -25.82 25.565 -25.125 M 1.909 -24.242 C 2.781 -23.556 2.966 -19.877 2.173 -19.001 C 1.654 -18.427 -2.273 -18.298 -2.812 -18.837 C -3.38 -19.405 -3.226 -23.893 -2.624 -24.315 C -1.75 -24.927 1.096 -24.881 1.909 -24.242 M 2.001 -13.01 C 2.876 -12.189 2.9 -8.587 2.038 -7.669 C 1.253 -6.833 -1.797 -6.78 -2.604 -7.587 C -3.421 -8.404 -3.377 -12.589 -2.546 -13.171 C -1.613 -13.825 1.242 -13.724 2.001 -13.01 M 2.025 -1.713 L 2.604 -1.308 L 2.604 14.453 L 2.604 30.213 L 1.843 30.975 C 0.753 32.064 -2.224 31.891 -2.862 30.7 C -3.028 30.388 -3.126 25.733 -3.129 18.016 C -3.131 11.311 -3.201 5.569 -3.284 5.256 C -3.559 4.232 -5.08 3.871 -9.12 3.871 C -13.638 3.871 -13.802 3.773 -13.802 1.056 C -13.802 -1.854 -14.184 -1.705 -6.336 -1.867 C -2.637 -1.943 0.628 -2.031 0.919 -2.062 C 1.209 -2.093 1.707 -1.936 2.025 -1.713 M -19.226 -1.427 C -18.569 -0.832 -18.536 2.682 -19.181 3.395 C -19.904 4.194 -31.348 4.115 -32.21 3.305 C -33.045 2.52 -33.099 -0.53 -32.292 -1.337 C -31.56 -2.069 -20.023 -2.148 -19.226 -1.427 M 31.168 -1.292 C 32.072 -0.443 32.049 2.314 31.132 3.232 L 30.492 3.871 L 19.702 3.871 C 7.122 3.871 7.954 4.055 7.67 1.219 C 7.506 -0.417 7.535 -0.563 8.163 -1.19 L 8.83 -1.858 L 19.698 -1.858 C 30.497 -1.858 30.569 -1.854 31.168 -1.292 M -8.712 9.458 L -8.073 10.098 L -8.073 23.28 L -8.073 36.463 L -8.834 37.225 L -9.595 37.986 L -22.622 37.986 L -35.648 37.986 L -36.366 37.368 L -37.084 36.751 L -37.139 23.64 C -37.197 10.058 -37.152 9.401 -36.138 8.993 C -35.956 8.92 -29.855 8.851 -22.579 8.84 L -9.351 8.819 L -8.712 9.458 M 36.052 9.405 L 36.716 9.991 L 36.74 23.397 L 36.763 36.803 L 36.075 37.394 L 35.388 37.986 L 22.231 37.986 L 9.075 37.986 L 8.313 37.225 L 7.552 36.463 L 7.552 23.28 L 7.552 10.098 L 8.191 9.458 L 8.83 8.819 L 22.109 8.819 L 35.388 8.819 L 36.052 9.405 M -31.25 23.406 L -31.25 32.264 L -22.591 32.195 L -13.932 32.126 L -13.864 23.337 L -13.795 14.548 L -22.523 14.548 L -31.25 14.548 L -31.25 23.406 M 13.542 23.403 L 13.542 32.257 L 22.266 32.257 L 30.99 32.257 L 30.99 23.403 L 30.99 14.548 L 22.266 14.548 L 13.542 14.548 L 13.542 23.403 M -19.159 19.905 C -18.637 20.427 -18.555 26.489 -19.062 26.996 C -19.272 27.206 -20.451 27.309 -22.656 27.309 C -24.861 27.309 -26.04 27.206 -26.25 26.996 C -26.644 26.602 -26.68 20.724 -26.293 20 C -25.924 19.31 -19.835 19.23 -19.159 19.905 M 25.729 19.809 C 25.939 20.019 26.042 21.198 26.042 23.403 C 26.042 25.607 25.939 26.786 25.729 26.996 C 25.251 27.474 19.171 27.425 18.768 26.94 C 18.282 26.354 18.183 20.806 18.647 20.082 C 19.086 19.396 25.085 19.165 25.729 19.809"
                            fill="rgba(255, 255, 255, 0.55)"
                            fillRule="evenodd"
                        />
                    </G>
                </Svg>
            </View>

            {/* Animated Scan Line */}
            <AnimatedView
                style={[
                    styles.scanLineContainer,
                    {
                        opacity: lineOpacity,
                        transform: [
                            { translateY: lineTranslateY },
                            { scaleY: lineScaleY },
                        ],
                    },
                ]}
            >
                <View style={[styles.scanLine, { width: svgSize * 0.28 }]} />
            </AnimatedView>

            {/* Animated Corner Brackets */}
            <AnimatedView
                style={[
                    styles.animatedLayer,
                    {
                        transform: [{ scale: cornerScale }],
                    },
                ]}
            >
                <Svg width={svgSize} height={qrHeight} viewBox={viewBox}>
                    <G transform="translate(200, 150)">
                        {/* Four corner brackets - ANIMATED */}
                        <Path
                            d="M -15.483 -49.656 C -16.022 -49.117 -16.122 -48.768 -16.122 -47.431 C -16.122 -46.094 -16.022 -45.744 -15.483 -45.205 L -14.844 -44.566 L -25.183 -44.562 C -37.203 -44.556 -39.027 -44.137 -42.587 -40.563 C -45.938 -37.199 -46.354 -35.446 -46.354 -24.7 L -46.354 -16.401 L -47.115 -15.64 C -48.529 -14.227 -51.346 -14.662 -52.069 -16.406 C -52.594 -17.675 -52.299 -34.327 -51.715 -36.363 C -49.827 -42.945 -44.658 -48.085 -38.236 -49.767 C -36.518 -50.217 -35.32 -50.268 -26.225 -50.281 L -16.122 -50.295 L -15.483 -49.656 M 37.76 -49.894 C 44.292 -48.374 49.899 -42.868 51.571 -36.331 C 52.032 -34.526 52.083 -33.426 52.083 -25.289 L 52.083 -16.252 L 51.397 -15.565 C 50.388 -14.557 47.928 -14.558 46.993 -15.568 L 46.354 -16.257 L 46.35 -24.227 C 46.344 -34.797 45.819 -37.137 42.752 -40.269 C 39.004 -44.096 37.833 -44.391 25.693 -44.56 L 15.839 -44.696 L 15.341 -45.311 C 14.619 -46.204 14.634 -49.044 15.365 -49.775 C 16.066 -50.476 34.83 -50.576 37.76 -49.894 M -47.834 16.662 C -46.365 17.414 -46.367 17.403 -46.356 26.007 C -46.343 36.41 -45.87 38.385 -42.59 41.715 C -39.197 45.158 -37.564 45.531 -25.866 45.535 L -16.446 45.538 L -15.645 46.212 C -14.079 47.53 -14.653 50.948 -16.518 51.416 C -18 51.788 -36.809 51.357 -38.31 50.917 C -43.042 49.53 -46.844 46.718 -49.457 42.676 C -51.895 38.905 -52.344 36.313 -52.343 26.038 C -52.342 16.342 -52.488 16.749 -48.876 16.415 C -48.616 16.391 -48.147 16.502 -47.834 16.662 M 51.282 17.045 L 52.083 17.72 L 52.083 26.639 C 52.083 39.378 51.132 42.229 45.182 47.32 C 41.025 50.878 38.591 51.397 26.084 51.397 L 15.84 51.397 L 15.342 50.783 C 14.55 49.805 14.635 47.025 15.483 46.177 L 16.122 45.538 L 25.58 45.538 C 37.483 45.538 38.722 45.265 42.34 41.847 C 45.71 38.663 46.182 36.818 46.262 26.528 C 46.299 21.873 46.334 17.992 46.341 17.904 C 46.461 16.422 49.842 15.834 51.282 17.045"
                            fill="#FFFFFF"
                            fillRule="evenodd"
                        />
                    </G>
                </Svg>
            </AnimatedView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    staticLayer: {
        position: 'absolute',
    },
    animatedLayer: {
        position: 'absolute',
    },
    scanLineContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    scanLine: {
        height: 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 1,
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default AnimatedQrIcon;
