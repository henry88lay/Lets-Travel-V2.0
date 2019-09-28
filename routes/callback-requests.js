let CallbackRequest = require('../models/callback-requests').CallbackRequest;
let uniqid = require('uniqid');
let express = require('express');
let router = express.Router();

router.get('/', async (req, resp) => {
  await resp.send(CallbackRequest.find());
});
router.post('/', async (req, resp) => {
  let reqBody = req.body;
  let newRequest = new CallbackRequest({
    id: uniqid(),
    phoneNumber: reqBody.phoneNumber,
    date: new Date()
  });
  await newRequest.save();
  resp.send('Accepted');
});
router.delete('/:id', async (req, resp) => {
  CallbackRequest.deleteOne({id: req.params.id});
  resp.send('Deleted');
});

module.exports = router;
