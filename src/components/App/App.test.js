import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { createIdea } from '../../actions';

describe('mapStateToProps', () => {
  it('should return an object with an ideas array', () => {

    const mockState = {
      idea: ['ideas']
    }

    const expected = 
    {idea: mockState.ideas}

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
  it('should call dispatch when using a function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();

    const actionToDispatch = createIdea(['ideas']);

    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.createIdea(['ideas']);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  })
})



