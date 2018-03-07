import { renderComponent , expect } from '../test_helper';
import GoogleMap from '../../src/components/google_map';

describe('GoogleMap' , () => {
  let component, lat=19.0144,lon=72.8479,google=true;

  beforeEach(() => {
    component = renderComponent(GoogleMap,{lat,lon,google});
  });

  it('renders map component', () => {
    expect(component).to.exist;
  });
});
