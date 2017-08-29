import * as R from "ramda";
import {STORAGE_STATUS_EMPTY, STORAGE_STATUS_SAVED, storageStatuses} from "../constants";

export const checkHubs = R.ifElse(
    R.isNil,
    R.always({
        type: STORAGE_STATUS_EMPTY,
        payload: storageStatuses.EMPTY,
    }),
    R.always({
        type: STORAGE_STATUS_SAVED,
        payload: storageStatuses.SAVED,
    })
);
