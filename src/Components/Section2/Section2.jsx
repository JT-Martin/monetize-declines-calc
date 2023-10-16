import React from "react";
import './Section2.css'

function Section2(props) {
    const commissionPerPolicy = (props.averageMonthlyPremium * (props.commissionPercentage / 100))
    const policiesRequired = Math.ceil((props.goalEarnings / props.timeframe) / commissionPerPolicy)

    
    return(
        <div id='Section-2'>
            <div id="Section-2-Top">
                <div id="Section-2-Top-Title">{`Amount of policies required to sell each month to hit $${Math.round(Number(props.goalEarnings)).toLocaleString()}/month or $${Math.round(Number(props.goalEarnings * 12)).toLocaleString()}/year within ${props.timeframe} months:`}</div>
                <div id="big-number">{Number(policiesRequired).toLocaleString()}</div>
                
            </div>
            <div id="Section-2-Bottom">
                <div className="calc-item-title">How did we get these numbers?</div>
                <div className="calc-item">
                    <div className="calc-item-left">
                        Average Monthly Premium:
                    </div>
                    <div>
                        {`$${props.averageMonthlyPremium}`}
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
                        {policiesRequired}
                    </div>
                </div>
                <div className="calc-item">
                    <div className="calc-item-left">
                        Monthly Increase In Residual Income:
                    </div>
                    <div>
                        {"$" + Math.round(((commissionPerPolicy * policiesRequired) + Number.EPSILON) * 100) / 100}
                    </div>
                </div>
                <div className="calc-item">
                    <div className="calc-item-left">
                        {`$${Math.round(commissionPerPolicy * policiesRequired)}/month x ${props.timeframe} months =`}
                    </div>
                    <div>
                        {"$" + Math.round(commissionPerPolicy * policiesRequired * props.timeframe).toLocaleString() + "/month"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2