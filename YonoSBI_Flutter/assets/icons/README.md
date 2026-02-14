# SBI Yono Quick Action Icons - SVG Code

## 1. Pay to Mobile or Contact
```svg
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Phone outline -->
  <rect x="14" y="6" width="20" height="36" rx="3" stroke="#5C2D91" stroke-width="2" fill="none"/>
  <!-- Screen -->
  <rect x="16" y="10" width="16" height="24" fill="none" stroke="#5C2D91" stroke-width="1"/>
  <!-- Home button -->
  <circle cx="24" cy="38" r="2" stroke="#5C2D91" stroke-width="1.5" fill="none"/>
  <!-- Person icon -->
  <circle cx="24" cy="18" r="4" stroke="#5C2D91" stroke-width="1.5" fill="none"/>
  <path d="M18 28c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#5C2D91" stroke-width="1.5" fill="none"/>
</svg>
```

## 2. Quick Transfer
```svg
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Circle with rupee -->
  <circle cx="24" cy="24" r="16" stroke="#5C2D91" stroke-width="2" fill="none"/>
  <!-- Rupee symbol -->
  <path d="M18 16h12M18 22h12M24 16v16M20 32l4-4" stroke="#5C2D91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Circular arrows -->
  <path d="M40 24c0 8.8-7.2 16-16 16" stroke="#5C2D91" stroke-width="2" stroke-linecap="round"/>
  <path d="M8 24c0-8.8 7.2-16 16-16" stroke="#5C2D91" stroke-width="2" stroke-linecap="round"/>
  <!-- Arrow heads -->
  <path d="M24 40l-3-3M24 40l3-3" stroke="#5C2D91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24 8l-3 3M24 8l3 3" stroke="#5C2D91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

## 3. Send Money
```svg
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Rupee symbol -->
  <text x="8" y="32" font-family="Arial" font-size="24" font-weight="bold" fill="#5C2D91">₹</text>
  <!-- Arrow pointing right -->
  <path d="M28 24h14M38 18l6 6-6 6" stroke="#5C2D91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

## 4. Bill Payments
```svg
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Document/Bill outline -->
  <path d="M12 8h18l6 6v28H12V8z" stroke="#5C2D91" stroke-width="2" fill="none"/>
  <!-- Folded corner -->
  <path d="M30 8v6h6" stroke="#5C2D91" stroke-width="2" fill="none"/>
  <!-- Lines on document -->
  <line x1="16" y1="20" x2="28" y2="20" stroke="#5C2D91" stroke-width="1.5"/>
  <line x1="16" y1="26" x2="28" y2="26" stroke="#5C2D91" stroke-width="1.5"/>
  <line x1="16" y1="32" x2="24" y2="32" stroke="#5C2D91" stroke-width="1.5"/>
</svg>
```

---

## Color Reference
- **Primary Purple**: `#5C2D91`
- **Stroke Width**: 2px (main), 1.5px (details)

## Usage in React Native
```jsx
import { SvgXml } from 'react-native-svg';

const PayToMobileIcon = `<svg>...</svg>`;

<SvgXml xml={PayToMobileIcon} width={40} height={40} />
```

## Alternative: Using PNG Images
These icons are also available as PNG files in:
- `assets/images/pay_to_mobile.png`
- `assets/images/quick_transfer.png`
- `assets/images/send_money.png`
- `assets/images/bill_payments.png`
