!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(c){return a.githubApi=b(c),a.githubApi}):"object"==typeof exports?module.exports=b(require("jquery")):a.githubApi=b(a.jQuery)}(this,function(a){"use strict";function b(a,b){var d={};return d.milestones={findAll:f.bind(null,a,b)},d.issues={findAll:g.bind(null,a,b)},d.collaborators={findAll:h.bind(null,a,b)},d.issue=c.bind(null,a,b),d}function c(a,b,c){var d={};return d.comments={findAll:i.bind(null,a,b,c)},d}function d(b){return a.get("https://api.github.com"+b)}function e(a){return d("/orgs/"+a+"/members")}function f(a,b){return d("/repos/"+a+"/"+b+"/milestones")}function g(a,b){return d("/repos/"+a+"/"+b+"/issues?state=all&sort=updated")}function h(a,b){return d("/repos/"+a+"/"+b+"/collaborators")}function i(a,b,c){return d("/repos/"+a+"/"+b+"/issues/"+c+"/comments")}var j={};return j.org=function(a){var c={};return c.members={findAll:e.bind(null,a)},c.repo=b.bind(null,a),c},j.user=function(a){var c={};return c.repo=b.bind(null,a),c},j});