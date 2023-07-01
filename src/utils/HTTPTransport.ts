type HTTPMethod = (url: string, options?: RequestOptions) => Promise<unknown>

export interface RequestOptions {
    headers?: Record<string, string>;
    method?: string;
    data?: any;
    timeout?: number;
}
    
const METHODS: Record<string, string> = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};
    
function queryStringify(data: Record<string, unknown>) {
    if (typeof data !== 'object') {
        throw new Error('error');
    }

    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
}
    
export class HTTPTransport {
    get: HTTPMethod = (url, options) => {
        return this.request(
            url,
            { ...options, method: METHODS.GET },
            options?.timeout
        );
    };
    
    post: HTTPMethod = (url, options) => {
        return this.request(
            url,
            { ...options, method: METHODS.POST },
            options?.timeout
        );
    };
    
    put: HTTPMethod = (url, options) => {
        return this.request(
            url,
            { ...options, method: METHODS.PUT },
            options?.timeout
        );
    };
    
    delete: HTTPMethod = (url, options) => {
        return this.request(
            url,
            { ...options, method: METHODS.DELETE },
            options?.timeout
        );
    };
    
    request = (url: string, options: RequestOptions = {}, timeout = 5000) => {
        const { 
            headers = {}, 
            method, 
            data 
        } = options;
    
        return new Promise(function (resolve, reject) {
            if (!method) {
                reject('No method');
                return;
            }
            
            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;
    
            xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);
    
            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });
    
            xhr.onload = function () {
                resolve(xhr);
            };
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            xhr.timeout = timeout;
    
            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}
