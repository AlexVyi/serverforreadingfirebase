module.exports = function delLists(req, res, next) {
    res.send(202, {first:"item"});
    next();
};