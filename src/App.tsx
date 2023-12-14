import { Table } from "./components/Table";
import {Users, columns} from "./data"
export const App = () => {
  return (
    <div className="App">
      <Table items={Users} columns={columns} />
    </div>
  );
}

