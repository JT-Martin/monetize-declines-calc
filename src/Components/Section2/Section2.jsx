import React, {useContext} from "react";
import { InputContext } from "../../Containers/AppContainer";
import './Section2.css'

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

        if (amount % 1 === 0) {
            return `$${parts[0]}`;
        } else {
            return `~$${parts[0]}`;
        }
      }


    return (
        <div id='Section-2'>
          {mode === "Sales Target" ? (
            <div id="Section-2-Top">
                <div id="Section-2-Top-Title">{`Amount of policies required to sell each month to hit $${Math.round(Number(goalEarnings)).toLocaleString()}/month or $${Math.round(Number(goalEarnings * 12)).toLocaleString()}/year within ${timeframe} months:`}</div>
                <div id="big-number">{Number(policiesRequired).toLocaleString()}</div>
            </div>
          ) : null}
          {mode === "Timeframe" ? (
            <div id="Section-2-Top">
                <div id="Section-2-Top-Title">{`Months required to achieve $${Math.round(Number(goalEarnings)).toLocaleString()}/month or $${Math.round(Number(goalEarnings * 12)).toLocaleString()}/year income:`}</div>
                <div id="big-number">{Number(monthsRequired).toLocaleString()}</div>
            </div>
          ) : null}
          <div id="Section-2-Bottom">
            <div className="calc-item-title">How did we get these numbers?</div>
            <div className="calc-item">
              <div className="calc-item-left">
                Average Monthly Premium:
              </div>
              <div>
                {`$${averageMonthlyPremium}`}
              </div>
            </div>
            <div className="calc-item">
              <div className="calc-item-left">
                Average Monthly Commission Per Policy Sold:
              </div>
              <div>
                {`$${commissionPerPolicy.toLocaleString()}`}
              </div>
            </div>
            <div className="calc-item">
              <div className="calc-item-left">
                Policies Sold Per Month:
              </div>
              <div>
                {mode === "Sales Target" ? policiesRequired : monthlyDeclines}
              </div>
            </div>
            <div className="calc-item">
              <div className="calc-item-left">
                Monthly Increase In Residual Income:
              </div>
              <div>
              {formatNumber(monthlyIncreaseInResidualIncome)}
              </div>
            </div>
            <div className="calc-item">
              <div className="calc-item-left">
                {mode === "Sales Target" ?
                (`${formatNumberWithTilde(monthlyIncreaseInResidualIncome)}/month x ${timeframe} months =`)
                :
                (`$${Math.round(goalEarnings).toLocaleString()} ÷ ${formatNumberWithTilde(monthlyIncreaseInResidualIncome)}/month =`)
                }
              </div>
              <div>
                {mode === "Sales Target" ?
                ("$" + Math.round((monthlyIncreaseInResidualIncome) * timeframe).toLocaleString() + "/month")
                :
                (`~${monthsRequired} months`)
                }
              </div>
            </div>
          </div>
        </div>
      );
}

export default Section2