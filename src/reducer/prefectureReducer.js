import { SET_PREF_ALL, SET_PREF_CHECK } from '../common/constants';

const prefectureReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_PREF_ALL:
            return {
                ...state,
                prefs: payload
            };
        case SET_PREF_CHECK:
            const isExist = state.prefsChecked.find(
                (el) => el.prefCode === payload.prefCode
            );
            if (isExist) {
                return {
                    ...state,
                    prefsChecked: state.prefsChecked.filter(
                        (el) => el.prefCode !== payload.prefCode
                    )
                };
            } else {
                const { prefCode, name, value, year } = payload;
                return {
                    ...state,
                    prefsChecked: [
                        ...state.prefsChecked,
                        { prefCode, name, data: value, year }
                    ]
                };
            }

        default:
            return state;
    }
};

export default prefectureReducer;
