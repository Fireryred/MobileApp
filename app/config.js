export const API = {
  SERVER: {
    WEBSERVICES: {
      TYPE: 'HTTP',
      OPTIONS: {
        baseURL: 'http://192.168.86.30:5000',
        headers: {
          'Cache-Control': 'no-cache',
        },
        timeout: 50000,
      },
    },
  },
};
