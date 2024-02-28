# EasyModal

EasyModal is a lightweight, accessible modal library designed to enhance user interaction on web applications. Utilizing the native HTML `<dialog>` element, it offers an easy and robust solution for implementing modals with features like automatic action binding, cookie-based user action tracking, customizable cookie durations, and timed modal displays.

## Features

- **Native HTML `<dialog>` Support**: Uses the HTML `<dialog>` element for ease of use and accessibility.
- **Automatic Action Binding**: Simplifies modal interactions with data attributes for open, close, accept, and cancel actions.
- **Cookie-Based Action Tracking**: Remembers user modal interactions to prevent redundant displays.
- **Customizable Cookie Duration**: Allows developers to define how long modal actions are remembered.
- **Timed Modal Display**: Enables modals to appear after a set delay, enhancing user engagement.
- **Accessibility**: Ensures modals are accessible, following WCAG guidelines for inclusive design.

## Installation

Include EasyModal in your project by adding the `EasyModal.js` file to your codebase and linking to it within your HTML file:

```html
<script src="path/to/EasyModal.js"></script>
```

## Usage

### Basic Modal

```html
<button data-modal-trigger="exampleModal">Open Modal</button>

<dialog id="exampleModal">
  <p>This is a simple modal.</p>
  <button data-modal-close>Close</button>
</dialog>
```

### Timed Modal

```html
<dialog id="timedModal" data-modal-timed="5">
  <p>This modal will display after 5 seconds.</p>
  <button data-modal-close>Close</button>
</dialog>
```

### Custom Cookie Duration

```html
<dialog id="customCookieModal" data-modal-cookie-expire="30">
  <p>Cookie duration for this modal's action is 30 days.</p>
  <button data-modal-close>Close</button>
</dialog>
```

## API

### `data-modal-trigger="ID"`

Triggers the modal with the specified ID to open.

### `data-modal-close`

Closes the modal.

### `data-modal-accept`

Marks the modal as accepted and closes it. Useful for confirmation dialogs.

### `data-modal-cancel`

Marks the modal as canceled and closes it. Useful for confirmation dialogs.

### `data-modal-timed="SECONDS"`

Delays the modal's display for the specified number of seconds.

### `data-modal-cookie-expire="DAYS"`

Sets the duration for which the user's action on the modal is remembered.

## Accessibility

EasyModal leverages the `<dialog>` element's inherent accessibility features, such as focus management and semantic structure. It adheres to WCAG guidelines, ensuring that modals are accessible to all users, including those using assistive technologies.

## Best Practices

- **Test Across Devices**: Ensure modals perform well on various devices and screen sizes.
- **Keyboard Navigation**: Verify modals are fully navigable using the keyboard.
- **Screen Reader Testing**: Regularly test your modals with screen readers to ensure they are announced and interacted with correctly.

## Contributing

Contributions are welcome! If you have suggestions for improving EasyModal, please open an issue or submit a pull request.

## License

EasyModal is open-source software licensed under the MIT license.
