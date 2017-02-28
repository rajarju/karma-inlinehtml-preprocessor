# Karma Inline HTML preprocessor
Used to include Inline (script tag wrapped) templates to karma tests.

### Karma Config
```
// Add Preprocessor for html files
preprocessors: {
  '*.html': ['inlinehtml']
},


inlineHtmlPreprocessor: {
  // Selector for template elements
  // The preprocessor will select all tags with the type given below.
  // And import the contents as template
  templateSelector : '[type="text/html"]',

  // Add prefix to template variable name
  // This will be prefixed to the template names
  prefix: ''
},
```
