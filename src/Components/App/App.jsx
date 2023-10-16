import './App.css';
import React from 'react';
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'

function App(props) {
  return (
    <div id="app-container">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap');
      </style>
      <Section1 
        price={props.price} 
        workshopRegistrants={props.workshopRegistrants}
        showRate={props.showRate} 
        closeRate={props.closeRate} 
        priceChange={props.priceChange} 
        workshopRegistrantsChange={props.workshopRegistrantsChange} 
        showRateChange={props.showRateChange} 
        closeRateChange={props.closeRateChange}
        mode={props.mode}
        modeChange={props.modeChange}
        averageMonthlyPremium={props.averageMonthlyPremium}
        premiumChange={props.premiumChange}
        commissionPercentage={props.commissionPercentage}
        commissionPercentageChange={props.commissionPercentageChange}
        goalEarnings={props.goalEarnings}
        goalEarningsChange={props.goalEarningsChange}
        yearlyGoalEarningsChange={props.yearlyGoalEarningsChange}
        timeframe={props.timeframe}
        timeframeChange={props.timeframeChange}
      />
      <Section2 
        price={props.price} 
        workshopRegistrants={props.workshopRegistrants}
        showRate={props.showRate} 
        closeRate={props.closeRate} 
        completedCalls={props.completedCalls}
        dealsWon={props.dealsWon}
        totalRevenue={props.totalRevenue}
        goalEarnings={props.goalEarnings}
        timeframe={props.timeframe}
        averageMonthlyPremium={props.averageMonthlyPremium}
        commissionPercentage={props.commissionPercentage}
        />
    </div>
  );
}

export default App;
