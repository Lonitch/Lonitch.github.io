module Jekyll
  class RenderSideNoteTag < Liquid::Tag

    require "shellwords"
    @@sn_count = 0

    def initialize(tag_name, text, tokens)
      super
      @text = text.shellsplit
    end

    def render(context)
      @@sn_count += 1
      if @text.length == 2
        label = @text[1]
        content = @text[0]
      else
        label = "sn-#{@@sn_count}"
        content = @text[0]
      end
      "<label for='#{label}' class='margin-toggle sidenote-number'></label><input type='checkbox' id='#{label}' class='margin-toggle'/><span class='sidenote'>#{content} </span>"
    end
  end
end

Liquid::Template.register_tag('sidenote', Jekyll::RenderSideNoteTag)

