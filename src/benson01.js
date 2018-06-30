var benson01Layer = cc.Layer.extend({
    p3: null,
    status: null,
    isOn: false,
    poker7: null,
    poker4: null,
    ctor:

        function () {

            this._super();
            //method 1
            this.p3 = new cc.Sprite("res/p3.jpg");
            this.p3.attr({
                x: cc.winSize.width / 8,
                y: cc.winSize.height * 7 / 8
            });
            this.addChild(this.p3);

            //method 2          三元運算((boolean)?值1:值2)
            this.status = new cc.Sprite(this.isOn ? res.status_on : res.status_off);
            this.status.attr({
                x: cc.winSize.width * 7 / 8,
                y: cc.winSize.height * 7 / 8
            });
            this.addChild(this.status);

            this.poker7 = new cc.Sprite(res.poker_png, cc.rect(221, 711, 222, 218));
            this.poker7.attr({
                x: cc.winSize.width / 4,
                y: cc.winSize.height / 2,
                rotation: -90
            });
            this.addChild(this.poker7);

            cc.spriteFrameCache.addSpriteFrames(
                res.poker_plist, res.poker_png);
            this.poker4 = new cc.Sprite("#pokers_back.png");
            this.poker4.attr({
                x: cc.winSize.width * 3 / 4,
                y: cc.winSize.height / 2
            });
            this.poker4.setScale(0.5, 0.5);
            this.addChild(this.poker4);


            this.myMouseListener(this);

            return true;
        }

    ,

    myMouseListener: function (layer) {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (event) {
                console.log("ok");
                layer.isOn = !layer.isOn;
                layer.status.setTexture(
                    layer.isOn ? res.status_on : res.status_off);
            }
        }, layer);

    }


});

var benson01Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new benson01Layer();
        this.addChild(layer);
    }
});

