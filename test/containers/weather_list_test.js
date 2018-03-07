import { renderComponent , expect } from '../test_helper';
import SearchBar from '../../src/containers/weather_list';

describe('WeatherList' , () => {
  let component;
  let term="mumbai",weather=[];

  beforeEach(() => {
    component = renderComponent(SearchBar,{},{weather,city:term});
  });

  it('renders WeatherList component', () => {
    expect(component).to.exist;
  });

});
