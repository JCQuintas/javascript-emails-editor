# Javascript Emails Editor

A small component to create an email list. It only uses `javascript` and has `0` dependencies.

## Installing

You can either install it using `npm`, in which case you will also have the **typescript** typings if you use it.

```npm
npm install @fake/<javascript-emails-editor>
```

Or add the following tag to your `html.head`.

```html
<script src="https://dist/index.js"></script>
```

In both cases you will have to add the `stylesheet` to your `html.head` if you want to use the provided styles.

```html
<link src="https://dist/index.css" rel="stylesheet" />
```

## Usage

If you installed this script by `npm` you can import it on your `.js` files using the named export `EmailsEditor`.

```js
import { EmailsEditor } from '@fake/<javascript-emails-editor>'
```

While if you used the `script` tag the `EmailsEditor` property will be added to the `window` object.

```js
const EmailsEditor = window.EmailsEditor
```

Using it is really simple, it only requires a `container` element to append itself to, but it may also receive other properties shown in the [Options](#options) section.

```html
<div id="your-element-id"></div>
<script>
  const container = document.querySelector('#your-element-id')

  EmailsEditor({ container })
</script>
```

The `EmailsEditor` function returns an object with two functions. [setEmails](#setemails) and [getEmails](#getemails) that can be used to manipulate the current emails in the widget.

## Options

List of all the options that `EmailsEditor` can accept.

| property    | type             | description                            |
| ----------- | ---------------- | -------------------------------------- |
| `container` | HTMLElement      | used to append the elements to         |
| `title`     | string           | sets the custom title of this instance |
| `onChange`  | onChangeFunction | used to subscribe to changes           |

```typescript
type onChangeFunction = (
  type: 'add' | 'remove',
  email: string,
  currentEmails: string[]
) => void
```

## setEmails

This function allows you to set emails on the widget. It receives a single string parameter and will parse comma separated lists. It will accept invalid email strings as well.

```js
const editor = EmailsEditor({ container })

editor.setEmails('single@mail.com')
// becomes ['single@mail.com']
editor.setEmails('single@mail.com, another@mail.com')
// becomes ['single@mail.com', 'another@mail.com']
editor.setEmails('badmail.com')
// becomes ['badmail.com']
```

## getEmails

This function will return all the current email chips on the widget as a string array. It doesn't accept any parameter and will return both valid and invalid emails.

```js
const editor = EmailsEditor({ container })

editor.getEmails()
// returns ['one1@mail.com', 'two2@mail.com', 'not-an-email']
```
