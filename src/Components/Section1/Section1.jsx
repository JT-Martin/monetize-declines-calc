import React, {useContext} from "react";
import { InputContext } from "../../Containers/AppContainer";
import './Section1.css'
import Select from 'react-select'

function Section1() {
    
    const {
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
        handleMonthlyDeclinesChange
      } = useContext(InputContext);
    
    function customTheme(theme) {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: 'rgba(0,0,0,0.1)',
                primary: 'rgba(0,0,0,0.8)'
            }
        }
      }
      
    const customStyles = {
        control: (base, state) => ({
            ...base,
            background: "white",
            // borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
            borderRadius: 4,
            boxShadow: state.isFocused ? null : null,
            overflow: 'initial',
            paddingLeft: 20
        }),
        menu: (base) => ({
            ...base,
            borderRadius: 0,
            marginTop: 0,
            padding: 0
        }),
        menuList: (base) => ({
            ...base,
            padding: 0
        }),
        singleValue: (base) => ({
            ...base,
            overflow: 'initial'
        }),

        valueContainer: (base) => ({
            ...base,
            padding: 0
        }),

        container: (base) => ({
            ...base,
            marginBottom: 20
        }),

        option: (base) => ({
            ...base,
            paddingLeft: 22
        }),
    }
      
    const modeOptions = [
        {value: 'Sales Target', label: 'Calculate Monthly Sales Target'},
        {value: 'Timeframe', label: 'Calculate Time To Achieve Goal Earnings'}
    ]

    const timeframeOptions = [
        {value: '12', label: '12'},
        {value: '24', label: '24'},
        {value: '36', label: '36'}
    ]
    
    return (
        <div id="Section-1">
          <div className="card-padding">
            <div className='form-div'>
              <form>
                <label className="input-label">Mode:</label>
                <Select 
                  theme={customTheme} 
                  styles={customStyles} 
                  options={modeOptions} 
                  value={modeOptions.find(item => item.value === mode)} 
                  onChange={handleModeChange} 
                  isSearchable={false}>
                </Select>
                {mode === "Timeframe" ? <label className="input-label">Number Of Declines Monthly:</label> : null}
                {mode === "Timeframe" ? (
                    <div className='calc-input-container'>
                        <input type="number" className="calc-input-field" maxLength="256" min={0} value={monthlyDeclines} id="price-input-field" onChange={handleMonthlyDeclinesChange} required/>
                    </div>
                ) : null}
                <label className="input-label">Average Monthly Premium:</label>
                <div className='calc-input-container'>
                  <div className="calc-input-dollar">$</div>
                  <input type="number" className="calc-input-field" maxLength="256" min={0} value={averageMonthlyPremium} id="price-input-field" onChange={handlePremiumChange} required/>
                </div>
                <label className="input-label">Commission Percentage:</label>
                <div className="calc-input-container perc">
                  <input type="number" className="calc-input-field" min={0} maxLength="256" id="commission-percentage-input-field" value={commissionPercentage} onChange={handleCommissionPercentageChange} required/>
                  <div className="calc-input-perc">%</div>
                </div>
                <label className="input-label">Goal Earnings:</label>
                <div className="multiple-input-container">
                  <div className='calc-input-container'>
                    <div className="calc-input-dollar">$</div>
                    <input type="number" className="calc-input-field" maxLength="256" min={0} value={Math.round(goalEarnings)} id="price-input-field" onChange={handleGoalEarningsChange} required/>
                    <div className="calc-input-suffix">/ month</div>
                  </div>
                  <div style={{marginBottom: 20}}>OR</div>
                  <div className='calc-input-container'>
                    <div className="calc-input-dollar">$</div>
                    <input type="number" className="calc-input-field" maxLength="256" min={0} value={goalEarnings * 12} id="price-input-field" onChange={handleYearlyGoalEarningsChange} required/>
                    <div className="calc-input-suffix">/ year</div>
                  </div>
                </div>
                {mode === "Sales Target" ? <label className="input-label">Months To Hit Goal Earnings:</label> : null}
                {mode === "Sales Target" ? (
                    <Select 
                        theme={customTheme} 
                        styles={customStyles} 
                        options={timeframeOptions} 
                        value={timeframeOptions.find(item => item.value === timeframe)} 
                        onChange={handleTimeframeChange} 
                        isSearchable={false}>
                    </Select>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      );
}

export default Section1