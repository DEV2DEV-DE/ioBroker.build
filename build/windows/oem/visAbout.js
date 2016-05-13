function fillAbout() {
    var html = '';
	html += '<ul style="font-size: 1.1em; line-height: 2em; display: inline;">';
    html += '    <li><a href="http://product.net/" target="_blank" class="translate">' + _('Web') + '</a></li>';
    html += '    <li><a href="http://forum.product.net" target="_blank" class="translate">' + _('Community') + '</a></li>';
    html += '    <li><a href="https://github.com/product/product.vis/blob/master/README.md" target="_blank" class="translate">' + _('Change log') + '</a>';
    html += '    </li>';
    html += '</ul>';

    html += '<h4>Copyright &copy; 2013-2016 </h4>';

    html += '<p>CC BY-NC License 4.0</p><a href="http://creativecommons.org/licenses/by-nc/4.0/"><img src="img/cc-nc-by.png"/></a>';
    html += '<p>' + _('license5') + '</p>';
	return html;
}
