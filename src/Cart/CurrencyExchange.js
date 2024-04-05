import { useEffect, useState } from "react";

function CurrencyExchange({ children }) {
    const [exchangeRates, setExchangeRates] = useState(null);

    useEffect(() => {
        fetchExchangeRates();
    }, []);

    const fetchExchangeRates = () => {
        fetch('https://currency-exchange.p.rapidapi.com/exchange?from=CAD&to=USD', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '33547ae66bmsh923206fd358041bp15da0ejsn0b2c04035b0c',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setExchangeRates(data);
            })
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
            });
    };

    return children(exchangeRates)
    
}

export default CurrencyExchange;