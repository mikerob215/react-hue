export const DRAWER_STATE_CHANGED = 'DRAW_STATE_CHANGED';

export const drawerStateChanged = () => {
    return ({
        type: DRAWER_STATE_CHANGED,
    });
};