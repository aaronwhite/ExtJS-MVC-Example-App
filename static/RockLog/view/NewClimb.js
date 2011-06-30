Ext.define('RockLog.view.NewClimb', {
    extend: 'Ext.window.Window',
    alias : 'widget.newClimb',

    title : 'New Climb',
    layout: 'fit',
    autoShow: true,
    
    items : [
      {
        xtype: 'climbForm',
        bodyPadding: 10,
        width: 400,
        height: 80,
        defaults: {
            anchor: '100%',
            labelWidth: 100
        },
        autoHeight: true,
        autoScroll: true,        
      }
    ],
    
    buttons: [      
      {
        text: 'Cancel',
        action: 'cancel'
      },
      {
          text: 'Save',
          action: 'save'
      }     
   ]
});