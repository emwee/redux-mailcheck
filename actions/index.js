import fetch from 'isomorphic-fetch'

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

function fetchTodosRequest() {
  return {
    type: 'FETCH_TODOS_REQUEST'
  }
}

function fetchTodosSuccess(body) {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    body
  }
}

function fetchTodosFailure(ex) {
  return {
    type: 'FETCH_TODOS_FAILURE',
    ex
  }
}

export function fetchTodos() {
  return dispatch => {
    dispatch(fetchTodosRequest())
    return fetch('http://example.com/todos')
      .then(res => res.json())
      .then(json => dispatch(fetchTodosSuccess(json.body)))
      .catch(ex => dispatch(fetchTodosFailure(ex)))
  }
}


export function requestTimeslots() {
  return {
    type: 'REQUEST_TIMESLOTS',
  }
}


export function fetchTimeslots() {
  return dispatch => {
    dispatch(requestTimeslots())
   }
}

