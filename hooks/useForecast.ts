import { useState, useEffect } from 'react';
import { WeatherForecast } from '../types';
import testForecast from '../testForecast.json';


export const useForecast = (zipcode: string): WeatherForecast[] => {
  console.log(typeof testForecast);
  console.log(testForecast.visibility);

  return [testForecast];
}