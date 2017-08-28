import * as R from "ramda";
import {STORAGE_STATUS_CHANGED, storageStatuses} from "../constants/index";

export const checkHubs = R.ifElse(
    R.isNil,
    R.always({
        type: STORAGE_STATUS_CHANGED,
        payload: storageStatuses.EMPTY,
    }),
    R.always({
        type: STORAGE_STATUS_CHANGED,
        payload: storageStatuses.SAVED,
    })
);
