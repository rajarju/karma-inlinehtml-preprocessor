# Karma Inline HTML preprocessor
Used to include Inline (like wrapped in script tags) templates to karma tests.
The plugin checks for script tags with template info inside and adds them to a global variable `__html__`. The script tags are selected based on a query selector which can be configured.

If you have your templates in your html file as below, you can use this plugin to load them to your Karma test environments. 

```html
<script id="template_1" type="text/html">
  <div class="">Hello Text</div>
</script>

<script id="template_2" type="text/html">
  <div class="">Hello Text</div>
</script>

<script id="template_3" type="text/html">
  <div class="">Hello Text</div>
</script>
```


##### Karma Config
```js
// Add Preprocessor for html files
preprocessors: {
  '*.html': ['inlinehtml']
},

inlineHtmlPreprocessor: {
  // Selector for template elements
  // The preprocessor will select all tags with qualify's the query given below.
  // And import the contents as template
  templateSelector : '[type="text/html"]',

  // Add prefix to template variable name
  // This will be prefixed to the template names
  prefix: ''
},
// plugins to load
plugins: [
  'karma-inlinehtml-preprocessor'
]
```
