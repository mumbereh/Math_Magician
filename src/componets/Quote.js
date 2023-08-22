import React, { useState, useEffect } from 'react';
import './Quote.module.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const apiKey = 'T4snxziui9vXGIaG6L3LIaKfmGm0aTKp04jLGZA6';
  const category = 'future';

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            method: 'GET',
            headers: {
              'X-Api-Key': apiKey,
              'Content-Type': 'application/json',
            },
          },
        );

        const data = await response.json();

        if (data.length > 0) {
          setQuote(data[0].quote);
        } else {
          setError('No quotes found for the specified category.');
        }
      } catch (error) {
        setError(`An error occurred while fetching the quote.\n${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [category]);

  return (
    <div className="quote-section">
      <h2>Quote of the Day</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <p>{quote}</p>}
    </div>
  );
};

export default Quote;
