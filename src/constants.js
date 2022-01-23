/**********************
 * utilities
 *********************/

export const IS_BROWSER = typeof window !== 'undefined';
export const IS_PROD = process.env.NODE_ENV === 'production';
export const IS_TEST = process.env.NODE_ENV === 'test';

/**********************
 * timestamp
 *********************/

export const DATE = new Date();