# PandaCSS Integration

This project now includes PandaCSS for type-safe, utility-first CSS-in-JS styling with a beautiful dark theme and modern typography.

## Typography System

We've integrated Google Fonts for enhanced typography:

- **Zilla Slab**: Elegant serif font for body text and reading
- **Zen Kaku Gothic New**: Clean, modern sans-serif for headings and UI elements
- **Atkinson**: Original Astro font (fallback)

### Font Usage in PandaCSS
```astro
---
import { css } from '../styled-system/css';

const headingStyle = css({
  fontFamily: 'zen', // Zen Kaku Gothic New (sans-serif)
  fontSize: '2xl',
  fontWeight: 'bold'
});

const bodyStyle = css({
  fontFamily: 'zilla', // Zilla Slab (serif)
  lineHeight: 'relaxed'
});

// Semantic font stacks
const headingSemanticStyle = css({
  fontFamily: 'heading', // Zen Kaku Gothic New with fallbacks
});

const bodySemanticStyle = css({
  fontFamily: 'body', // Zilla Slab with fallbacks
});
---
```

## Usage Examples

### Basic CSS Function
```astro
---
import { css } from '../styled-system/css';

const buttonStyle = css({
  bg: 'blue.500',
  color: 'white',
  px: 4,
  py: 2,
  borderRadius: 'md',
  _hover: { bg: 'blue.600' }
});
---

<button class={buttonStyle}>Click me</button>
```

### Pattern Usage
```astro
---
import { stack, center } from '../styled-system/patterns';
---

<div class={stack({ direction: 'row', gap: 4 })}>
  <button>Button 1</button>
  <button>Button 2</button>
</div>

<div class={center({ minH: '100vh' })}>
  <h1>Centered Content</h1>
</div>
```

### Responsive Styles
```astro
---
import { css } from '../styled-system/css';

const responsiveStyle = css({
  fontSize: { base: 'md', md: 'lg', lg: 'xl' },
  padding: { base: 2, md: 4, lg: 6 }
});
---
```

### Token Usage
```astro
---
import { css } from '../styled-system/css';

const style = css({
  color: 'red.500',
  bg: 'gray.100',
  borderColor: 'blue.200'
});
---
```

## Development Commands

- `bun run panda` - Run PandaCSS CLI
- `bun run panda:dev` - Watch mode for PandaCSS
- `bun run build` - Build with PandaCSS codegen

## Configuration

The PandaCSS configuration is in `panda.config.ts`. The generated styles are in the `styled-system/` directory (gitignored).

## Demo

Check out the `PandaDemo.astro` component on the homepage to see PandaCSS in action!

## Typography Hierarchy (Reversed)

**Primary Body Font (Serif):**
```css
font-family: "Zilla Slab", Georgia, serif
```

**Primary Heading Font (Sans-Serif):**
```css
font-family: "Zen Kaku Gothic New", "Atkinson", system-ui, sans-serif
```

### Available Font Tokens:
- `fontFamily: 'body'` - Zilla Slab for body text
- `fontFamily: 'heading'` - Zen Kaku Gothic New for headings
- `fontFamily: 'zilla'` - Direct Zilla Slab access
- `fontFamily: 'zen'` - Direct Zen Kaku Gothic New access
- `fontFamily: 'serif'` - Serif stack with fallbacks
- `fontFamily: 'sans'` - Sans-serif stack with fallbacks
- `fontFamily: 'mono'` - Monospace stack
