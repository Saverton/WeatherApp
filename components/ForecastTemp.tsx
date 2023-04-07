import React from 'react';
import { formatTempFahr } from '../utils/formatTempFahr';
import ForecastMetric from './ForecastMetric';

type ForecastTempProps = {
  labelText: string,
  temp: number,
}

const ForecastTemp: React.FC<ForecastTempProps> = ({ labelText, temp }) => 
  <ForecastMetric labelText={labelText} metricText={formatTempFahr(temp)} />

export default ForecastTemp;