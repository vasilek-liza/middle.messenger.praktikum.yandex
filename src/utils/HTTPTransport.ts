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
    static API_URL = 'https://ya-praktikum.tech/api/v2';
    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`
    }

    get: HTTPMethod = (url, options) => {
        return this.request(
            this.endpoint + url,
            { ...options, method: METHODS.GET },
            options?.timeout
        );
    };
    
    post: HTTPMethod = (url, options): any => {
        return this.request(
            this.endpoint + url,
            {
                ...options,
                method: METHODS.POST,
            }
        );
    };
    
    put: HTTPMethod = (url, options) => {
        return this.request(
            this.endpoint + url,
            { ...options, method: METHODS.PUT },
            options?.timeout
        );
    };
    
    delete: HTTPMethod = (url, options) => {
        return this.request(
            this.endpoint + url,
            { ...options, method: METHODS.DELETE },
            options?.timeout
        );
    };
    
    private request = (url: string, options: RequestOptions = {}, timeout = 5000) => {
        const {headers = {}, method, data} = options;

        return new Promise(function (resolve, reject) {
        if (!method) {
            reject("No method");
            return;
        }

        const xhr = new XMLHttpRequest();
        const isGet = method === METHODS.GET;

        xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status < 400) {
                resolve(xhr.response);
            } else {
                reject(xhr.response);
            }
            }
        };

        Object.keys(headers).forEach(key => {
            xhr.setRequestHeader(key, headers[key]);
        });

        xhr.onload = function () {
            resolve(xhr);
        };

        xhr.withCredentials = true;
        xhr.responseType = "json";
        xhr.onabort = reject;
        xhr.onerror = reject;
        xhr.timeout = timeout;
        xhr.ontimeout = reject;

        if (isGet || !data) {
            xhr.send();
        } else if (data instanceof FormData) {
            xhr.send(data);
        } else {
            xhr.send(JSON.stringify(data));
        }
    })};
}
