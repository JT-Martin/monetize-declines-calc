import React, {useState, useEffect} from 'react';
import App from '../Components/App/App'

function AppContainer(props) {
    const [price, setPrice] = useState("3000");
    const [workshopRegistrants, setWorkshopRegistrants] = useState("12");
    const [showRate, setShowRate] = useState("70");
    const [closeRate, setCloseRate] = useState("33")
    const [completedCalls, setCompletedCalls] = useState()
    const [dealsWon, setDealsWon] = useState()
    const [totalRevenue, setTotalRevenue] = useState()
    const [mode, setMode] = useState("Sales Target")
    const [averageMonthlyPremium, setAverageMonthlyPremium] = useState("61") 
    const [commissionPercentage, setCommissionPercentage] = useState("40")
    const [goalEarnings, setGoalEarnings] = useState("12500")
    const [timeframe, setTimeframe] = useState("24")
    

    const handlePriceChange = (event) => {
        const updatedPrice = event.target.value;
        setPrice(updatedPrice);
    }

    const handleWorkshopRegistrantsChange = (event) => {
        const updatedWorkshopRegistrants = event.target.value;
        setWorkshopRegistrants(updatedWorkshopRegistrants);
    }

    const handleShowRateChange = (event) => {
        const updatedShowRate = event.target.value;
        setShowRate(updatedShowRate);
    }

    const handleCloseRateChange = (event) => {
        const updatedCloseRate = event.target.value;
        setCloseRate(updatedCloseRate);
    }

    const handleModeChange = (event) => {
        const updatedMode = event.value
        setMode(updatedMode)
    }

    const handlePremiumChange = (event) => {
        const updatedPremium = event.target.value;
        setAverageMonthlyPremium(updatedPremium);
    }

    const handleCommissionPercentageChange = (event) => {
        const updatedCommissionPercentage = event.target.value;
        setCommissionPercentage(updatedCommissionPercentage);
    }

    const handleGoalEarningsChange = (event) => {
        const updatedGoalEarnings = parseInt(event.target.value);
        setGoalEarnings(updatedGoalEarnings)
    }

    const handleYearlyGoalEarningsChange = (event) => {
        const updatedGoalEarnings = parseInt(event.target.value) / 12;
        setGoalEarnings(updatedGoalEarnings)
    }

    const handleTimeframeChange = (event) => {
        const updatedTimeframe = event.value;
        setTimeframe(updatedTimeframe)
    }

    useEffect(() => {
        const updatedCompletedCalls = Math.floor(Number(workshopRegistrants) * Number(showRate/100))
        const dealsWon = Math.floor(Number(workshopRegistrants) * Number(showRate/100) * Number(closeRate/100))
        const updatedTotalRevenue = Number(price) * Number(dealsWon)
        setCompletedCalls(updatedCompletedCalls)
        setDealsWon(dealsWon)
        setTotalRevenue(updatedTotalRevenue);
    }, [price, workshopRegistrants, showRate, closeRate, completedCalls])
  
    return (
    <App 
        price={price} 
        workshopRegistrants={workshopRegistrants} 
        showRate={showRate} 
        closeRate={closeRate}
        completedCalls={completedCalls}
        dealsWon={dealsWon}
        totalRevenue={totalRevenue}
        priceChange={handlePriceChange}
        workshopRegistrantsChange={handleWorkshopRegistrantsChange}
        showRateChange={handleShowRateChange}
        closeRateChange={handleCloseRateChange}
        modeChange={handleModeChange}
        mode={mode}
        averageMonthlyPremium={averageMonthlyPremium}
        premiumChange={handlePremiumChange}
        commissionPercentage={commissionPercentage}
        commissionPercentageChange={handleCommissionPercentageChange}
        goalEarnings={goalEarnings}
        goalEarningsChange={handleGoalEarningsChange}
        yearlyGoalEarningsChange={handleYearlyGoalEarningsChange}
        timeframe={timeframe}
        timeframeChange={handleTimeframeChange}
    />
  );
}


export default AppContainer;