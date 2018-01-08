import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Cards } from 'react-wood-duck';
import Table from '../Table';

const propTypes = {
  cardHeaderText: PropTypes.string,
  status: PropTypes.oneOf(['idle', 'waiting', 'ready', 'error']),
  columns: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ),
  renderOnError: PropTypes.func,
  renderOnEmpty: PropTypes.func,
};

const defaultRenderOnEmpty = () => (
  <Alert
    alertClassName="info"
    alertMessage="No records found!"
    alertCross={null}
    faIcon="fa-info-circle"
  />
);

const defaultRenderOnError = () => (
  <Alert
    alertClassName="error"
    alertMessage="An unexpected error occured!"
    alertCross={null}
    faIcon="fa-info-circle"
  />
);

const defaultProps = {
  status: 'idle',
  renderOnEmpty: defaultRenderOnEmpty,
  renderOnError: defaultRenderOnError,
};

const DataGridCard = ({
  cardHeaderText,
  status,
  columns,
  rows,
  renderOnError,
  renderOnEmpty,
}) => {
  const content = (() => {
    if (status === 'idle') return false;
    if (status === 'error') return renderOnError();
    if (status === 'waiting') return 'waiting...';
    if (!rows.length) return renderOnEmpty();
    return <Table colNames={columns} data={rows} />;
  })();
  return (
    <Cards cardHeaderText={cardHeaderText} cardbgcolor="transparent">
      {content}
    </Cards>
  );
};

DataGridCard.propTypes = propTypes;
DataGridCard.defaultProps = defaultProps;

export default DataGridCard;
