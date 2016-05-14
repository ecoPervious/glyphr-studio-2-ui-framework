function pickerpanel_hideAll() {
    var p1 = document.getElementById('pickerpanel-primary');
    var p2 = document.getElementById('pickerpanel-secondary');
    var p3 = document.getElementById('pickerpanel-tertiary');
    
    if(p1) p1.style.display = 'none';    
    if(p2) p2.style.display = 'none';    
    if(p3) p3.style.display = 'none';
    
    console.log('pickerpanel_hideAll');
}

function pickerpanel_show(id) {
    pickerpanel_hideAll();
    var p = document.getElementById(id);
    if(p) p.style.display = 'flex';
    
    console.log('pickerpanel_show: ' + id);
}

function drawPanelControls() {
    var re = '';
    re += '<button onclick="alert(\'search box for glyphs\');">';
    re += '<svg x="0px" y="0px" width="12px" height="12px" viewBox="0 0 12 12" enable-background="new 0 0 12 12">';
    re += '<path d="M7.5,0C5.015,0,3,2.015,3,4.5c0,0.987,0.327,1.892,0.866,2.634L0,11v1h1l3.866-3.866C5.608,8.673,6.513,9,7.5,9 C9.985,9,12,6.985,12,4.5S9.985,0,7.5,0z M7.5,7.6c-1.709,0-3.1-1.391-3.1-3.1s1.391-3.1,3.1-3.1s3.1,1.391,3.1,3.1 S9.209,7.6,7.5,7.6z"/>';
    re += '</svg>';
    re += '</button>';
    re += '<button onclick="alert(\'popout panel to a new window\');">';
    re += '<svg x="0px" y="0px" width="12px" height="12px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" xml:space="preserve">';
    re += '<polygon points="3,0.6 3,2 9,2 1,10 1,11 2,11 10,3 10,8 11.4,8 11.4,0.6 "/>';
    re += '</svg>';
    re += '</button>';
    re += '<button onclick="event.stopPropagation(); pickerpanel_hideAll();">';
    re += '<svg x="0px" y="0px" width="12px" height="12px" viewBox="0 0 12 12" enable-background="new 0 0 12 12"><polygon points="12,1 11,0 6,5 1,0 0,1 5,6 0,11 1,12 6,7 11,12 12,11 7,6 "/></svg>';
    re += '</button>';
    
    return re;
}

