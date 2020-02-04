 function loadSVG(emoji_x, emoji_y, emoji_str, emoji_dot_num) 
 {
     var center_coords = (function(x, y){
        var cx = x;
        var cy = y;
    })

    var emoji = (function(x, y, str){
        var center = {cx : x, cy : y};
        var svgStr = str;
    })

    //var onDot = ["none", "none", "none", "none", "none", "none", "none"]

    var heart_eyes_emoji = {
        id : "heart_emoji",
        cx : 16.51,
        cy : 16.74,
        str: 
            "<style>.heart_eyes-1 {fill: #ffcc4d;}.heart_eyes-2 {fill: #66471b;}.heart_eyes-3 {fill: #e75b70;}</style>"
            +'<circle class="heart_eyes-1" cx="16.51" cy="16.74" r="16"/>'
            +'<path class="heart_eyes-2" d="M16.51,20.38a32.51,32.51,0,0,1-6.92-.77c-.52-.1-1.54,0-1.54,1.54,0,3.08,3.54,6.93,8.46,6.93S25,24.23,25,21.15c0-1.54-1-1.64-1.54-1.54a32.51,32.51,0,0,1-6.92.77"/>'
            +'<path class="heart_eyes-3" d="M15.24,2.93a4.38,4.38,0,0,0-8.35.24,4.38,4.38,0,0,0-6.2,6C2.53,12.49,7.82,14.86,11,14.88c2.48-2,5.12-7.2,4.43-11A4.46,4.46,0,0,0,15.24,2.93Z"/>'
            +'<path class="heart_eyes-3" d="M17.78,2.93a4.38,4.38,0,0,1,8.35.24,4.38,4.38,0,0,1,6.65,5.05,4.46,4.46,0,0,1-.44.9C30.49,12.49,25.2,14.86,22,14.88c-2.48-2-5.12-7.2-4.43-11A4.49,4.49,0,0,1,17.78,2.93Z"/>',
    }
    
    var halo_emoji = {
        id : "halo_emoji",
        cx : 16,
        cy : 17.09,
        str:"<style>.angel-1 {fill: #ffcc4d;}.angel-2 {fill: #66471b;}.angel-3 {fill: #65abde;}</style>"
            +"<circle class=\"angel-1\" cx=\"16\" cy=\"17.09\" r=\"16\"/>"
            +"<path class=\"angel-2\" d=\"M24.83,21.34a.47.47,0,0,0-.6,0A15.29,15.29,0,0,1,16,24a15.34,15.34,0,0,1-8.19-2.73.47.47,0,0,0-.69.62A10.8,10.8,0,0,0,16,26.87a10.8,10.8,0,0,0,8.87-4.94A.47.47,0,0,0,24.83,21.34Z\"/>"
            +"<path class=\"angel-3\" d=\"M16,0C7.72,0,1,1.59,1,4.71S7.72,9.43,16,9.43,31.1,7.84,31.1,4.71,24.36,0,16,0Zm0,6.6C9.8,6.6,4.75,6.07,4.75,4.24S9.8,1.89,16,1.89s11.29.53,11.29,2.36S22.28,6.6,16,6.6Z\"/>"
            +"<path class=\"angel-1\" d=\"M8.86,5.88c-3.2-1.25-2.35-1.88-.06-3A16,16,0,0,1,23.57,3c.65.35,1.35.83,2,1.27\"/>"
            +"<path class=\"angel-2\" d=\"M23.57,17.91a.94.94,0,0,1-.89-.64c-.19-.57-1-2.18-1.93-2.18S19,16.81,18.82,17.27a.94.94,0,1,1-1.78-.6c.12-.36,1.23-3.47,3.72-3.47s3.6,3.12,3.72,3.47a.94.94,0,0,1-.89,1.24Z\"/>"
            +"<path class=\"angel-2\" d=\"M14.16,17.91a.94.94,0,0,1-.89-.64c-.19-.57-1-2.18-1.93-2.18S9.56,16.81,9.4,17.27a.94.94,0,1,1-1.79-.6c.12-.36,1.23-3.47,3.72-3.47s3.6,3.12,3.72,3.47a.94.94,0,0,1-.89,1.24Z\"/>"
    }
    var tongue_out_emoji = {
        id : "halo_emoji",
        cx : 16,
        cy : 16,
        str:'<style>.tongue-1{fill: #ffcc4d;}.tongue-2 {fill: #66471b;}.tongue-3 {fill: #e75b70;}</style>'
            +'<circle class="tongue-1" cx="16" cy="16" r="16"/>'
            +'<ellipse class="tongue-2" cx="9.88" cy="14.62" rx="2.35" ry="3.31"/>'
            +'<ellipse class="tongue-2" cx="22.12" cy="14.62" rx="2.35" ry="3.31"/>'
            +'<path class="tongue-2" d="M5.65,20.76c0,3.74,4.33,8.5,10.35,8.5s10.35-4.72,10.35-8.5A46.89,46.89,0,0,1,5.65,20.76Z"/>'
            +'<path id="tongue" class="tongue-3" d="M10.35,22.53v5.75A5.43,5.43,0,0,0,16,33.94a5.43,5.43,0,0,0,5.65-5.67V22.57A29.3,29.3,0,0,1,10.35,22.53Z"/>'
    }

    // Getting
/*var xforms = emoji_4.getAttribute('transform');
var parts  = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(xforms);
var firstX = parts[1],
    firstY = parts[2];
    */

document.createAttribute("transform")       // Create a "class" attribute                         // Set the value of the class attribute
//emoji_4.setAttribute('transform', 'translate(96.24 30.96)');

//var emoji_6 = document.getElementById("emoji_6");
//emoji_6.setAttribute('transform', 'translate(159.86 31.33)');


function setEmoji(){

    
    var x = emoji_x;
    var y = emoji_y;
    var str = emoji_str;
    var dotID = emoji_dot_num;
    var emojiContainer;
    var emoji_center;
    var newCenter;
    var translateStr;

    console.log(x, y, str, dotID)

    emoji_center = {cx: x, cy: y};

    var dot_1 = {cx : 16.03, cy: 80.07};
    var dot_2 = {cx : 48.07, cy: 48.05};
    var dot_3 = {cx : 80.09, cy: 16.02};
    var dot_4 = {cx : 112.24,cy: 48.05};
    var dot_5 = {cx : 144.29,cy: 80.1};
    var dot_6 = {cx : 176.37,cy: 48.07};
    var dot_7 = {cx : 208.5, cy: 16.07};

    switch (dotID){
        case "dot_1":
            newCenter = {cx : (dot_1.cx - emoji_center.cx), cy : (dot_1.cy - emoji_center.cy)};
                emojiContainer = document.getElementById("emoji_1")
            break;
        case "dot_2":
            newCenter = {cx : (dot_2.cx - emoji_center.cx), cy : (dot_2.cy - emoji_center.cy)};
            emojiContainer = document.getElementById("emoji_2")
            break;
        case "dot_3":
            newCenter = {cx : (dot_3.cx - emoji_center.cx), cy : (dot_3.cy - emoji_center.cy)};
            emojiContainer = document.getElementById("emoji_3")
            break;
        case "dot_4":
            newCenter = {cx : (dot_4.cx - emoji_center.cx), cy : (dot_4.cy - emoji_center.cy)};
            emojiContainer = document.getElementById("emoji_4")
            break;
        case "dot_5":
            newCenter = {cx : (dot_5.cx - emoji_center.cx), cy : (dot_5.cy - emoji_center.cy)};
            emojiContainer = document.getElementById("emoji_5")
            break;
        case "dot_6":
            newCenter = {cx : (dot_6.cx - emoji_center.cx), cy : (dot_6.cy - emoji_center.cy)};
            emojiContainer = document.getElementById("emoji_6")
            break;
        case "dot_7":
            newCenter = {cx : (dot_7.cx - emoji_center.cx), cy : (dot_7.cy - emoji_center.cy)};
                emojiContainer = document.getElementById("emoji_7")
            break;
    }

    translateStr = 'translate(' + newCenter.cx + ' ' + ' ' + newCenter.cy + ')';
    emojiContainer.setAttribute('transform', translateStr);
    emojiContainer.innerHTML = str;
    document.getElementsByClassName("grid-container").style.background = (document.getElementById("svg-main").innerHTML);
}



/*var dot_center_coords = {
    dot_1 : center_coords("16.03", "80.07"),
    dot_2 : center_coords("48.07", "48.05"),
    dot_3 : center_coords("80.09", "16.02"),
    dot_4 : center_coords("112.24","48.05"),
    dot_5 : center_coords("144.29","80.1"),
    dot_6 : center_coords("176.37", "48.07"),
    dot_7 : center_coords("208.5", "16.07"),
}; */



// Setting
    //emoji_4 = setAttribute('transform', 'translate(96.24 30.96)')
/*
    //var myID  = document.getElementById("output");
    //var svg = document.getElementById("nanoji");
    //var s = new XMLSerializer();
    //var str = s.serializeToString(svg);

    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'images/nanoji_2.svg', true)
    ajax.send()
    ajax.onload = function(e) {
        //d3.select("#output").html(str);
        //var tongue_out = ajax.responseText;
        //var_dot_1.html(tounge_out);
        d3.select("#logo").html(ajax.responseText);
    }

    var objTag = document.getElementById("nanoji_2");
    if (objTag != null)
    {   
        //objTag.setAttribute('data', 'http://localhost:8080/images/nanoji_labeled.svg');
        objTag.setAttribute('id', "nanoji");
        //d3.select("#output").html(str);
        var nanoji = d3.select("#nanoji_2");
        var dot_1 = nanoji.select("#dot_1");
        var location = var_dot_1.select(".cls-1");
    }
    
    var ajax2;
    ajax2 = new XMLHttpRequest()
    ajax2.open('GET', 'images/tongue_out.svg', true)
    ajax2.send()
    ajax2.onload = function(e) {
        d3.select("#tongue").html(ajax2.responseText);
        //var center = { X : tongue.attr("cx"), Y : tongue.attr("cy") }; 
        //d3.select("#output").html(center.X + "," + center.Y);
        //var tongue_out = ajax.responseText;
        //var_dot_1.html(tounge_out);
    }
    

    var ajax3;
    ajax3 = new XMLHttpRequest()
    ajax3.open('GET', 'images/emoji_joy.svg', true)
    ajax3.send()
    ajax3.onload = function(e) {
        d3.select("#joy").html(ajax3.responseText);
        emoji_joy = d3.select("#joy").select("#emoji_joy");
        //var center = { X : tongue.attr("cx"), Y : tongue.attr("cy") };
        dot_1 = emoji_joy;
        //d3.select("#output").html(center.X + "," + center.Y);

        //var tongue_out = ajax.responseText;
        //var_dot_1.html(tounge_out);

    }
    //var tounge_out_css = document.getElementById("tongue_out");

    //tongue_out_css.style.transform = ("translate(0px, 100px)");
    */
}