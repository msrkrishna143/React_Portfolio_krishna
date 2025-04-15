import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Sidebar from './Sidebar';

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



// The main Survey component
const Survey = () => {
  const questions = [
    'Requirements',
    'Coding',
    'Deployment',
    'Testing',
    'Client Review',
  ];

  // Initialize state for ratings of each main question and sub-question
  const [ratings, setRatings] = useState(questions.map(() => [0, 0, 0, 0, 0]));
  const [headerRatings, setHeaderRatings] = useState(questions.map(() => 0));
  const [finalRating, setFinalRating] = useState(0);
  const [showChart, setShowChart] = useState(false); // State to control chart visibility

  // Function to handle rating change
  const handleRatingChange = (questionIndex, subQuestionIndex, rating) => {
    const updatedRatings = [...ratings];
    updatedRatings[questionIndex][subQuestionIndex] = rating;
    setRatings(updatedRatings);

    // Calculate the sum of ratings for the current question
    const sumRatings = updatedRatings[questionIndex].reduce((acc, curr) => acc + curr, 0);
    const headerRating = Math.round(sumRatings / 5); // Average rating for the header

    const updatedHeaderRatings = [...headerRatings];
    updatedHeaderRatings[questionIndex] = headerRating;
    setHeaderRatings(updatedHeaderRatings);

    // Calculate the final rating based on the average of all header ratings
    const averageHeaderRating = updatedHeaderRatings.reduce((acc, curr) => acc + curr, 0) / questions.length;
    setFinalRating(Math.round(averageHeaderRating));
  };

  // Function to clear all ratings
  const clearRatings = () => {
    setRatings(questions.map(() => [0, 0, 0, 0, 0]));
    setHeaderRatings(questions.map(() => 0));
    setFinalRating(0);
  };

  // Data for the Bar chart
  const chartData = {
    labels: questions, // Display the questions as labels on the X-axis
    datasets: [
      {
        label: 'Average Rating',
        data: headerRatings, // Average rating for each main question
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
    <>
      <div>
        <Sidebar />
      </div>
      <Accordion defaultActiveKey="0">
        <div className="header">
          <b>Rate component</b>
        </div>
        {questions.map((question, questionIndex) => (
          <Card key={questionIndex}>
            <Accordion.Header>
              <h4 style={{ width: '100%', fontSize: '18px' }}>
                {question}
                <div style={{ display: 'flex', justifyContent: 'right' }}>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Star
                      key={rating}
                      filled={rating <= headerRatings[questionIndex]}
                      onClick={() => {}}
                    />
                  ))}
                </div>
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <Card.Body>
                <div style={{ marginTop: '20px' }}>
                 
                  {Array.from({ length: 5 }, (_, subQuestionIndex) => (
                    <div key={subQuestionIndex} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ flex: 1 }}>Question {subQuestionIndex + 1} for {question}</p>
                      <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                        {[0, 1, 2, 3, 4, 5].map((rating) => (
                          <span
                            key={rating}
                            style={{
                              cursor: 'pointer',
                              color: rating <= ratings[questionIndex][subQuestionIndex] ? 'gold' : 'gray',
                              fontSize: '20px',
                              margin: '0 5px',
                            }}
                            onClick={() => handleRatingChange(questionIndex, subQuestionIndex, rating)}
                          >
                            {rating}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Accordion.Body>
          </Card>
        ))}
      </Accordion>
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

      {/* Button to clear all ratings */}
      <Button
        variant="secondary"
        onClick={clearRatings}
        style={{ marginTop: '20px', marginRight: '10px' }}
      >
        Clear
      </Button>

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
        <div style={{ marginTop: '40px', width: '40%', margin: '0 auto' }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
    </>
  );
};

export default Survey;
