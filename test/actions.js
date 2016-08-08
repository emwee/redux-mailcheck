import configureMockStore from 'redux-mock-store'
import expect from 'expect'
import * as actions from '../actions'
import thunk from 'redux-thunk'
import nock from 'nock'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: 'ADD_TODO',
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

// describe('async actions 2', () => {
//   afterEach(() => {
//     nock.cleanAll()
//   })

//   it('creates requestTimeslots when fetchTimeslots has been done', () => {
//     nock('http://example.com/')
//       .get('/todos')
//       .reply(200, { body: { todos: ['do something'] }})

//     const expectedActions = [
//       { type: 'FETCH_TODOS_REQUEST' },
//       { type: 'FETCH_TODOS_SUCCESS', body: { todos: ['do something']  } }
//     ]
//     const store = mockStore({ todos: [] })

//     return store.dispatch(actions.fetchTodos())
//       .then(() => { // return of async actions
//         expect(store.getActions()).toEqual(expectedActions)
//       })
//   })
// })

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('calls requestTimeslots when fetchTimeslots has been done', () => {
    const fn = actions.fetchTimeslots()
    expect(fn).toBeA('function');
    const dispatch = expect.createSpy()
    fn(dispatch)
    expect(dispatch).toHaveBeenCalledWith({ type: 'REQUEST_TIMESLOTS' })
  })
})