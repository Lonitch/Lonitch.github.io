module Jekyll
    class RenderEqn < Liquid::Tag
  
      require "shellwords"
      @@equation_count = 0
  
      def initialize(tag_name, text, tokens)
        super
        @text = text.shellsplit
      end
  
      def render(context)
        @@equation_count += 1
        equation_id = @text[1] || "eqn-#{@@equation_count}"
        equation_content = @text[0].gsub('\\', '\\\\')
      "<div id='#{equation_id}' render_count='#{@@equation_count}'>\n$$\\large #{equation_content}\\tag{#{@@equation_count}}$$\n</div>"
      end
    end
  end
  
  Liquid::Template.register_tag('eqn', Jekyll::RenderEqn)
  
  