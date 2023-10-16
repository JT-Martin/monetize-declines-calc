import React from "react";
import './Section1.css'
import Select from 'react-select'

function Section1(props) {
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
            paddingLeft: 20,
            paddingTop: 8,
            paddingBottom: 8,
            fontSize: 22
        }),
        menu: (base) => ({
            ...base,
            borderRadius: 0,
            marginTop: 0,
            padding: 0
        }),
        menuList: (base) => ({
            ...base,
            padding: 0,
            fontSize: 22,
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
    
    return(
        <div id="Section-1">
            <div className="card-padding">
                <div className='form-div'>
                    <form>
                        <label className="input-label">Mode:</label>
                        <Select 
                            theme={customTheme} 
                            styles={customStyles} 
                            options={modeOptions} 
                            value={modeOptions.find(item => item.value === props.mode)} 
                            onChange={props.modeChange} 
                            isSearchable={false}>
                        </Select>
                        <label className="input-label">Average Monthly Premium:</label>
                        <div className='calc-input-container'>
                            <div className="calc-input-dollar">$</div>
                            <input type="number" className="calc-input-field" maxLength="256" min={0} value={props.averageMonthlyPremium} id="price-input-field" onChange={props.premiumChange} required/>
                        </div>
                        <label className="input-label">Commission Percentage:</label>
                        <div className="calc-input-container perc">
                            <input type="number" className="calc-input-field" min={0} max={100} maxLength="256" id="commission-percentage-input-field" value={props.commissionPercentage} onChange={props.commissionPercentageChange} required/>
                            <div className="calc-input-perc">%</div>
                        </div>
                        <label className="input-label">Goal Earnings:</label>
                        <div className="multiple-input-container">
                            <div className='calc-input-container'>
                                <div className="calc-input-dollar">$</div>
                                <input type="number" className="calc-input-field" maxLength="256" min={0} value={Math.round(props.goalEarnings)} id="price-input-field" onChange={props.goalEarningsChange} required/>
                                <div className="calc-input-suffix">/ month</div>
                            </div>
                            <div style={{marginBottom: 20}}>OR</div>
                            <div className='calc-input-container'>
                                <div className="calc-input-dollar">$</div>
                                <input type="number" className="calc-input-field" maxLength="256" min={0} value={props.goalEarnings * 12} id="price-input-field" onChange={props.yearlyGoalEarningsChange} required/>
                                <div className="calc-input-suffix">/ year</div>
                            </div>
                        </div>
                        <label className="input-label">Months To Hit Goal Earnings:</label>
                        <Select 
                            theme={customTheme} 
                            styles={customStyles} 
                            options={timeframeOptions} 
                            value={timeframeOptions.find(item => item.value === props.timeframe)} 
                            onChange={props.timeframeChange} 
                            isSearchable={false}>
                        </Select>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Section1