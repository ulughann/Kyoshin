## Hover

You can use the hover state to change the style of an element when the user hovers over it. To do this, use the `hover` class.

```html
<button class="hover:bg-blue-500 bg-blue-200">Hover me</button>
```

## Focus

You can use the focus state to change the style of an element when the user focuses on it. To do this, use the `focus` class.

```html
<input
  class="focus:outline-none focus:ring-2 focus:ring-blue-500 
focus:border-transparent border-2 border-blue-200"
  type="text"
  placeholder="Focus me"
/>
```

## Active

You can use the active state to change the style of an element when the user clicks on it. To do this, use the `active` class.

```html
<button class="active:bg-blue-500 bg-blue-200">Click me</button>
```

## Checked

You can use the checked state to change the style of an element when the user checks it. To do this, use the `checked` class.

```html
<input type="checkbox" class="checked:bg-blue-500 bg-blue-200" />
```

## More

**Pseudo-classes**, like `:hover`, `:focus`, `:first-child`, and `:required`
**Pseudo-elements**, like `::before`, `::after`, `::placeholder`, and `::selection`
Media and feature queries, like responsive breakpoints, dark mode, and prefers-reduced-motion
**Attribute selectors**, like `[dir="rtl"]` and `[open]`

##

# More from Tailwind

You can use any example provided on [This page of the Tailwind Docs](https://tailwindcss.com/docs/hover-focus-and-other-states) in Kyoshin aswell. Simply keep in mind, the default styles will be different based on your preferred complementary css framework.
