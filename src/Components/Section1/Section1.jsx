import React, { useContext } from "react";
import { InputContext } from "../../Containers/AppContainer";
import Select from "react-select";

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
    handleMonthlyDeclinesChange,
  } = useContext(InputContext);

  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "rgba(0,0,0,0.1)",
        primary: "rgba(0,0,0,0.8)",
      },
    };
  }

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      // borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      borderRadius: 4,
      boxShadow: state.isFocused ? null : null,
      overflow: "initial",
      paddingLeft: 8,
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      padding: 0,
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
    }),
    singleValue: (base) => ({
      ...base,
      overflow: "initial",
    }),

    valueContainer: (base) => ({
      ...base,
      padding: 0,
    }),

    container: (base) => ({
      ...base,
      marginBottom: 20,
    }),

    option: (base) => ({
      ...base,
      paddingLeft: 10,
    }),
  };

  const modeOptions = [
    { value: "Sales Target", label: "Calculate Monthly Sales Target" },
    { value: "Timeframe", label: "Calculate Time To Achieve Goal Earnings" },
  ];

  const timeframeOptions = [
    { value: "12", label: "12" },
    { value: "24", label: "24" },
    { value: "36", label: "36" },
  ];

  return (
    <div
      id="Section-1"
      className="mx-3 w-full self-center px-3 font-display text-base sm:text-base md:mx-0 md:my-5 md:px-0 md:text-xs"
    >
      <div className="card-padding box-border rounded-tl-2xl rounded-tr-2xl border border-slate-300 bg-white p-3 text-black antialiased shadow-lg sm:p-5 md:rounded-bl-2xl md:rounded-tr-none">
        <div className="form-div">
          <form>
            <label className="input-label mb-1 box-border block font-semibold text-gray-700 antialiased">
              Mode:
            </label>
            <Select
              theme={customTheme}
              styles={customStyles}
              options={modeOptions}
              value={modeOptions.find((item) => item.value === mode)}
              onChange={handleModeChange}
              isSearchable={false}
              className="mb-4"
            ></Select>
            {mode === "Timeframe" ? (
              <label className="input-label mb-1 box-border block font-semibold text-gray-700 antialiased">
                Number Of Declines Monthly:
              </label>
            ) : null}
            {mode === "Timeframe" ? (
              <div
                className={`calc-input-container mb-4 box-border flex rounded border bg-white p-2 text-black antialiased focus-within:border-blue-500 ${
                  monthlyDeclines ? "border-gray-300" : "border-red-400"
                }`}
              >
                <input
                  type="number"
                  className="calc-input-field box-border w-full border-white bg-white antialiased outline-none outline-0 focus:outline-none focus:outline-0"
                  maxLength="256"
                  min={0}
                  value={monthlyDeclines}
                  id="price-input-field"
                  onChange={handleMonthlyDeclinesChange}
                  required
                />
              </div>
            ) : null}
            <label className="input-label mb-1 box-border block font-semibold text-gray-700 antialiased">
              Average Monthly Premium:
            </label>
            <div
              className={`calc-input-container mb-4 box-border flex rounded border bg-white p-2 text-black antialiased focus-within:border-blue-500 ${
                averageMonthlyPremium ? "border-gray-300" : "border-red-400"
              }`}
            >
              <div className="calc-input-dollar mr-1">$</div>
              <input
                type="number"
                className="calc-input-field box-border w-full border-white bg-white antialiased outline-none outline-0 focus:outline-none focus:outline-0"
                maxLength="256"
                min={0}
                value={averageMonthlyPremium}
                id="price-input-field"
                onChange={handlePremiumChange}
                required
              />
            </div>
            <label className="input-label mb-1 box-border block font-semibold text-gray-700 antialiased">
              Commission Percentage:
            </label>
            <div
              className={`calc-input-container perc justify-left mb-4 box-border flex items-center  rounded border bg-white p-2 text-black antialiased focus-within:border-blue-500 ${
                commissionPercentage ? "border-gray-300" : "border-red-400"
              }`}
            >
              <input
                type="number"
                className="calc-input-field box-border w-full border-white bg-white antialiased outline-none outline-0 focus:outline-none focus:outline-0"
                min={0}
                maxLength="256"
                id="commission-percentage-input-field"
                value={commissionPercentage}
                onChange={handleCommissionPercentageChange}
                required
              />
              <div className="calc-input-perc justify-left items-center">%</div>
            </div>
            <label className="input-label mb-1 box-border block font-semibold text-gray-700 antialiased">
              Goal Earnings:
            </label>
            <div className="multiple-input-container mb-4 flex flex-col items-start gap-2 min-[450px]:flex-row min-[450px]:content-center min-[450px]:gap-4">
              <div
                className={`calc-input-container box-border flex w-full rounded border bg-white p-2 text-black antialiased focus-within:border-blue-500 ${
                  goalEarnings ? "border-gray-300" : "border-red-400"
                }`}
              >
                <div className="calc-input-dollar mr-1">$</div>
                <input
                  type="number"
                  className="calc-input-field box-border w-full border-white bg-white antialiased outline-none outline-0 focus:outline-none focus:outline-0"
                  maxLength="256"
                  min={0}
                  value={Math.round(goalEarnings)}
                  id="price-input-field"
                  onChange={handleGoalEarningsChange}
                  required
                />
                <div className="calc-input-suffix whitespace-nowrap text-gray-400">
                  / month
                </div>
              </div>
              <div className="min-[450px]:self-center">or</div>
              {/* <div style={{marginBottom: 20}}>OR</div> */}
              <div
                className={`calc-input-container box-border flex w-full rounded border bg-white p-2 text-black antialiased focus-within:border-blue-500 ${
                  goalEarnings ? "border-gray-300" : "border-red-400"
                }`}
              >
                <div className="calc-input-dollar mr-1">$</div>
                <input
                  type="number"
                  className="calc-input-field box-border w-full border-white bg-white antialiased outline-none outline-0 focus:outline-none focus:outline-0"
                  maxLength="256"
                  min={0}
                  value={goalEarnings * 12}
                  id="price-input-field"
                  onChange={handleYearlyGoalEarningsChange}
                  required
                />
                <div className="calc-input-suffix whitespace-nowrap text-gray-400">
                  / year
                </div>
              </div>
            </div>
            {mode === "Sales Target" ? (
              <label className="input-label mb-1 box-border block font-semibold text-gray-700 antialiased">
                Months To Hit Goal Earnings:
              </label>
            ) : null}
            {mode === "Sales Target" ? (
              <Select
                theme={customTheme}
                styles={customStyles}
                options={timeframeOptions}
                value={timeframeOptions.find(
                  (item) => item.value === timeframe,
                )}
                onChange={handleTimeframeChange}
                isSearchable={false}
              ></Select>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Section1;
