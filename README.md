# Ace-helper
The Ace-helper helps to easily integrate [Ace editor](https://ace.c9.io) into your project, e.g. [Silex](http://silex.sensiolabs.org/), [Symfony](http://symfony.com/), also on form elements.

This library depends on [jQuery](https://jquery.com/) to work.

## Installation
```
bower install ace-helper
```

## Use
To use the ace-helper, simply add ```class="ace-editor"``` to ```div``` or ```textarea```. It will create an Ace editor for you. If it's a textarea, it will create an Ace editor after the textarea and sync the content of the editor with the textarea, which makes it straight-forward to be submitted.

```html
<!-- jQuery -->
<script src=".../jquery.min.js"></script>

<!-- Ace -->
<script src=".../ace-builds/src-min-noconflict/ace.js" charset="utf-8"></script>

<!-- Ace-helper -->
<script src="/bower_components/ace-helper/src/ace-helper.js"></script>

...

<textarea class="ace-editor">Your content here</textarea>
```
## Parameters

Put the Ace parameters as data attributes in the HTML element to enable them.
```html
<textarea class="ace-editor" data-mode="css" data-theme="monokai"></textarea>
```

## Examples

Integrate with Symfony forms:
```html
{{ form_row(form.description, { 'attr': {'class': 'ace-editor', 'data-theme': 'twilight', 'data-mode':'handlebars'} }) }}
```
