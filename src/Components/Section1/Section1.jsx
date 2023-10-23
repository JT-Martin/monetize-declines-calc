import React, {useContext} from "react";
import { InputContext } from "../../Containers/AppContainer";
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
            paddingLeft: 8
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
            paddingLeft: 10
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
        <div id="Section-1" className="self-center font-display text-xs sm:text-sm md:text-xs mx-3 md:mx-0 w-full px-3 md:px-0">
          <div className="card-padding text-black antialiased box-border p-3 sm:p-5 rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl border border-slate-300 bg-white shadow-lg">
            <div className='form-div'>
              <form>
                <label className="input-label antialiased box-border block mb-1 font-semibold text-gray-700">Mode:</label>
                <Select 
                  theme={customTheme} 
                  styles={customStyles} 
                  options={modeOptions} 
                  value={modeOptions.find(item => item.value === mode)} 
                  onChange={handleModeChange} 
                  isSearchable={false}
                  className="mb-4">
                </Select>
                {mode === "Timeframe" ? <label className="input-label antialiased box-border block mb-1 font-semibold text-gray-700">Number Of Declines Monthly:</label> : null}
                {mode === "Timeframe" ? (
                    <div className='calc-input-container antialiased text-black box-border flex p-2 border border-gray-300 rounded bg-white mb-4'>
                        <input type="number" className="calc-input-field antialiased box-border w-full bg-white border-white outline-0" maxLength="256" min={0} value={monthlyDeclines} id="price-input-field" onChange={handleMonthlyDeclinesChange} required/>
                    </div>
                ) : null}
                <label className="input-label antialiased box-border block mb-1 font-semibold text-gray-700">Average Monthly Premium:</label>
                <div className='calc-input-container antialiased text-black box-border flex p-2 border border-gray-300 rounded bg-white mb-4'>
                  <div className="calc-input-dollar mr-1">$</div>
                  <input type="number" className="calc-input-field antialiased box-border w-full bg-white border-white outline-0" maxLength="256" min={0} value={averageMonthlyPremium} id="price-input-field" onChange={handlePremiumChange} required/>
                </div>
                <label className="input-label antialiased box-border block mb-1 font-semibold text-gray-700">Commission Percentage:</label>
                <div className="calc-input-container perc antialiased text-black box-border flex  p-2 border border-gray-300 rounded bg-white mb-4 items-center justify-left">
                  <input type="number" className="calc-input-field antialiased box-border w-full bg-white border-white outline-0" min={0} maxLength="256" id="commission-percentage-input-field" value={commissionPercentage} onChange={handleCommissionPercentageChange} required/>
                  <div className="calc-input-perc items-center justify-left">%</div>
                </div>
                <label className="input-label antialiased box-border block mb-1 font-semibold text-gray-700">Goal Earnings:</label>
                <div className="multiple-input-container flex flex-col min-[400px]:flex-row min-[400px]:content-center items-start gap-2 min-[400px]:gap-4 mb-4">
                  <div className='calc-input-container antialiased text-black box-border flex p-2 border border-gray-300 rounded bg-white w-full'>
                    <div className="calc-input-dollar mr-1">$</div>
                    <input type="number" className="calc-input-field antialiased box-border w-full bg-white border-white outline-0" maxLength="256" min={0} value={Math.round(goalEarnings)} id="price-input-field" onChange={handleGoalEarningsChange} required/>
                    <div className="calc-input-suffix text-gray-400 whitespace-nowrap">/ month</div>
                  </div>
                  <div className="min-[400px]:self-center">or</div>
                  {/* <div style={{marginBottom: 20}}>OR</div> */}
                  <div className='calc-input-container antialiased text-black box-border flex p-2 border border-gray-300 rounded bg-white w-full'>
                    <div className="calc-input-dollar mr-1">$</div>
                    <input type="number" className="calc-input-field antialiased box-border w-full bg-white border-white outline-0" maxLength="256" min={0} value={goalEarnings * 12} id="price-input-field" onChange={handleYearlyGoalEarningsChange} required/>
                    <div className="calc-input-suffix text-gray-400 whitespace-nowrap">/ year</div>
                  </div>
                </div>
                {mode === "Sales Target" ? <label className="input-label antialiased box-border block mb-1 font-semibold text-gray-700">Months To Hit Goal Earnings:</label> : null}
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