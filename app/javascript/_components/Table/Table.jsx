import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  colNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const defaultProps = {
  data: [],
};

export const Table = ({ colNames, data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>{colNames && colNames.map((d, i) => <th key={i}>{d}</th>)}</tr>
        </thead>
        <tbody>
          {data.length &&
            data.map((row, i) => (
              <tr key={i}>
                {row.map((d, j) => <td key={`${i}-${j}`}>{d}</td>)}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
