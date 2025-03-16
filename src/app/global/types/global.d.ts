declare global {
    type Theme = 'light' | 'dark';
    type Func<T extends Array<unknown> = [], R = unknown> = (...args: T) => R;
}

export {}