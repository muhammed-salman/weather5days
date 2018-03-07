import { renderComponent , expect } from '../test_helper';
import Chart from '../../src/components/chart';

describe('Chart' , () => {
  let component;
  let color="orange", data=[300.77, 299.87, 300.57, 301.802, 301.577, 301.475, 299.813, 298.984, 298.336, 297.79], units="K";

  beforeEach(() => {
    component = renderComponent(Chart,{color,data,units});
  });

  it('renders chart component', () => {
    expect(component).to.exist;
  });
});
