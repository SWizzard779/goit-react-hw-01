import css from './Transaction History.module.css'
import clsx from 'clsx'
export default function TransactionHistory({items}) {
    return (
        <table className={css.table}>
            <thead className={css.header}>
                <tr>
                    <th className={css.column}>Type</th>
                    <th className={css.column}>Amount</th>
                    <th className={css.column}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                return(
                    <tr key = {item.id}>
                        <td className={clsx(css.row, css.capitalized)}>{item.type}</td>
                        <td className={css.row}>{item.amount}</td>
                        <td className={css.row}>{item.currency}</td>
                    </tr>)
        
    })}
    
            </tbody>
        </table>

    )
}