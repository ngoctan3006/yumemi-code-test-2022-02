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
            if (state.prefsChecked.includes(payload)) {
                return {
                    ...state,
                    prefsChecked: state.prefsChecked.filter(
                        (el) => el !== payload
                    )
                };
            } else {
                return {
                    ...state,
                    prefsChecked: [...state.prefsChecked, payload]
                };
            }

        default:
            return state;
    }
};

export default prefectureReducer;
