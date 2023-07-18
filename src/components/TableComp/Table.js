import TableHead from '../TableComp/TableHead';

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
const Table = (props) => {
    return (
        <table className="result">
            <TableHead />
            <tbody>
                {props.data.map((yearData) => (
                    <tr key={yearData.year}>
                        <td>{formatter.format(yearData.year)}</td>
                        <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                        <td>{formatter.format(yearData.yearlyInterest)}</td>
                        <td>{formatter.format(yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year)}</td>
                        <td>{formatter.format(props.initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
                    </tr>))}

            </tbody>
        </table>
    )

}

export default Table