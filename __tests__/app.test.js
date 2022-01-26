const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const ProfileService = require('../lib/services/ProfileService');

describe('quotable routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should create a new profile with a random quote', async () => {
    const res = await ProfileService.create({ name: 'Test User' });

    expect(res).toEqual({
      id: expect.any(String),
      name: 'Test User',
      quote: expect.any(String),
    });
  });
});
