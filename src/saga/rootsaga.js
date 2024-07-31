import { all } from "redux-saga/effects";
import { watchUser } from "./usersaga";

export function* rootSaga()
{

    yield all([watchUser()]);
}