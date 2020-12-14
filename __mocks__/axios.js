const mockAxios = jest.genMockFromModule("axios", () => {
  return {
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  };
});

// this is the key to fix the axios.create()
mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
