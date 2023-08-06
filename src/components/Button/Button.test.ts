import { expect } from 'chai';
import sinon from 'sinon';
import Button from ".";

describe('Button component', () => {
    it('Button should be clickable', () => {
        const callback = sinon.stub();

        const button = new Button({ events: { click: callback }, text: 'Enter'});

        const element = button.element as HTMLElement;

        element.click();

        expect(callback.calledOnce).to.eq(true);
    });
});