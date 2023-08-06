import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { HTTPTransport } from './HTTPTransport';
import { expect } from 'chai';

describe('HTTPTransport', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    let instance: HTTPTransport;
    const requests: SinonFakeXMLHttpRequest[] = [];

    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        global.XMLHttpRequest = xhr;

        xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
            requests.push(request);
        });

        instance = new HTTPTransport('/auth');
    });

    afterEach(() => {
        requests.length = 0;
    })

    it('method get() should be called with get method', () => {
        instance.get('/user');

        const [request] = requests;

        expect(request.method).to.equal('GET');
    });
});