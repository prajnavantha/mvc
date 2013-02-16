enyo.kind({
    
    // ...........................
    // PUBLIC PROPERTIES
    
    //*@public
    name: "wip.ListScrollSupport",
    
    //*@public
    kind: "enyo.Mixin",
    
    // ...........................
    // PROTECTED PROPERTIES
    
    // ...........................
    // COMPUTED PROPERTIES
    
    //*@protected
    elements: enyo.Computed(function () {
        return enyo.filter((this.controls || []), function (control) {
            return control instanceof this.child;
        }, this);
    }),
    
    // ...........................
    // PUBLIC METHODS
    
    // ...........................
    // PROTECTED METHODS
    
    //*@protected
    create: function () {
        this.initScroller();
    },
    
    //*@protected
    initScroller: function () {
        var kind = this.scroller || "enyo.Scroller";
        if ("string" === typeof kind) {
            kind = enyo.getPath(kind);
        }
        this.createChrome([{name: "scroller", classes: "enyo-fill", kind: kind}]);
    }
    
    // ...........................
    // OBSERVERS

});
