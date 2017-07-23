module.exports = function listLists(req, res, next) {
    res.send(202, {first:"item"});
    next();
};