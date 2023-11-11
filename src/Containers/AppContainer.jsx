import React, { useState, createContext } from "react";
import App from "../Components/App/App";

export const InputContext = createContext();

function AppContainer() {
  const [mode, setMode] = useState("Sales Target");
  const [averageMonthlyPremium, setAverageMonthlyPremium] = useState("83");
  const [commissionPercentage, setCommissionPercentage] = useState("28");
  const [goalEarnings, setGoalEarnings] = useState("12500");
  const [timeframe, setTimeframe] = useState("24");
  const [monthlyDeclines, setMonthlyDeclines] = useState("30");

  const handleModeChange = (event) => {
    const updatedMode = event.value;
    setMode(updatedMode);
  };

  const handlePremiumChange = (event) => {
    const updatedPremium = event.target.value;
    setAverageMonthlyPremium(updatedPremium);
  };

  const handleCommissionPercentageChange = (event) => {
    const updatedCommissionPercentage = event.target.value;
    setCommissionPercentage(updatedCommissionPercentage);
  };

  const handleGoalEarningsChange = (event) => {
    const updatedGoalEarnings = parseInt(event.target.value);
    setGoalEarnings(updatedGoalEarnings);
  };

  const handleYearlyGoalEarningsChange = (event) => {
    const updatedGoalEarnings = parseInt(event.target.value) / 12;
    setGoalEarnings(updatedGoalEarnings);
  };

  const handleTimeframeChange = (event) => {
    const updatedTimeframe = event.value;
    setTimeframe(updatedTimeframe);
  };

  const handleMonthlyDeclinesChange = (event) => {
    const updatedMonthlyDeclines = event.target.value;
    setMonthlyDeclines(updatedMonthlyDeclines);
  };

  const contextValue = {
    mode,
    averageMonthlyPremium,
    commissionPercentage,
    goalEarnings,
    timeframe,
    monthlyDeclines,
    handleModeChange,
    handlePremiumChange,
    handleCommissionPercentageChange,
    handleGoalEarningsChange,
    handleYearlyGoalEarningsChange,
    handleTimeframeChange,
    handleMonthlyDeclinesChange,
  };

  return (
    <InputContext.Provider value={contextValue}>
      <App />
    </InputContext.Provider>
  );
}

export default AppContainer;
