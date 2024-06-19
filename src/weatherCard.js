
import React from 'react';

function WeatherCard({ city, current, report }) {
    return (
        <div>
            <div className='row px-2'>
                <div className='col-md-12 mt-2'>
                    <div className='bg-blue d-flex align-items-center justify-content-between pb-2 px-2 pt-3'>
                        <div className='text-white d-flex flex-column'>
                            <ul type="none">
                                <li><h5>{city && city.charAt(0).toLocaleUpperCase() + city.slice(1)} ({current?.last_updated?.slice(0, 11)})</h5></li>
                                <li>Temperature: {current?.temp_c} {'\u00b0'}C</li>
                                <li>Wind: {current?.wind_degree} M/S</li>
                                <li>Humidity: {current?.humidity}</li>
                            </ul>
                        </div>
                        <div className='position-relative'>
                            <img src={current.condition?.icon} alt='img' style={{ width: '6rem' }} />
                            <p className='text-center text-white'>{current.condition?.text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4 px-2'>
                <h4>4 Day's Weather Forecast</h4>
                {report.map((item, ind) => (
                    <div key={ind} className='col-md-3'>
                        <div className='d-flex align-items-start justify-content-center my-1 pt-2 bg-gray overflow-hidden'>
                            <ul type="none">
                                <li><h6>{item?.date}</h6></li>
                                <li><img src={item?.day?.condition?.icon} alt='weather icon' /></li>
                                <li>Temp: {item?.day?.avgtemp_c}C</li>
                                <li>Humidity: {item?.day?.avghumidity}%</li>
                                <li>Wind: {item?.day?.maxwind_mph}M/S</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeatherCard;
