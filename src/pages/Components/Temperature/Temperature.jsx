import Variable from '../Variable/Variable';
import { useState, useEffect } from 'react';
import './Temperature.css';

function Temperature() {
    const [celsius, setCelsius] = useState(25);
    const [fahrenheit, setFahrenheit] = useState((celsius * 1.8) + 32);
    const [kelvin, setKelvin] = useState(celsius + 273.15);

    useEffect(() => {
        setFahrenheit((celsius * 1.8) + 32);
        setKelvin(celsius + 273.15);
    }, [celsius]);

    useEffect(() => {
        setCelsius((fahrenheit - 32) / 1.8);
    }, [fahrenheit]);

    useEffect(() => {
        setCelsius(kelvin - 273.15);
    }, [kelvin]);

    return (
        <div className="temperature-container">
            <h3>Temperature</h3>

            <div className="temperature-badges">
                <span className='badge bg-primary'>
                    <h3>{celsius.toFixed(2)}°C</h3>
                </span>
                <span className='badge bg-primary'>
                    <h3>{fahrenheit.toFixed(2)}°F</h3>
                </span>
                <span className='badge bg-primary'>
                    <h3>{kelvin.toFixed(2)}°K</h3>
                </span>
            </div>

            <div className="temperature-add">
                <Variable className="variable" name="Celsius" value={celsius} setValue={setCelsius} />
                <Variable className="variable" name="Fahrenheit" value={fahrenheit} setValue={setFahrenheit} />
                <Variable className="variable" name="Kelvin" value={kelvin} setValue={setKelvin} />
            </div>
        </div>
    );
}

export default Temperature;
