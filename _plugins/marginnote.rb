module Jekyll
  class RenderMarginNoteTag < Liquid::Tag

    require "shellwords"
    @@mn_count = 0

    def initialize(tag_name, text, tokens)
      super
      @text = text.shellsplit
    end

    def render(context)
      @@mn_count+=1
      "<label for='mn-#{@@mn_count}' class='margin-toggle'> &#8853;</label><input type='checkbox' id='mn-#{@@mn_count}' class='margin-toggle'/><span class='marginnote'>#{@text[0]} </span>"
    end
  end
end

Liquid::Template.register_tag('marginnote', Jekyll::RenderMarginNoteTag)