function drawGlyphTiles() {
    var basiclatin_order = ['0x0041','0x0042','0x0043','0x0044','0x0045','0x0046','0x0047','0x0048','0x0049','0x004A','0x004B','0x004C','0x004D','0x004E','0x004F','0x0050','0x0051','0x0052','0x0053','0x0054','0x0055','0x0056','0x0057','0x0058','0x0059','0x005A','0x0061','0x0062','0x0063','0x0064','0x0065','0x0066','0x0067','0x0068','0x0069','0x006A','0x006B','0x006C','0x006D','0x006E','0x006F','0x0070','0x0071','0x0072','0x0073','0x0074','0x0075','0x0076','0x0077','0x0078','0x0079','0x007A','0x0030','0x0031','0x0032','0x0033','0x0034','0x0035','0x0036','0x0037','0x0038','0x0039','0x0021','0x0022','0x0023','0x0024','0x0025','0x0026','0x0027','0x0028','0x0029','0x002A','0x002B','0x002C','0x002D','0x002E','0x002F','0x003A','0x003B','0x003C','0x003D','0x003E','0x003F','0x0040','0x005B','0x005C','0x005D','0x005E','0x005F','0x0060','0x007B','0x007C','0x007D','0x007E','0x0020'];
	
    var basiclatin_names = {
	'0x0020': 'Space', '0x0021': 'Exclamation mark', '0x0022': 'Quotation mark', '0x0023': 'Number sign, ash tag', '0x0024': 'Dollar sign', '0x0025': 'Percent sign', '0x0026': 'Ampersand', '0x0027': 'Apostrophe', '0x0028': 'Left parenthesis', '0x0029': 'Right parenthesis', '0x002A': 'Asterisk', '0x002B': 'Plus sign', '0x002C': 'Comma', '0x002D': 'Hyphen-minus', '0x002E': 'Full stop', '0x002F': 'Slash (Solidus)', '0x0030': 'Digit Zero', '0x0031': 'Digit One', '0x0032': 'Digit Two', '0x0033': 'Digit Three', '0x0034': 'Digit Four', '0x0035': 'Digit Five', '0x0036': 'Digit Six', '0x0037': 'Digit Seven', '0x0038': 'Digit Eight', '0x0039': 'Digit Nine', '0x003A': 'Colon', '0x003B': 'Semicolon', '0x003C': 'Less-than sign', '0x003D': 'Equal sign', '0x003E': 'Greater-than sign', '0x003F': 'Question mark', '0x0040': 'At sign', '0x0041': 'Latin Capital Letter A', '0x0042': 'Latin Capital Letter B', '0x0043': 'Latin Capital Letter C', '0x0044': 'Latin Capital Letter D', '0x0045': 'Latin Capital Letter E', '0x0046': 'Latin Capital Letter F', '0x0047': 'Latin Capital Letter G', '0x0048': 'Latin Capital Letter H', '0x0049': 'Latin Capital Letter I', '0x004A': 'Latin Capital Letter J', '0x004B': 'Latin Capital Letter K', '0x004C': 'Latin Capital Letter L', '0x004D': 'Latin Capital Letter M', '0x004E': 'Latin Capital Letter N', '0x004F': 'Latin Capital Letter O', '0x0050': 'Latin Capital Letter P', '0x0051': 'Latin Capital Letter Q', '0x0052': 'Latin Capital Letter R', '0x0053': 'Latin Capital Letter S', '0x0054': 'Latin Capital Letter T', '0x0055': 'Latin Capital Letter U', '0x0056': 'Latin Capital Letter V', '0x0057': 'Latin Capital Letter W', '0x0058': 'Latin Capital Letter X', '0x0059': 'Latin Capital Letter Y', '0x005A': 'Latin Capital Letter Z', '0x005B': 'Left Square Bracket', '0x005C': 'Backslash', '0x005D': 'Right Square Bracket', '0x005E': 'Circumflex accent', '0x005F': 'Low line', '0x0060': 'Grave accent', '0x0061': 'Latin Small Letter A', '0x0062': 'Latin Small Letter B', '0x0063': 'Latin Small Letter C', '0x0064': 'Latin Small Letter D', '0x0065': 'Latin Small Letter E', '0x0066': 'Latin Small Letter F', '0x0067': 'Latin Small Letter G', '0x0068': 'Latin Small Letter H', '0x0069': 'Latin Small Letter I', '0x006A': 'Latin Small Letter J', '0x006B': 'Latin Small Letter K', '0x006C': 'Latin Small Letter L', '0x006D': 'Latin Small Letter M', '0x006E': 'Latin Small Letter N', '0x006F': 'Latin Small Letter O', '0x0070': 'Latin Small Letter P', '0x0071': 'Latin Small Letter Q', '0x0072': 'Latin Small Letter R', '0x0073': 'Latin Small Letter S', '0x0074': 'Latin Small Letter T', '0x0075': 'Latin Small Letter U', '0x0076': 'Latin Small Letter V', '0x0077': 'Latin Small Letter W', '0x0078': 'Latin Small Letter X', '0x0079': 'Latin Small Letter Y', '0x007A': 'Latin Small Letter Z', '0x007B': 'Left Curly Bracket', '0x007C': 'Vertical bar', '0x007D': 'Right Curly Bracket', '0x007E': 'Tilde'
    };
    
    var re = '';
    var glyphchar = '';
    var glyphhex = '';
    
    for(var g=0; g<basiclatin_order.length; g++){
        glyphhex = basiclatin_order[g];
        glyphchar = String.fromCharCode(glyphhex);
        
        if(glyphchar === 'G') re += '<div class="glyphtile selected"'
        else re += '<div class="glyphtile"'
        
        re += 'title="';
        re += basiclatin_names[glyphhex] + '\n' + glyphhex;
        re += '"><div class="preview">';
        re += glyphchar;
        re += '</div><div class="name">';
       
        if(glyphhex === '0x0020') re += '<span style="font-size:.8em;">space</span>';
        else re += glyphchar;
        
        re += '</div></div>';
    }
    
    return re;
}