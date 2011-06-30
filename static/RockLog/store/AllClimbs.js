Ext.define('RockLog.store.AllClimbs', {
    extend: 'Ext.data.Store',
    model: 'RockLog.model.Climb',

    data:{
      'items': [
        {id: 1, difficulty: 'hard', date: 'yesterday'},
        {id: 2, difficulty: 'easy', date: 'yesterday'},
        {id: 3, difficulty: 'medium', date: 'last week'},
        {id: 4, difficulty: 'easy', date: 'last week'},
        {id: 5, difficulty: 'impossible', date: 'last week'},
        {id: 6, difficulty: 'cake-walk', date: 'last month'},
        {id: 7, difficulty: 'hard', date: 'last month'},
        {id: 8, difficulty: 'medium', date: 'last month'},  
        {id: 9, difficulty: 'easy', date: 'last month'},  
        {id: 10, difficulty: 'hard', date: 'last month'},              
        {id: 11, difficulty: 'hard', date: 'yesterday'},
        {id: 12, difficulty: 'easy', date: 'yesterday'},
        {id: 13, difficulty: 'medium', date: 'last week'},
        {id: 14, difficulty: 'easy', date: 'last week'},
        {id: 15, difficulty: 'impossible', date: 'last week'},
        {id: 16, difficulty: 'cake-walk', date: 'last month'},
        {id: 17, difficulty: 'hard', date: 'last month'},
        {id: 18, difficulty: 'medium', date: 'last month'},                                  
      ]
    },
        
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});