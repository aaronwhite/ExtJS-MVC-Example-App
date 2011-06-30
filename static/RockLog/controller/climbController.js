Ext.define('RockLog.controller.ClimbController', {
    extend: 'Ext.app.Controller',
    
    models: [
      'Climb'
    ],
    
    stores: [
      'AllClimbs'
    ],
    
    views: [
      'ListClimbs'
    ]    
});
