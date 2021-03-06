module.exports = function(config) {
  return function(req, res) {
    req.session.project = {
      migrate: {
        anonymousId: req.query.anonymousId,
        meta: {
          title: req.query.title,
          date_created: req.query.now,
          date_updated: req.query.now
        }
      }
    };

    var loginType = "&action=" + (req.query.signup ?  "signup" : "signin");
    var state = "&state=" + req.cookies.state;

    res.redirect(301, config.loginURL + state + loginType);
  };
};
