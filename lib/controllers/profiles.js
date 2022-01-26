const { Router } = require('express');
const Profile = require('../models/Profile');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  const userProfile = await ProfileService.create(req.body.name);

  res.json(userProfile);
})

.get('/', async (req, res) => {
const profile = await Profile.getAll();
res.json(profile);
}
);