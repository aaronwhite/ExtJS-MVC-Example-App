Ext.application({
    name: 'RockLog',
    appFolder : '/static/RockLog',

    controllers: [      
      'ClimbController'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
              {
                  region: 'center',
                  xtype: 'listClimbs'
              }
            ]
        });
    }
});
