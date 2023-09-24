import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'
import rootSaga from './saga'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()
 
export default () => {
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  let persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
