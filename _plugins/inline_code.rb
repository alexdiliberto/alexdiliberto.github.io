# Convert the following liquid tags into inline code blocks
#   1. {% i %} var foo="bar" {% ei %}
#   2. {% inline %} var foo="bar" {% endinline %}

module Jekyll
  class SyntaxHighlightInlineTag < Liquid::Tag
    def render(context)
      '<code class="inline-code">'
    end
  end
  class SyntaxHighlightInlineEndTag < Liquid::Tag
    def render(context)
      '</code>'
    end
  end
end

Liquid::Template.register_tag('inline', Jekyll::SyntaxHighlightInlineTag)
Liquid::Template.register_tag('endinline', Jekyll::SyntaxHighlightInlineEndTag)

Liquid::Template.register_tag('i', Jekyll::SyntaxHighlightInlineTag)
Liquid::Template.register_tag('ei', Jekyll::SyntaxHighlightInlineEndTag)
