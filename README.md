# Figma Components - Pixel-Perfect React Implementation

This project contains pixel-perfect React implementations of the components from the Figma design file.

## Components Included

### 1. Button Component

- Yellow "Done" button with hover, active, and disabled states
- Fully accessible with keyboard navigation
- Smooth transitions and animations

### 2. Checkbox Component

- Custom-styled checkbox with checked/unchecked states
- Blue checkmark when selected
- Hover and focus states for accessibility

### 3. CheckboxList Component

- List of items with checkboxes
- "All pages" label with right-aligned checkboxes
- Hover effects on list items

### 4. PageSelector Component (Frame 8445891)

- Card/modal design with page list
- Selectable page items (Page 1-4)
- "Done" button at the bottom
- Shadow and rounded corners

## Installation

```bash
# Install dependencies
npm install
```

## Running the Project

```bash
# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

## Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.css
│   ├── Checkbox/
│   │   ├── Checkbox.jsx
│   │   └── Checkbox.css
│   ├── CheckboxList/
│   │   ├── CheckboxList.jsx
│   │   └── CheckboxList.css
│   └── PageSelector/
│       ├── PageSelector.jsx
│       └── PageSelector.css
├── App.jsx
├── App.css
└── main.jsx
```

## Component Usage

### Button

```jsx
import Button from './components/Button/Button';

<Button onClick={handleClick}>Done</Button>
<Button disabled>Done</Button>
```

### Checkbox

```jsx
import Checkbox from "./components/Checkbox/Checkbox";

<Checkbox id="checkbox-1" checked={isChecked} onChange={handleChange} />;
```

### CheckboxList

```jsx
import CheckboxList from "./components/CheckboxList/CheckboxList";

const items = [
  { id: 1, label: "All pages", checked: false },
  { id: 2, label: "All pages", checked: true },
];

<CheckboxList items={items} onItemChange={handleItemChange} />;
```

### PageSelector

```jsx
import PageSelector from "./components/PageSelector/PageSelector";

const pages = [
  { id: 1, name: "Page 1" },
  { id: 2, name: "Page 2" },
  { id: 3, name: "Page 3" },
  { id: 4, name: "Page 4" },
];

<PageSelector pages={pages} onDone={handleDone} title="All pages" />;
```

## Design Specifications

### Colors

- Primary Yellow: `#FFC700`
- Primary Blue: `#2B7EFF`
- Text Primary: `#333333`
- Text Secondary: `#666666`
- Border: `#E0E0E0`
- Background: `#FFFFFF`
- Background Secondary: `#FAFAFA`

### Typography

- Font Family: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', etc.)
- Font Sizes: 14px (body), 20px (headings)
- Font Weights: 400 (regular), 500 (medium), 600 (semibold)

### Spacing

- Border Radius: 8px (buttons, inputs), 12px (cards)
- Padding: 12px-24px (contextual)
- Gaps: 8px-20px (contextual)

## Features

- ✅ Pixel-perfect design implementation
- ✅ Fully responsive components
- ✅ Accessible (keyboard navigation, ARIA labels, WCAG compliant)
- ✅ Smooth animations and transitions (200ms)
- ✅ Complete interactive states:
  - Hover states with visual feedback
  - Focus states with blue glow for keyboard navigation
  - Active states for buttons
  - Disabled states
  - Combined states (focus + hover)
- ✅ Clean, maintainable code structure
- ✅ CSS Modules approach for styling
- ✅ React best practices
- ✅ :focus-visible for better UX (keyboard-only focus indicators)

## Interactive States

All components include comprehensive interactive states for better UX:

### Hover States

- Checkboxes: Border darkens on hover
- Buttons: Background lightens with yellow shadow
- List items: Background lightens, border darkens
- Page rows: Background appears on hover

### Focus States (Keyboard Navigation)

- All interactive elements show a blue glow when focused via keyboard (Tab key)
- Uses `:focus-visible` to only show indicators for keyboard navigation
- Consistent 4px blue glow across all components
- List items highlight the entire row when checkbox is focused

### Combined States

- Focus + Hover: Both effects are visible simultaneously
- Checked + Hover: Darker blue for checked checkboxes
- Active: Buttons move down 1px when clicked

For detailed information, see:

- **INTERACTIVE_STATES_GUIDE.md** - Complete guide with testing instructions
- **STATES_SUMMARY.md** - Quick reference for all states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
