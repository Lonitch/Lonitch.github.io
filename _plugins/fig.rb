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
        elsif @text[0]== 'qc'
            if @text.length == 4
                renderType, cap, use_palette, figId = @text[0], @text[1], @text[2]=='palette', @text[3]
            elsif @text.length == 3
                renderType, cap, use_palette= @text[0], @text[1], @text[2]=='palette'
                figId = "fig-#{@@fig_count}"
            elsif @text.length == 2
                renderType, cap= @text[0], @text[1]
                use_palette=false
                figId = "fig-#{@@fig_count}"
            end
        elsif @text[0]== 'qcsvg'
            if @text.length == 3
                renderType, cap, figId = @text[0], @text[1], @text[2]
            elsif @text.length == 2
                renderType, cap= @text[0], @text[1]
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
                "<div id='#{figId}' class='jxgbox shadow numbered-fig' style='aspect-ratio: 2 / 1; width: #{width}; user-select: none; overflow: hidden; position: relative; touch-action: none;'></div><span class='marginnote'> #{cap}</span>"
            else
                "<div id='#{figId}' class='jxgbox shadow marginnote numbered-fig' style='aspect-ratio: 1 / 1; width: #{width}; user-select: none; overflow: hidden; position: relative; touch-action: none;'></div><span class='marginnote'> #{cap}</span>"
            end
        elsif renderType == 'qc'
            if use_palette
                "<div class='Q-circuit-palette'></div><div class='qc-container numbered-fig' id='#{figId}-container'><pre id='#{figId}' style='text-align: center;'></pre><span id='#{figId}-report' for='#{figId}' class='marginnote' style='margin-right: 10%;'> #{cap}, and its probability distribution is shown below</span></div>"
            else
                "<div class='qc-container numbered-fig' id='#{figId}-container'><pre id='#{figId}' style='text-align: center;'></pre><span id='#{figId}-report' for='#{figId}' class='marginnote' style='width:30%;margin-left: 5.5%;'> #{cap}, and its probability distribution is shown below</span></div>"
            end
        elsif renderType == 'qcsvg'
            "<div class='qc-container numbered-fig' id='#{figId}-container'><div id='#{figId}' style='width:55%'></div><span id='#{figId}-report' for='#{figId}' class='marginnote' style='width:30%;margin-left: 5.5%;'> #{cap},<a id='#{figId}-quirk'>see QC in Quirk.</a> Its probability distribution is shown below</span></div>"
        elsif renderType == 'img'
            if figType == 'fullwidth'
                if link.start_with?('http://', 'https://','//')
                "<figure id='#{figId}' class='fullwidth numbered-fig'><img src='#{link}'/><br><span> #{cap}</span></figure>"
                else
                "<figure id='#{figId}' class='fullwidth numbered-fig'><img src='#{baseurl}/#{link}'/><br><span> #{cap}</span></figure>"
                end
            else
                if link.start_with?('http://', 'https://','//')
                    "<span id='#{figId}' class='marginnote numbered-fig'><img src='#{link}'/><br><span> #{cap}</span></span>"
                else
                    "<span id='#{figId}' class='marginnote numbered-fig'><img src='#{baseurl}/#{link}'/><br><span> #{cap}</span></span>"
                end
            end
        end
      end
    end
  end
  
  Liquid::Template.register_tag('fig', Jekyll::RenderFigure)
  