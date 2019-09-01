import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Grid from '../Grid';
import GridItem from '../GridItem';
import { mount, shallow } from 'enzyme';

const appWrapper = mount(<App />);
const gridWrapper = mount(<Grid />);

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

test('jest-enzyme environment works', () => {
    expect(appWrapper.find('div')).toExist();
});

test('grid has 100 tiles', () => {
    expect(gridWrapper.find('#main-grid').children().length).toBe(100);
});
