import React, {useEffect, useState} from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.css';
import InfoBox from './InfoBox';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  //USEEFFECT = Runs a piece of code 
  //based on a given condition
  
  useEffect(() => {
    //async => send request, wait for it, and then do something with it.

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country, // INDIA, UNITED STATES 
          value: country.countryInfo.iso2 //IN, USA
        }));

        setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  }

  return (
    <div className="app"> 
      <div className='app_header'>
      <h1>COVID-19 TRACKER</h1>
      <FormControl className='app__dropdown'>
        <Select
          variant='outlined'
          onChange={onCountryChange}
          value={country}
          >
            <MenuItem value='worldwide'>Worldwide</MenuItem>
            {/* Loop through all the countries
            and show drop down
            list of options */}
            {countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
      </div>

      <div className='app__stats'>
        <InfoBox title='Coronavirus Cases' cases={123} total={2000}/>
        <InfoBox title='Recovered' cases={1234} total={3000} />
        <InfoBox title='Deaths' cases={12345} total={4000} />
      </div>
      
    </div>
  );
}

export default App;
