import { put } from 'redux-saga/effects'
import { failure, minusSuccess, plusSuccess } from '../actions/counter'

export function* plusRequest() {
   try {
       yield put(plusSuccess())
   } catch (e) {
      yield put(failure())
   }
}

export function* minusRequest() {
   try {
      yield put(minusSuccess())
   } catch (e) {
      yield put(failure())
   }
}