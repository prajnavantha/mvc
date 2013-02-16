(function () {
    
    //*@protected
    var token = /^dimensions\./;
    
    /**
        The functionality of this mixin is dependent on many
        other mixins applied to wip.List. It is tightly coupled
        with that kind and this logic has been separated for
        clarity purposes.
    */
    enyo.kind({

        // ...........................
        // PUBLIC PROPERTIES
        
        //*@public
        name: "enyo.ListDimensions",
        
        //*@public
        kind: "enyo.Mixin",
        
        //*@public
        dimensions: null,

        // ...........................
        // PROTECTED PROPERTIES
        
        //*@protected
        _dimensions: null,

        // ...........................
        // COMPUTED PROPERTIES

        //*@protected
        _d_visible: enyo.Computed(function () {
            var bounds = this.get("dimensions.bounds");
            var node = this.get("dimensions.parent").hasNode();
            var outer = enyo.dom.calcPaddingExtents(node);
            return {
                width: bounds.width-(outer.left+outer.right),
                height: bounds.height-(outer.top+outer.bottom)
            };
        }),
        
        //*@protected
        _d_bounds: enyo.Computed(function () {
            var node = this.get("dimensions.parent").hasNode();
            var bounds = enyo.dom.getBounds(node);
            return bounds;
        }),
        
        //*@protected
        _d_list: enyo.Computed(function () {
            var len = this.get("length");
            var row = this.get("dimensions.row").height;
            return {height: len*row};
        }),
        
        //*@protected
        _d_buffer1: enyo.Computed(function () {
            return {height: 0};
        }),
        
        //*@protected
        _d_buffer2: enyo.Computed(function () {
            return {height: 0};
        }),
        
        //*@protected
        _d_active: enyo.Computed(function () {
            
        }),
        
        //*@protected
        _d_row: enyo.Computed(function () {
            // FOR TESTING
            return {height: 18};
        }),
        
        //*@protected
        _d_parent: enyo.Computed(function () {
            return this.parent || this;
        }),

        // ...........................
        // PUBLIC METHODS

        // ...........................
        // PROTECTED METHODS

        //*@protected
        create: function () {
            this._init_dimensions();
        },
        
        //*@protected
        _init_dimensions: function () {
            // cache
            this._dimensions = {};
            // add hook for requests for dimensions
            this.hook("get", token, this._get_dimensions);
        },
        
        //*@protected
        _get_dimensions: function (path) {
            return this.get("_d_"+path.slice(path.indexOf(".")+1));
        }

        // ...........................
        // OBSERVERS

    });

}());