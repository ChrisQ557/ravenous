import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import './App.css';

function App() {
 const businesses = [
  {
    id: 1,
    imageSrc: 'https://picsum.photos/200?random=1',
    name: 'Morgan\'s Bishimbap',
    address: '123 Main Street',
    city: 'New York City',
    state: 'NY',
    zipCode: '10001',
    category: 'Korean',
    rating: 4.0,
    reviewCount: 200,
  },
  {
    id: 2,
    imageSrc: 'https://picsum.photos/200?random=2',
    name: 'Spice Palace',
    address: '456 Elm Street',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '11201',
    category: 'Indian',
    rating: 4.5,
    reviewCount: 350,
  },
  {
    id: 3,
    imageSrc: 'https://picsum.photos/200?random=3',
    name: 'The Pasta House',
    address: '789 Oak Avenue',
    city: 'Queens',
    state: 'NY',
    zipCode: '11354',
    category: 'Italian',
    rating: 3.8,
    reviewCount: 115,
  },
];


  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;