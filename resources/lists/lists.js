module.exports = function listLists(req, res, next) {
    res.send( {first:"item"});
    next();
};