var server = require('./server');
var resources = require('./resources');



server.get('/lists', resources.lists.lists);
server.put('/lists/:list', resources.lists.create);
server.del('/lists/:list', resources.lists.del);

