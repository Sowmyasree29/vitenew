import PortoFolioTracker from "./transactionMemo";



function TransactionsData()
{
    const transactions = [
        { date: "2023-01-01", amount: 5000 },
        { date: "2023-02-01", amount: 7000 },
        { date: "2023-03-01", amount: 3000 },
        { date: "2023-04-01", amount: 10000 },
        { date: "2023-05-01", amount: 4500 },
        { date: "2023-06-01", amount: 6000 },
        { date: "2023-07-01", amount: 3500 },
        { date: "2023-08-01", amount: 8000 },
        { date: "2023-09-01", amount: 12000 },
        { date: "2023-10-01", amount: 7000 },
        { date: "2023-11-01", amount: 4000 },
        { date: "2023-12-01", amount: 5500 }
      ];
      
    return(
        <>
        <PortoFolioTracker transactions={transactions} startDate="2023-01-01" endDate="2023-12-01"/>
        </>

    )
}
export default TransactionsData;