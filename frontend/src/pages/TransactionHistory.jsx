import { Table } from "flowbite-react";
import Public from "../layouts/Public";

export default function TransactionHistory() {
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
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple MacBook Pro
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Public>
  );
}
