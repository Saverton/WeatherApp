import { View } from '../../components/Themed';
import ZipCodeSearch from '../../components/ZipCodeSearch';
import HourlyForecastDisplay from '../../components/HourlyForecastDisplay';

export default function HourlyForecastTab() {
  return (
    <View>
      <ZipCodeSearch />
      <HourlyForecastDisplay />
    </View>
  );
}
