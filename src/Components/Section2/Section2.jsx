import React, {useContext} from "react";
import { InputContext } from "../../Containers/AppContainer";


function Section2() {
    
    const {
        mode,
        averageMonthlyPremium,
        commissionPercentage,
        goalEarnings,
        timeframe,
        monthlyDeclines
      } = useContext(InputContext);
    
    const commissionPerPolicy = (averageMonthlyPremium * (commissionPercentage / 100));
    const policiesRequired = Math.ceil((goalEarnings / timeframe) / commissionPerPolicy);
    const monthsRequired = Math.ceil(goalEarnings / (commissionPerPolicy * monthlyDeclines));
    let monthlyIncreaseInResidualIncome
    mode === "Sales Target" ? 
        monthlyIncreaseInResidualIncome = commissionPerPolicy * policiesRequired
    :
        monthlyIncreaseInResidualIncome = commissionPerPolicy * monthlyDeclines
    
    function formatNumber(amount) {
        const formattedAmount = amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
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
        <div className="p-5 sm:p-8 rounded-2xl bg-gray-900 w-full">
          <div id='Section-2' className="font-display">
            <div id="Section-2-Top" className="text-center mb-8">
                <div id="Section-2-Top-Title" className="mb-5 text-white font-semibold text-base sm:text-lg lg:text-2xl">{mode === "Sales Target" ? 
                  `Policies required to sell each month to hit $${Math.round(Number(goalEarnings)).toLocaleString()}/month or $${Math.round(Number(goalEarnings * 12)).toLocaleString()}/year within ${timeframe} months:`
                  :
                  `Months required to achieve $${Math.round(Number(goalEarnings)).toLocaleString()}/month or $${Math.round(Number(goalEarnings * 12)).toLocaleString()}/year income:`
                }</div>
                <div id="big-number" className="text-white text-4xl font-semibold sm:text-6xl">{mode === "Sales Target" ?
                  Number(policiesRequired).toLocaleString()
                  :
                  Number(monthsRequired).toLocaleString()
                }</div>
            </div>
            <div id="Section-2-Bottom" className="last:mb-0 flex flex-col gap-2 text-xs sm:text-sm md:text-sm min-[940px]:text-base ">
              <div className="calc-item-title text-base sm:text-lg font-semibold text-white">How did we get this number?</div>
              <div className="calc-item text-white flex justify-between content-center">
                <div className="calc-item-left basis-4/6">
                  Average Monthly Premium:
                </div>
                <div className="self-center">
                  {`$${averageMonthlyPremium}`}
                </div>
              </div>
              <div className="calc-item text-white flex justify-between content-center">
                <div className="calc-item-left basis-4/6">
                  Average Monthly Commission Per Policy Sold:
                </div>
                <div className="self-center">
                  {`$${commissionPerPolicy.toLocaleString()}`}
                </div>
              </div>
              <div className="calc-item text-white flex justify-between content-center">
                <div className="calc-item-left basis-4/6">
                  Policies Sold Per Month:
                </div>
                <div className="self-center">
                  {mode === "Sales Target" ? policiesRequired : monthlyDeclines}
                </div>
              </div>
              <div className="calc-item text-white flex justify-between content-center">
                <div className="calc-item-left basis-4/6">
                  Monthly Increase In Residual Income:
                </div>
                <div className="self-center">
                {formatNumber(monthlyIncreaseInResidualIncome)}
                </div>
              </div>
              <div className="calc-item text-white flex justify-between content-center">
                <div className="calc-item-left basis-4/6">
                  {mode === "Sales Target" ?
                  (`${formatNumberWithTilde(monthlyIncreaseInResidualIncome)}/month x ${timeframe} months =`)
                  :
                  (`$${Math.round(goalEarnings).toLocaleString()} ÷ ${formatNumberWithTilde(monthlyIncreaseInResidualIncome)}/month =`)
                  }
                </div>
                <div className="self-center">
                  {mode === "Sales Target" ?
                  ("$" + Math.round((monthlyIncreaseInResidualIncome) * timeframe).toLocaleString() + "/month")
                  :
                  (`~${monthsRequired} months`)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Section2