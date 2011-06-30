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
      'ClimbForm',
      'NewClimb'
    ],  
    
    refs: [
      {
        ref: 'climbList',
        selector:'#list'
      },      
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
        },
        
        '#list button[action=new]': {
          click: this.newClimb
        },
        
        '#list button[action=delete]': {
          click: this.deleteClimb
        },
        
        'newClimb button[action=cancel]': {
          click: this.cancelWindow
        },
        
        'newClimb button[action=save]': {
          click: this.saveNewClimb
        }        
        
      });
    },
    
    showClimb: function(grid, model) {
      this.getViewClimb().update(model.data);              
      this.getContentArea().getLayout().setActiveItem('viewClimb');
    },
    
    newClimb: function() {
      var view = Ext.widget('newClimb');
    },
    
    saveNewClimb: function(button) {
       var win = button.up('window')
       var form = win.down('form');

       if(form.getForm().isValid()){
         var values = form.getValues();
         this.getAllClimbsStore().add(values);              
          win.close();        
       }    
     },    
    
    cancelWindow : function(button){
      var win = button.up('window')
      win.close();
    },
    
    deleteClimb: function(){
      var _this = this;

      Ext.Msg.confirm("You sure?", 
           "Really want to delete the selected item? This can't be undone.", 
           function(btn, text){
               if (btn == 'yes'){                                          
                 var row = _this.getClimbList().getSelectionModel().getSelection()[0]                 
                 _this.getClimbList().getStore().remove(row);
                 _this.getContentArea().getLayout().setActiveItem('emptyPanel');
               }
           }
       );

    },
});
