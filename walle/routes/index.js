
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.sample = function(reg, res) {
    res.render('sample', { title: 'Automation Test Enabler'});
};