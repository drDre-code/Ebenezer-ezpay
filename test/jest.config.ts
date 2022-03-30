/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  displayName: 'EZPays-TEST-SERVICE',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  rootDir: './',
  roots: ['<rootDir>/tests'],
  testEnvironment: 'node',
  verbose: true,
};
