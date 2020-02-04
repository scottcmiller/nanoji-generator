function Dimension(width, height) {
    this.width  = width;
    this.height = height;
};

function Coordinate(x, y){
    this.x = x;
    this.y = y;
};

function Emoji(name, size, center, graphic){
    this.name    = name;
    this.size    = size;
    this.center  = center;
    this.graphic = graphic;

    var EmojiBaseDimension = function (b) {
        switch(this.name){
            case "toungue_out":
            {
                this.size = Dimension(32, 34);
                center    = CenterOffset(0,2);
            } break;
            case "devil":
            {
                this.size = Dimension(32, 34);
                center    = CenterOffset(0,-2);
            }break;
            case "angle":
            {
                this.size = Dimension(32, 33);
                center    = CenterOffset(0, -1);
            }break;
            default :
            {
                this.size   = b.size;
                this.center = b.center;
            }
        }
    };
    var CenterOffset = function (x_offset, y_offset){
        this.center.x = this.center.x + x_offset;
        this.center.y = this.center.y + y_offset;
    }
    
    var NewDimension = function(newLogoWidth, oldLogoWidth){
        percentChange = newLogoWidth / oldLogoWidth;

        this.size.width  = this.size.width * percentChange;
        this.size.height = this.size.height * perfecentChange;

        this.center.x  = this.center.x * percentChange;
        this.center.y = this.center.y * perfecentChange;
    }
};

function Logo(size, anchorpoints, num_of_points, graphic){
    this.size          = size,
    this.anchorpoints  = anchorpoints,
    this.num_of_points = num_of_points,
    this.graphic       = graphic

    var NewDimension = function (newLogoWidth){
        percentChange = newLogoWidth / this.size.width;

        this.size.width  = this.size.width * percentChange;
        this.size.height = this.size.height * percentChange;

        for(i = 0; i < num_of_points; i++){
            this.anchorpoints[i].x =  this.anchorpoints[i].x * percentChange;
            this.anchorpoints[i].y =  this.anchorpoints[i].y * percentChange;
        }
    }
}

function EmojiBase(size, center){
    this.size = size;
    this.center = center;
}


emoji_base = new EmojiBase(new Dimension(32, 32), new Center(16, 16));
logo_base  = new Dimension(224.5, 961);


