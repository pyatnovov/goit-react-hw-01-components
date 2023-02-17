import PropTypes from "prop-types";
import { Table ,Thead,Th,Tr,Td} from "./TransactionHistory.styled";
export const TransactionHistory = ({ items }) => (
    <Table className="transaction-history">
    <Thead>
        <Tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
        </Tr>
    </Thead>
    {items.map((item) => {
    return <tbody key={item.id}>
        <Tr>
        <Td>{item.type}</Td>
        <Td>{item.amount}</Td>
        <Td>{item.currency}</Td>
        </Tr>           
    </tbody>        
    })}
    </Table>
);
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};


