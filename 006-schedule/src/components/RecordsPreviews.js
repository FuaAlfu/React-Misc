import React from 'react';
import Record from './Record';

const RecordsPreviews = ({ records }) => {
  return (
    <div className="records-previews">
      {records.map((record) => (
        <Record key={record.date} record={record} />
      ))}
    </div>
  );
};

export default RecordsPreviews;