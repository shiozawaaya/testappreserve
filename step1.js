functions.https.onRequest((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var output;
    var action = req.body.result.action;
    var resolvedQuery = req.body.result.resolvedQuery;
    var parameters = req.body.queryResult.parameters;
    var request = parameters['request'];
    var building =parameters['building'];
    var date = parameters['date'];
