import { useEffect, useMemo, useState } from "react";

function CurrencyExchange({ children }) {
    const [exchangeRates, setExchangeRates] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchExchangeRates();
    }, []);

    const fetchExchangeRates = () => {
        fetch('https://currency-converter241.p.rapidapi.com/conversion_rate?from=CAD&to=USD', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '33547ae66bmsh923206fd358041bp15da0ejsn0b2c04035b0c',
                'X-RapidAPI-Host': 'currency-converter241.p.rapidapi.com'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (!data) {
                    throw new Error('Invalid response data');
                }
                const exchangeRate = data.rate;
                setExchangeRates(exchangeRate);
                setError(null); // Reset error state if successful response
            })
            
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
                setError(error.message); // Set error state with the error message
            });
    };

    const memoizedExchangeRates = useMemo(() => exchangeRates, [exchangeRates]);

    return children(memoizedExchangeRates, error);
}

export default CurrencyExchange;
