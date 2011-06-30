Ext.define('RockLog.view.ListClimbs', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.listClimbs',

    layout:'border',
    title: "RockLog - Desktop",
    
    items:[            
      {	 
          region:'west',
          width: 350,
          layout:'fit',
          split:true,            
          anchor:'100%',
          defaults: {
              border: false,            
              layout: 'fit',
              defaults: {
                  anchor: '100%'
              }
          },
          items: [
            {
               id: 'list',
               xtype: 'gridpanel',
               store : 'AllClimbs',

               viewConfig: {
                   plugins: {
                       ptype: 'gridviewdragdrop'
                   }
               },

              columns: [
                   {header: 'Difficulty',  dataIndex: 'difficulty',  flex: 1},
                   {header: 'Date', dataIndex: 'date', flex: 1}
               ],

               dockedItems: [{      
                 xtype: 'toolbar',
                 dock: 'top',
                 items: [
                   { text: 'New', action: 'new' },
                   { text: 'Remove', action: 'delete' }, 
                 ]
               }]
            }
          ]
      },
      {
        id:'contentArea',
        region:'center',
        layout:'card',
        defaults: {
	          bodyPadding: 15,
            border: false,
            autoScroll: true,
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            }
        },
        items : [
          {
            id: 'emptyPanel',
            html: 'Select a climb to get started'
          },
          {
            id: 'viewClimb',
            xtype: 'viewClimb'
          }
        ]
    }
  ]
});
