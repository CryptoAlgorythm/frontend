import React from 'react';

const Table = ({ wordFrequency }) => {
    const result = Object.keys(wordFrequency).map((word) => {
        return (
            <tr key={wordFrequency[word].name}>
                <td>{wordFrequency[word].name}</td>
                <td>{wordFrequency[word].total}</td>
            </tr>
        )
    });

    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Word</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
