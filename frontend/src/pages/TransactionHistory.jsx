import { useContext, useEffect, useState } from "react";
import { Table } from "flowbite-react";
import Public from "../layouts/Public";
import axios from "axios";
import { UserContext } from "../context/UserContext";

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  const { token } = useContext(UserContext);

  useEffect(() => {
    // Mengambil data dari API dengan token otentikasi
    axios
      .get("http://localhost:3003/api/transactions/user/2", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTransactions(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [token]);
  return (
    <Public>
      <div className="container flex py-5 h-screen">
        <Table>
          <Table.Head>
            <Table.HeadCell className="bg-[#e8c5b5]">
              ID Transaksi
            </Table.HeadCell>
            <Table.HeadCell className="bg-[#e8c5b5]">Mobil</Table.HeadCell>
            <Table.HeadCell className="bg-[#e8c5b5]">
              Pickup Date
            </Table.HeadCell>
            <Table.HeadCell className="bg-[#e8c5b5]">
              Pickoff Date
            </Table.HeadCell>
            <Table.HeadCell className="bg-[#e8c5b5]">
              Pickup Location
            </Table.HeadCell>
            <Table.HeadCell className="bg-[#e8c5b5]">
              Pickoff Location
            </Table.HeadCell>
            <Table.HeadCell className="bg-[#e8c5b5]">
              Pickup Time
            </Table.HeadCell>
            <Table.HeadCell className="bg-[#e8c5b5]">
              Pickoff Time
            </Table.HeadCell>
            <Table.HeadCell className="bg-[#e8c5b5]">User Name</Table.HeadCell>
            <Table.HeadCell className="bg-[#e8c5b5]">Email</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {transactions.map((transaction) => (
              <Table.Row
                key={transaction.id_transaction}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {transaction.id_transaction}
                </Table.Cell>
                <Table.Cell>{transaction.car_id}</Table.Cell>
                <Table.Cell>{transaction.pickup_date}</Table.Cell>
                <Table.Cell>{transaction.pickoff_date}</Table.Cell>
                <Table.Cell>{transaction.pickup_location}</Table.Cell>
                <Table.Cell>{transaction.pickoff_location}</Table.Cell>
                <Table.Cell>{transaction.pickup_time}</Table.Cell>
                <Table.Cell>{transaction.pickoff_time}</Table.Cell>
                <Table.Cell>{transaction.name}</Table.Cell>
                <Table.Cell>{transaction.email}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Public>
  );
}
