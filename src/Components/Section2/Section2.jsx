import React, { useContext } from "react";
import { InputContext } from "../../Containers/AppContainer";

function Section2() {
  const {
    mode,
    averageMonthlyPremium,
    commissionPercentage,
    goalEarnings,
    timeframe,
    monthlyDeclines,
  } = useContext(InputContext);

  let completionStatus;
  if (mode === "Sales Target") {
    if (
      !averageMonthlyPremium ||
      !commissionPercentage ||
      !goalEarnings ||
      !timeframe
    ) {
      completionStatus = "incomplete";
    }
  } else {
    if (
      !averageMonthlyPremium ||
      !commissionPercentage ||
      !monthlyDeclines ||
      !goalEarnings
    ) {
      completionStatus = "incomplete";
    }
  }

  const commissionPerPolicy =
    averageMonthlyPremium * (commissionPercentage / 100);
  const policiesRequired = Math.ceil(
    goalEarnings / timeframe / commissionPerPolicy,
  );
  const monthsRequired = Math.ceil(
    goalEarnings / (commissionPerPolicy * monthlyDeclines),
  );
  let monthlyIncreaseInResidualIncome;
  mode === "Sales Target"
    ? (monthlyIncreaseInResidualIncome = commissionPerPolicy * policiesRequired)
    : (monthlyIncreaseInResidualIncome = commissionPerPolicy * monthlyDeclines);

  function formatNumber(amount) {
    const formattedAmount = amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

    return formattedAmount;
  }

  function formatNumberWithTilde(amount) {
    const roundedAmount = Math.round(amount);
    const parts = roundedAmount.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (Math.abs(amount - roundedAmount) < 0.0001) {
      return `$${parts[0]}`;
    } else {
      return `~$${parts[0]}`;
    }
  }

  return (
    <div className="w-full rounded-2xl bg-gray-900 p-5 shadow-lg sm:p-8">
      <div
        id="Section-2"
        className="flex h-full flex-col justify-center gap-8 font-display"
      >
        <div id="Section-2-Top" className="text-center">
          {completionStatus !== "incomplete" ? (
            <div
              id="Section-2-Top-Title"
              className="mb-5 text-lg font-bold capitalize text-white sm:text-lg lg:text-2xl"
            >
              {mode === "Sales Target"
                ? `Policies required to sell each month to hit $${Math.round(
                    Number(goalEarnings),
                  ).toLocaleString()}/month or $${Math.round(
                    Number(goalEarnings * 12),
                  ).toLocaleString()}/year within ${timeframe} months:`
                : `Months required to achieve $${Math.round(
                    Number(goalEarnings),
                  ).toLocaleString()}/month or $${Math.round(
                    Number(goalEarnings * 12),
                  ).toLocaleString()}/year income:`}
            </div>
          ) : null}
          {completionStatus !== "incomplete" ? (
            <span
              id="big-number"
              className="bg-gradient-to-br from-lime-400 to-cyan-400 bg-clip-text text-6xl font-black text-transparent"
            >
              {mode === "Sales Target"
                ? Number(policiesRequired).toLocaleString()
                : Number(monthsRequired).toLocaleString()}
            </span>
          ) : (
            <span id="big-number" className="text-2xl font-black text-white">
              Please fill in all input fields.
            </span>
          )}
        </div>
        {completionStatus !== "incomplete" ? (
          <div
            id="Section-2-Bottom"
            className="flex flex-col gap-2 text-sm last:mb-0 min-[350px]:text-base min-[940px]:text-lg"
          >
            <div className="calc-item-title text-base font-semibold text-white sm:text-lg">
              How did we get this number?
            </div>
            <div className="calc-item flex content-center justify-between text-white">
              <div className="calc-item-left basis-4/6">
                Average Monthly Premium:
              </div>
              <div className="self-center">
                {averageMonthlyPremium ? `$${averageMonthlyPremium}` : "N/A"}
              </div>
            </div>
            <div className="calc-item flex content-center justify-between text-white">
              <div className="calc-item-left basis-4/6">
                Average Monthly Commission Per Policy Sold:
              </div>
              <div className="self-center">
                {averageMonthlyPremium && commissionPercentage
                  ? `$${commissionPerPolicy.toLocaleString()}`
                  : "N/A"}
              </div>
            </div>
            <div className="calc-item flex content-center justify-between text-white">
              <div className="calc-item-left basis-4/6">
                Policies Sold Per Month:
              </div>
              <div className="self-center">
                {mode === "Sales Target"
                  ? goalEarnings && timeframe && commissionPerPolicy
                    ? policiesRequired
                    : "N/A"
                  : monthlyDeclines
                  ? monthlyDeclines
                  : "N/A"}
              </div>
            </div>
            <div className="calc-item flex content-center justify-between text-white">
              <div className="calc-item-left basis-4/6">
                Monthly Increase In Residual Income:
              </div>
              <div className="self-center">
                {mode === "Sales Target"
                  ? averageMonthlyPremium &&
                    commissionPercentage &&
                    goalEarnings &&
                    timeframe
                    ? formatNumber(monthlyIncreaseInResidualIncome)
                    : "N/A"
                  : monthlyDeclines &&
                    averageMonthlyPremium &&
                    commissionPercentage &&
                    goalEarnings
                  ? formatNumber(monthlyIncreaseInResidualIncome)
                  : "N/A"}
              </div>
            </div>
            <div className="calc-item flex content-center justify-between text-white">
              <div className="calc-item-left basis-4/6">
                {mode === "Sales Target"
                  ? monthlyIncreaseInResidualIncome
                    ? `${formatNumberWithTilde(
                        monthlyIncreaseInResidualIncome,
                      )}/mo x ${timeframe} months =`
                    : `N/A x ${timeframe} months =`
                  : monthlyIncreaseInResidualIncome && goalEarnings
                  ? `$${Math.round(
                      goalEarnings,
                    ).toLocaleString()} ÷ ${formatNumberWithTilde(
                      monthlyIncreaseInResidualIncome,
                    )}/mo =`
                  : `N/A`}
              </div>
              <div className="self-center">
                {mode === "Sales Target"
                  ? "$" +
                    Math.round(
                      monthlyIncreaseInResidualIncome * timeframe,
                    ).toLocaleString() +
                    "/mo"
                  : `~${monthsRequired} months`}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Section2;
