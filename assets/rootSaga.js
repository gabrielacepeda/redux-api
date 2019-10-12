import { put, takeEvery, call, all, select } from 'redux-saga/effects'

import {
    watchRefreshQuakes,
} from './modules/My/sagas';

export default function* rootSaga() {
    yield all([
        watchRefreshQuakes(),
    ]);
}
