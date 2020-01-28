import reducer from '../../reducers';
import { getRepoListByUserName, getRepoListByUserNameSuccess,
    clean } from '../../actions';
import expect from 'expect';

const initialState = {
    repos: [],
    isLoading: false
}

describe('Test reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({isLoading: false,  repos: []})
    });
    describe('GET_REPO_LIST_BY_USER_NAME: getRepoListByUserName', () => {
        const finalStateVal = { ...initialState, isLoading: true }
        const action = getRepoListByUserName('avickmukh')
        const newState = reducer(initialState, action)
        it('Test the output', () => {
          expect(JSON.stringify(finalStateVal)).toEqual(JSON.stringify(newState))
        })
    })
    describe('GET_REPO_LIST_BY_USER_NAME_SUCCESS: getRepoListByUserNameSuccess', () => {
        const dummyRepoList = [{name: 'test'}]
        const finalStateVal = { ...initialState, isLoading: false, repos: dummyRepoList }
        const action = getRepoListByUserNameSuccess(dummyRepoList)
        const newState = reducer(initialState, action)
        it('Test the output', () => {
          expect(JSON.stringify(finalStateVal)).toEqual(JSON.stringify(newState))
        })
    })
    describe('CLEAN: clean', () => {
        const finalStateVal = {repos: [], isLoading: false}
        const action = clean()
        const newState = reducer(initialState, action)
        it('Test the output', () => {
          expect(JSON.stringify(finalStateVal)).toEqual(JSON.stringify(newState))
        })
    })
});