import { Router } from './Router';
import Block from './Block';

import { expect } from 'chai';
import sinon from 'sinon';

const fake = sinon.fake.returns(document.createElement('div'));
const fakeComponent = class extends Block {
    getContent = fake;
};

describe('Router', () => {
    it('Works correctly use()', () => {
        const res = Router.use('/', fakeComponent);
    
        expect(res).to.equal(Router);
    });

    it('Works correctly start()', () => {
        Router.use('/', fakeComponent);
        Router.start();
    
        expect(fake.callCount).to.equal(1);
    });
    
    it('Works correctly back()', () => {
        Router.back();
    
        expect(fake.callCount).to.equal(1);
    });
});
