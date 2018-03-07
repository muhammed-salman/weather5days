import { renderComponent , expect } from '../test_helper';
import SearchBar from '../../src/containers/search_bar';

describe('SearchBar' , () => {
  let component;
  let city="mumbai";

  beforeEach(() => {
    component = renderComponent(SearchBar,{},{city});
  });

  it('renders SearchBar component', () => {
    expect(component).to.exist;
  });

});
