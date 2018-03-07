import { renderComponent , expect } from '../test_helper';
import { FETCH_WEATHER, UPDATE_CITY, fetchWeather, updateCity } from '../../src/actions/index';

describe('FETCH_WEATHER and UPDATE_CITY Actions' , () => {
  let fetchWeatherAction,updateCityAction,city="mumbai";

  beforeEach(() => {
    fetchWeatherAction = fetchWeather(city);
    updateCityAction = updateCity(city)
  });

  it('Successfully fetches weather data from weather api', () => {
    // console.log(fetchWeatherAction);
    expect(fetchWeatherAction).to.be.an('object');
    expect(fetchWeatherAction).to.have.property('type',FETCH_WEATHER);
    expect(fetchWeatherAction).to.have.own.property('payload');
    expect(fetchWeatherAction.payload).to.be.a('promise');
    return fetchWeatherAction.payload.then((data)=>{
      // console.log(data);
      expect(data).to.have.nested.property('data.cod','200');
      expect(data).to.have.nested.property('data.list');
      expect(data).to.have.nested.property('data.city');
      expect(data).to.have.nested.property('data.city.name','Mumbai');
    });
  });

  it('Successfully Updates the city', () => {
    expect(updateCityAction).to.be.an('object');
    expect(updateCityAction).to.have.property('type',UPDATE_CITY);
    expect(updateCityAction).to.have.own.property('payload');
    expect(updateCityAction.payload).to.have.own.property('term',city);

    });

});
