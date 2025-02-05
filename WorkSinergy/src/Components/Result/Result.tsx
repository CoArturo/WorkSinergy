import { Button } from "antd";
import { Result } from 'antd'
import "./Result.css"


export const ResultComponent: React.FC = () => (
    <div className="resultContainer">
        <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
            <Button type="primary" key="console">
                Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>
        ]}
      />
    </div>
)