Ext.define('RockLog.view.ViewClimb', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.viewClimb',

    initComponent: function(){
  		Ext.apply(this, {
  			tpl: new Ext.XTemplate(
  			    '<div class="climb">',
  			        '<h2>Difficulty</h2>',
  			        '<p class="content-summary">{difficulty}</p>',
  			        '<h2>Date</h2>',  			        
  			        '<p class="content-summary">{date}</p>',  			        
  			    '</div>'
        	)
  		});  			
  		
		  this.callParent(arguments);
    }  
});