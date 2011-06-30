Ext.define('RockLog.view.ClimbForm', {
    extend: 'Ext.form.Panel',
    alias : 'widget.climbForm',
    trackResetOnLoad: true,
    items : [      
      {
         xtype:          'combo',
         mode:           'local',
         value:          'Hard',
         triggerAction:  'all',
         forceSelection: true,
         editable:       false,
         fieldLabel:     'Difficulty',
         name:           'difficulty',
         displayField:   'difficulty',
         valueField:     'difficulty',
         queryMode: 'local',
         store:          Ext.create('Ext.data.Store', {
           fields: ['difficulty'],
           data : [
             {'difficulty' : 'Hard'},
             {'difficulty' : 'Medium'},
             {'difficulty' : 'Easy'},             
           ]
         })
      },
            
      {
        xtype: 'textfield',    
        name: 'date',
        fieldLabel: 'Date',           
      }
    ]
});