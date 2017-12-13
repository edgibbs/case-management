import React from 'react';
import PropTypes from 'prop-types';
import { Cards } from 'react-wood-duck';

const CaseType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  assignmentType: PropTypes.string.isRequired,
  assignmentDate: PropTypes.string.isRequired,
  serviceComponent: PropTypes.string.isRequired,
});

const propTypes = {
  cases: PropTypes.arrayOf(CaseType),
  status: PropTypes.string,
  renderEmpty: PropTypes.func,
  renderWaiting: PropTypes.func,
};
const defaultProps = {
  renderWaiting: () => 'waiting...',
  renderEmpty: () => 'empty!',
};

const CaseloadCard = ({ status, cases, renderWaiting, renderEmpty }) => {
  const getHeaderText = () => {
    return status === 'ready' && cases && cases.length
      ? `Caseload (${cases.length})`
      : 'Caseload';
  };
  const renderRecords = () => {
    if (!cases || !cases.length) {
      return renderEmpty();
    }
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service Component</th>
            <th>Type</th>
            <th>Assignment Date</th>
            <th>Response Comments</th>
          </tr>
        </thead>
        <tbody>
          {cases.map(
            ({
              id,
              name,
              serviceComponent,
              assignmentType,
              assignmentDate,
            }) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{serviceComponent}</td>
                  <td>{assignmentType}</td>
                  <td>{assignmentDate}</td>
                  <td />
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    );
  };
  return (
    <Cards cardHeaderText={getHeaderText()} cardbgcolor="transparent">
      {status === 'ready' ? renderRecords() : renderWaiting()}
    </Cards>
  );
};

CaseloadCard.propTypes = propTypes;
CaseloadCard.defaultProps = defaultProps;

export default CaseloadCard;
