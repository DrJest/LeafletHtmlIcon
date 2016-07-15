      /**
       * Plugin for adding arbitrary HTML markers to a Leaflet map
       * https://github.com/dwnoble/LeafletHtmlIcon
       * 
       * Public domain
       * 
       */

      L.HtmlIcon = L.Icon.extend({
        options: {
          /*
          html: (String) (required)
          css: (Object)
          iconAnchor: (Point)
          popupAnchor: (Point)
          */
        },

        initialize: function (options) {
          L.Util.setOptions(this, options);
        },

        createIcon: function () {
          var div = document.createElement('div');
          div.innerHTML = this.options.html;
          div.style.overflow = "hidden";
          div.style.position = "absolute";
          div.style.top = "0px";
          div.style.left = "0px";
          div.style.margin = "0px";
          div.style.padding = "0px";
          for(var i in this.options.css) {
          	div.style[i] = this.options.css[i];
          }
          if (this.options.iconSize) {
            div.style.width = this.options.iconSize[0]+"px";
            div.style.height = this.options.iconSize[1]+"px";
          }
          if(this.options.iconAnchor) {
            div.style.marginTop = -this.options.iconAnchor[0]+"px";
            div.style.marginLeft = -this.options.iconAnchor[1]+"px";
          }
          return div;
        },

        createShadow: function () {
          return null;
        }
      });
