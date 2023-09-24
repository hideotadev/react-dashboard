import { takeLatest } from 'redux-saga/effects'
import { PLUS_REQUEST, MINUS_REQUEST } from '../actions'
import { plusRequest, minusRequest } from './counter.js'

export default function* rootSaga() {
    yield takeLatest( PLUS_REQUEST, plusRequest ),
    yield takeLatest( MINUS_REQUEST, minusRequest )
}