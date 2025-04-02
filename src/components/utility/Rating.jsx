import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Star component to display each individual star
const Star = ({ filled, onClick }) => (
  <span
    onClick={onClick}
    style={{
      cursor: 'pointer',
      color: filled ? 'gold' : 'gray',
      fontSize: '30px',
    }}
  >
    ★
  </span>
);

// StarRating component to calculate and display the average rating
const StarRating = ({ rating }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} filled={index < rating} onClick={() => {}} />
      ))}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p>Your rating: {rating} star{rating !== 1 && 's'}</p>
      </div>
    </div>
  );
};

// The main Survey component
const Rating = () => {
  const questions = [
    'How would you rate the product?',
    'How would you rate the quality?',
    'How would you rate the usability?',
    'How would you rate the value for money?',
    'How would you rate the customer service?',
  ];

  const [ratings, setRatings] = useState([0, 0, 0, 0, 0]);
  const [finalRating, setFinalRating] = useState(0);
  const [showChart, setShowChart] = useState(false); // State to control chart visibility

  // Function to handle rating change
  const handleRatingChange = (index, rating) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = rating;
    setRatings(updatedRatings);

    const averageRating = updatedRatings.reduce((acc, curr) => acc + curr, 0) / updatedRatings.length;
    setFinalRating(Math.round(averageRating));
  };

  // Data for the Bar chart
  const chartData = {
    labels: questions, // Display the questions as labels on the X-axis
    datasets: [
      {
        label: 'Average Rating',
        data: ratings, // Rating for each question
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 5, // Max rating is 5
        ticks: {
          stepSize: 1, // Step size for each tick on the y-axis
        },
      },
    },
  };

  // Function to handle button click to show chart
  const toggleChartVisibility = () => {
    setShowChart(!showChart);
  };

  return (
    <div>
      <div className="grid-container">
      <div className="grid-item">
      <div className="header">
              <b>Rate component</b>  
      </div>
      <Accordion defaultActiveKey="0">
        {questions.map((question, index) => (
          <Card key={index}>
            <Accordion.Header>
              <h4>{question}</h4>
            </Accordion.Header>
            <Accordion.Body>
              <Card.Body>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Star
                      key={rating}
                      filled={rating <= ratings[index]}
                      onClick={() => handleRatingChange(index, rating)} // Handle rating change
                    />
                  ))}
                </div>
              </Card.Body>
            </Accordion.Body>
          </Card>
        ))}
      </Accordion>

      {/* Display the final rating */}
      <h3>Final Rating</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            style={{
              color: rating <= finalRating ? 'gold' : 'gray',
              fontSize: '30px',
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Button to toggle chart visibility */}
      <Button
        variant="primary"
        onClick={toggleChartVisibility}
        style={{ marginTop: '20px' }}
      >
        {showChart ? 'Hide Chart' : 'Show Chart'}
      </Button>

      {/* Bar chart displaying the ratings */}
      {showChart && (
        <div style={{ marginTop: '40px', width: '80%', margin: '0 auto' }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
    </div>
    </div>

  );
};

export default Rating;
