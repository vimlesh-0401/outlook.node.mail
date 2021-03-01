var oneDriveAPI = require('onedrive-api');

var express = require('express');
var router = express.Router();
var authHelper = require('../helpers/auth');

router.get('/', async function(request, response, next) {
  const accessToken = await authHelper.getAccessToken(request.cookies, response);
  const userName = request.cookies.graph_user_name;

  if (accessToken && userName) {
    const accessToken = await authHelper.getAccessToken(request.cookies, response);
    // oneDriveAPI.items.listChildren({
    //   accessToken: accessToken,
    //   itemId: 'root',
    //   shared: true,
    //   user: 'dkatavic'
    // }).then((childrens) => {
    //   // list all children of dkatavics root directory
    //   console.log(childrens);
    //   response.json(childrens)
    //   // returns body of https://dev.onedrive.com/items/list.htm#responseponse
    // })
    response.render('drives',{
      accessToken: accessToken
    });
  } else {
    response.redirect('/');
  }
});

module.exports = router;