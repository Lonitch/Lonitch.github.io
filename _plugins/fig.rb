## This has a fairly harmless hack that wraps the img tag in a div to prevent it from being
## wrapped in a paragraph tag instead, which would totally fuck things up layout-wise
## Usage {% fullwidth 'path/to/image' 'caption goes here in quotes' %}
#
module Jekyll
    class RenderFigure < Liquid::Tag
      
      require "shellwords"
      require "kramdown"
      @@fig_count = 0
  
      def initialize(tag_name, text, tokens)
        super
        @text = text.shellsplit
      end
  
      def render(context)
        @@fig_count += 1
        # Gather settings
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
  
        baseurl = context.registers[:site].config['baseurl']
        if @text[0] == 'img'
            if @text.length == 5
                renderType, figType, link, cap, figId = @text[0], @text[1], @text[2], @text[3].gsub('\\', '\\\\'), @text[4]
            elsif @text.length == 4
                renderType, link, cap, figId = @text[0], @text[1], @text[2].gsub('\\', '\\\\'), @text[3]
                figType = "marginnote"
            elsif @text.length == 3
                renderType, link, cap = @text[0], @text[1], @text[2].gsub('\\', '\\\\')
                figType = "marginnote"
                figId = "fig-#{@@fig_count}"
            end
        else
            if @text.length == 4
                renderType, figType, cap, figId = @text[0], @text[1], @text[2].gsub('\\', '\\\\'), @text[3]
            elsif @text.length == 3
                renderType, cap, figId = @text[0], @text[1].gsub('\\', '\\\\'), @text[2]
                figType = "marginnote"
            elsif @text.length == 2
                renderType, cap = @text[0], @text[1].gsub('\\', '\\\\')
                figType = "marginnote"
                figId = "fig-#{@@fig_count}"
            end
        end


        if figType=='fullwidth'
            width = '70%'
        else
            width = '40%'
        end

        if renderType == 'jsx'
            if figType == 'fullwidth'
                "<div id='#{figId}' class='jxgbox shadow' render_count='#{@@fig_count}' style='aspect-ratio: 2 / 1; width: #{width}; user-select: none; overflow: hidden; position: relative; touch-action: none;'></div><span class='marginnote'>Fig. #{@@fig_count} #{cap}</span>"
            else
                "<div id='#{figId}' class='jxgbox shadow marginnote' render_count='#{@@fig_count}' style='aspect-ratio: 1 / 1; width: #{width}; user-select: none; overflow: hidden; position: relative; touch-action: none;'></div><span class='marginnote'>Fig. #{@@fig_count} #{cap}</span>"
            end
        else
            if figType == 'fullwidth'
                if link.start_with?('http://', 'https://','//')
                "<figure id='#{figId}' render_count='#{@@fig_count}' class='fullwidth'><img src='#{link}'/><br><figurecaption>Fig. #{@@fig_count} #{cap}</figurecaption></figure>"
                else
                "<figure id='#{figId}' render_count='#{@@fig_count}' class='fullwidth'><img src='#{baseurl}/#{link}'/><br><figurecaption>Fig. #{@@fig_count} #{cap}</figurecaption></figure>"
                end
            else
                if link.start_with?('http://', 'https://','//')
                    "<span id='#{figId}' render_count='#{@@fig_count}' class='marginnote'><img src='#{link}'/><br>Fig. #{@@fig_count} #{cap}</span>"
                else
                    "<span id='#{figId}' render_count='#{@@fig_count}' class='marginnote'><img src='#{baseurl}/#{link}'/><br>Fig. #{@@fig_count} #{cap}</span>"
                end
            end
        end
      end
    end
  end
  
  Liquid::Template.register_tag('fig', Jekyll::RenderFigure)
  