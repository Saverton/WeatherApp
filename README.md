# Weather App

Weather App is a basic Weather App built using React Native & TypeScript. It allows users to collect current weather data for any zip code in the US, thanks to the [Open Weather API](https://openweathermap.org/api).

## How to run

There is no public production build at the moment, but you may follow these steps to test the app on your machine.

Fork and clone the repository into your local device.

Refer to the [React Native Docs](https://reactnative.dev/docs/environment-setup) to set up your React Native development environment with **Expo Go**. Ensure that you can run a template app on your browser, device emulator, or actual mobile device before continuing.

Retrieve an API key for free by signing up on [Open Weather API](https://openweathermap.org/api). Once the key is activated, copy it and create a file in ~/assets/secret/ called `apiKey.ts`. Paste the following into that file, and be sure to replace `{API KEY}` with your own Open Weather API key.

```typescript
export const API_KEY = '{API KEY}';
```

Save the project, and launch the development environment in the same way you launched the template app earlier.

## Contributing

This is a small project for the purpose of practicing the use of React Native and TS. Raising issues is encouraged as needed, but no public contributions will be merged.

## License

[MIT](https://choosealicense.com/licenses/mit/)
