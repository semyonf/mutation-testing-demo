const
    expect = require('chai').expect,
    app = require('../app');

describe('Site', () => {
    it('can be visited by an adult', () => {
        expect(app.userIsOldEnough({ age: 23 })).to.equal(true);
    });

    it('can not be visited by a child', () => {
        expect(app.userIsOldEnough({ age: 13 })).to.equal(false);
    });
});
