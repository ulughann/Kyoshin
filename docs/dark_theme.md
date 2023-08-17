# Pick how an element will look on Dark Mode
Kyoshin relies on the `prefers-color-scheme` media query to determine if the user has a dark theme enabled. You can set how an element will look on Dark Mode by using the `dark` class. For example, if you want to set the background color of an element to black on Dark Mode, you can do this:

```html
<div class="dark:bg-black bg-blue-200"></div>
```

The above code will set the background color to blue and will switch to black if the user's system theme is set to Dark Mode.