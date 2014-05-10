
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.sample = function(reg, res) {
  res.render('sample', { title: 'Automation Test Enabler'});
};

exports.photowall = function(reg, res) {
  res.render('photowall', { title: 'Photo Wall'});
};

exports.effects = function(reg,res) {
  res.render('effects', {title: 'Effects'});
};