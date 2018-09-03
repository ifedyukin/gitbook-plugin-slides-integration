# gitbook-plugin-slides-integration
[Slides.com](http://slides.com/) online and html priview plugin.

## Install via npm
```sh
npm install gitbook-plugin-slides-integration
```

## book.json
```json
{
  "plugins": [
    "slides-integration"
  ]
}
```

## Examples
### HTML slide
```markdown
{% slides %}
./path-to-html.html
{% endslides %}
```

### Slides.com page
```markdown
{% slides %}
https://slides.com/user/slide
{% endslides %}
```
