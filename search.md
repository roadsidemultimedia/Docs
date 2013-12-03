

<div style="float: left;"><input type="text" id="tipue_search_input"></div>
<div style="float: left; margin-left: 13px;"><input type="button" id="tipue_search_button"></div>
<div id="tipue_search_content"><div id="tipue_search_loading"></div></div>


<script>
$(document).ready(function() {
     $('#tipue_search_input').tipuesearch({
          'mode': 'live',
          'liveDescription': '.docs-content',
          'liveContent': '.docs-content'
     });
});
</script>