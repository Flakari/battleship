import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount, shallow } from 'enzyme';

const wrapper = mount(<App />);

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

test('jest-enzyme environment works', () => {
    expect(wrapper.find('div')).toExist();
});
