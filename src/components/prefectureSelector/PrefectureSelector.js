import { useContext } from 'react';
import { PrefectureContext } from '../../contexts/PrefectureContext';

const PrefectureSelector = () => {
    const {
        prefState: { prefs, prefsChecked },
        handleCheck
    } = useContext(PrefectureContext);

    return (
        <div className='section'>
            <div className='row'>
                {prefs.map((pref) => (
                    <div key={pref.prefCode} className='col-2 col-sm-6'>
                        <input
                            type='checkbox'
                            id={pref.prefCode}
                            checked={prefsChecked.includes(pref.prefCode)}
                            onChange={() => handleCheck(pref.prefCode)}
                        />
                        <label
                            htmlFor={pref.prefCode}
                            style={{ paddingLeft: 8 }}>
                            {pref.prefName}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrefectureSelector;
