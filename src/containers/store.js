/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T09:13:25-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-09T10:19:03-06:00
 */
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import sagas from './sagas';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
