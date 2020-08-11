import { put, takeEvery } from 'redux-saga/effects'

function *handleTriggerTick(param: any) {
    console.log(param);
    yield put({type: 'HELLO'});
};

export default function *helloSaga() {
    yield takeEvery('TRIGGER_TICK', handleTriggerTick);
}
