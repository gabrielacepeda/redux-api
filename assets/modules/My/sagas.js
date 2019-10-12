import { put, takeEvery, call, all, select } from 'redux-saga/effects';
import axios from 'axios';

function fetchQuakes() {
    return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
}

export function* handleLoadQuakes() {
    console.log(resp.data.bpi[0].USD.rate);
    try {
        console.log('handleLoadQuakes');
        let resp = yield call(fetchQuakes);

        yield put({
            type: 'SET_QUAKES',
            quakes: resp.data.bpi[0].USD.rate,
        });
    } catch (e) {
        console.error(e);
    }
}

export function* watchRefreshQuakes() {
    yield takeEvery('REFRESH_QUAKES', handleLoadQuakes);
}
