import React from 'react';
import Svg, { Path, Circle, G, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Colors } from '../constants/theme';

// This file is where we will put the EXACT SVG paths from your screenshots.
// Since I cannot see the screenshots, I have created these components with placeholders.
// You can replace the 'd' values in the Path components with the SVG data from your icons.

export const YonoIcon = ({ size = 24 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        {/* Placeholder for "Welcome to Yono" icon - looks like a phone or stylized 'Y' */}
        <Path 
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" 
            fill={Colors.white} 
        />
    </Svg>
);

export const SecurityIcon = ({ size = 24, color = Colors.primary }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
         {/* Placeholder for Security Shield */}
        <Path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill={color}/>
    </Svg>
);

export const ExploreIcon = ({ size = 24, color = Colors.primary }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
         {/* Placeholder for Compass/Explore */}
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill={color} opacity={0.3}/>
        <Path d="M12 7l-2.5 5 5-2.5 2.5-5-5 2.5z" fill={color}/>
    </Svg>
);

export const OffersIcon = ({ size = 24, color = Colors.primary }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        {/* Placeholder for Gift/Offers */}
        <Path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" fill={color}/>
    </Svg>
);
