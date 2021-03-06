import React, { useState } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import {
  setTextFilter,
  setSortBy,
  setStartDateFilter,
  setEndDateFilter
} from "../../store/actions/filters.actions";

export const Filters = ({
  filters,
  setTextFilter,
  setSortBy,
  setStartDate,
  setEndDate
}) => {
  const [focused, setFocused] = useState(null);
  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const onTextChange = e => {
    setTextFilter(e.target.value);
  };
  const onSortChange = e => {
    setSortBy(e.target.value);
  };

  return (
    <div className="Filters">
      <input
        className="text-input"
        type="text"
        name="text"
        placeholder="Filter text: "
        value={filters.text}
        onChange={onTextChange}
      />
      <select
        className="selector"
        value={filters.sortBy}
        name="sortBy"
        onChange={onSortChange}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <div>
        <DateRangePicker
          startDate={filters.startDate}
          startDateId={"startId8739137"}
          endDate={filters.endDate}
          endDateId={"endId739893"}
          onDatesChange={onDatesChange}
          focusedInput={focused}
          onFocusChange={setFocused}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  setSortBy: sort => dispatch(setSortBy(sort)),
  setStartDate: startDate => dispatch(setStartDateFilter(startDate)),
  setEndDate: endDate => dispatch(setEndDateFilter(endDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
