import { createContext, useEffect, useReducer } from 'react';
import { getPrefectures, getReport } from '../apis';
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

    const handleCheck = async (id) => {
        try {
            const res = await getReport(id);
            if (res.data) {
                dispatch({
                    type: SET_PREF_CHECK,
                    payload: {
                        prefCode: id,
                        name: prefState.prefs.find((el) => el.prefCode === id)
                            .prefName,
                        value: res.data.result.data[0].data.map(
                            (el) => el.value
                        ),
                        year: res.data.result.data[0].data.map((el) => el.year)
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    // const getPrefsPopulation = async () => {
    //     const prefsChecked = prefState.prefsChecked;
    //     try {
    //         for (let i = 0; i < prefsChecked.length; i++) {
    //             const res = await getReport(prefsChecked[i]);
    //             if (res.data) {
    //                 dispatch({
    //                     type: SET_PREF_POPULATION,
    //                     payload: {
    //                         prefCode: prefsChecked[i],
    //                         name: prefState.prefs.find(
    //                             (el) => el.prefCode === prefsChecked[i]
    //                         ).prefName,
    //                         value: res.data.result.data[0].data.map(
    //                             (el) => el.value
    //                         ),
    //                         year: res.data.result.data[0].data.map(
    //                             (el) => el.year
    //                         )
    //                     }
    //                 });
    //             }
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => getPrefsPopulation(), [prefState.prefsChecked]);

    const prefContextData = { prefState, handleCheck };

    return (
        <PrefectureContext.Provider value={prefContextData}>
            {children}
        </PrefectureContext.Provider>
    );
};

export default PrefectureProvider;
