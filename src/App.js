import './assets/css/index.css';
import './assets/css/grid.css';
import PrefectureSelector from './components/prefectureSelector/PrefectureSelector';
import LineChart from './components/chart/LineChart';

function App() {
    return (
        <div className='container'>
            <div className='header'>
                日本の管理単位による人口の変化を示しているチャート
            </div>
            <PrefectureSelector />
            <LineChart />
        </div>
    );
}

export default App;
