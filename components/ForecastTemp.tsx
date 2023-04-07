import React from 'react';
import { formatTempFahr } from '../utils/formatTempFahr';
import ForecastMetric from './ForecastMetric';

type ForecastTempProps = {
  labelText: string,
  temp: number,
  size?: number,
}

const ForecastTemp: React.FC<ForecastTempProps> = ({ labelText, temp, size = 1 }) => 
  <ForecastMetric labelText={labelText} metricText={formatTempFahr(temp)} size={size} />

export default ForecastTemp;