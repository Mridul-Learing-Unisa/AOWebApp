import './App.css';
import CardList from './components/CardListSearch';

function App() {
    return (
        <div className="App container">
            <div className="bg-light py-1 mb-2">
                <h2 className="text-center">Example Application</h2>
            </div>
            <div>
                <CardList />
            </div>
            {/* This component now gets its data from itemData.json */}


        </div>
    );
}

export default App;