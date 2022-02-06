import { createContext, useEffect, useReducer } from 'react';
import { getPrefectures } from '../apis';
import { SET_PREF_ALL, SET_PREF_CHECK } from '../common/constants';
import prefectureReducer from '../reducer/prefectureReducer';

export const PrefectureContext = createContext();

const PrefectureProvider = ({ children }) => {
    const [prefState, dispatch] = useReducer(prefectureReducer, {
        prefs: [],
        prefsChecked: []
    });

    const loadAllPref = async () => {
        try {
            const response = await getPrefectures();
            if (response.data) {
                dispatch({
                    type: SET_PREF_ALL,
                    payload: response.data.result
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => loadAllPref(), []);

    const handleCheck = (id) => {
        dispatch({
            type: SET_PREF_CHECK,
            payload: id
        });
    };

    const prefContextData = { prefState, handleCheck };

    return (
        <PrefectureContext.Provider value={prefContextData}>
            {children}
        </PrefectureContext.Provider>
    );
};

export default PrefectureProvider;
