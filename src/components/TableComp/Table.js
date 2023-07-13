import TableHead from '../TableComp/TableHead';
import TableBody from '../TableComp/TableBody';

const Table = () => {
    return (
        /* Todo: Show below table conditionally (only once result data is available) */
        /* Show fallback text if no data is available */
        <table className="result">
            <TableHead />
            <TableBody />
        </table>
    )

}

export default Table