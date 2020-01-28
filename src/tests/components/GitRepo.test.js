import React from 'react';
import { mount } from 'enzyme';
import GitRepo from '../../components/GitRepo';

describe('Test GitRepo Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<GitRepo 
      name='my_project' 
      stargazers_count={0}
      forks={0}
      svn_url='http_url' />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('get the button text by class name', () => {
      expect(wrapper.find('.MuiButton-label').text()).toBe('Go to Repo');
  })

  it('should show correct text Forks Count', () => {
    expect(wrapper.text().includes('Forks Count')).toBe(true);
  });

  it('should show correct text Star Count', () => {
    expect(wrapper.text().includes('Star Count')).toBe(true);
  });

  it('check the name props value', () => {
    expect(wrapper.props().name).toBe('my_project');
  });

  it('check the name props value', () => {
    expect(wrapper.props().svn_url).toBe('http_url');
  });

  it('check the name props value', () => {
    expect(wrapper.props().forks).toBe(0);
  });

  it('check the stargazers_count props value', () => {
    expect(wrapper.props().stargazers_count).toBe(0);
  });
})
