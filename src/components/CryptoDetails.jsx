import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Select, Typography, Row, Col } from 'antd';
import { MoneyCollectFilled, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined } from '@ant-design/icons'

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  console.log(coinId)

  return (
    <div>
      Crypto Details {coinId}
    </div>
  )
}

export default CryptoDetails;
