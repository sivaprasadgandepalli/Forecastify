import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './loader';
import WeatherCard from './weatherCard'; // Import WeatherCard component

function WeatherUi() {
    const [current, setCurrent] = useState({});
    const [report, setReport] = useState([]);
    const [city, setCity] = useState("delhi");
    const [loading, setLoading] = useState(false);
    const [cityName, setCityName] = useState("Delhi");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=54b106ddbca54a30a7480208242602&q=India/${city}&days=4&aqi=no&alerts=no`);
                const result = await response.json();
                setCurrent(result.current);
                setReport(result.forecast.forecastday);
                setCityName(result.location.name);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [city]);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className='text-center bg-blue py-3 text-white'>Weather Dashboard</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <form className='d-flex flex-column gap-3 px-2'>
                        <div>
                            <label className='mb-1'>Enter City Name:</label>
                            <input type='text' className='w-100 d-block py-1 px-2' placeholder='Eg: Kakinada, Guntur, Vizag..' onChange={handleCityChange} />
                        </div>
                        <button type="submit" className="btn btn-primary rounded-0 w-100">Search</button>
                    </form>
                    <div className='Flex mt-2 mb-1 px-2'>
                        <div className='span'></div>
                        <div className='pb-1'>or</div>
                        <div className='span'></div>
                    </div>
                    <div className='px-2'>
                        <button type="button" className="btn btn-secondary rounded-0 w-100 ">Use Current Location</button>
                    </div>
                </div>
                <div className='col-md-8'>
                    {loading ? (
                        <div className='text-center'>
                            <Loader />
                        </div>
                    ) : (
                        <div>
                            <WeatherCard city={cityName} current={current} report={report} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WeatherUi;
