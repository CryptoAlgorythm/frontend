import React from 'react';

const Table = ({ wordFrequency, total }) => {
    const result = Object.keys(wordFrequency).map((word) => {
        return (
            <tr key={word}>
                <td>{word}</td>
                <td>{wordFrequency[word]}</td>
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
                <tfoot>
                    <tr className="table-info">
                        <th>Total Count</th>
                        <th>{total}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table;
