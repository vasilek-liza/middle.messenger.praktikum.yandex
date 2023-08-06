import { expect } from 'chai';
import sinon from 'sinon';
import Link from ".";

describe('Link component', () => {
    it('Link should be clickable', () => {
        const callback = sinon.stub();

        const link = new Link({ events: { click: callback }, text: 'Enter', href: '/'});

        const element = link.element as HTMLElement;

        element.click();

        expect(callback.calledOnce).to.eq(true);
    });
});