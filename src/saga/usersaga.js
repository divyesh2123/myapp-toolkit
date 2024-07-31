import { call, put, take, takeLatest } from "redux-saga/effects";
import { UserFail, UserRequest, UserSuc } from "../slice/userslice";
import { getData } from "../service/userservice";


function* asnycUser()
{
    try
    {
       let p = yield call(getData)

       yield put(UserSuc(p.data));
    }
    catch(error)
    {
        yield put(UserFail(error));
    }

}



export function* watchUser()
{
    yield takeLatest(UserRequest().type,asnycUser)
}