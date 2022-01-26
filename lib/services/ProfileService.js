const Profile = require('../models/Profile');
const { getFuturamaQuote } = require('../utils/futuramaApi');

module.exports = class ProfileService {
  static async getQuote() {
    const quote = await getFuturamaQuote();
    return quote[0] ;
  }
  
  static async create({ name }) {
    // TODO: Implement me!
    const { quote } = await ProfileService.getQuote();
    
    const newProfile = await Profile.insert({
      name,
      quote,
    });
    
    return newProfile;
  }
};
