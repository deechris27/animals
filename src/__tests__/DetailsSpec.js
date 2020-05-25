import React from 'react';
import {create} from 'react-test-renderer';
import Details from '../Details';

test("snapshot", ()=>{
    const wrap = create(<Details />);
    wrap.setProps({ history: { push } });
    expect(wrap.toJSON()).toMatchSnapshot();
});