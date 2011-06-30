Ext.define('RockLog.controller.ClimbController', {
    extend: 'Ext.app.Controller',
    
    models: [
      'Climb'
    ],
    
    stores: [
      'AllClimbs'
    ],
    
    views: [
      'ListClimbs',
      'ViewClimb',
    ],  
    
    refs: [    
      {
        ref: 'contentArea',
        selector: '#contentArea'
      },
      {
        ref: 'viewClimb',
        selector: '#viewClimb'
      }
    ],
    
    init: function() {
      this.control({

        '#list': {
          itemclick: this.showClimb
        }
                
      });
    },
    
    showClimb: function(grid, model) {
      this.getViewClimb().update(model.data);              
      this.getContentArea().getLayout().setActiveItem('viewClimb');
    }
});
