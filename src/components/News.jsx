import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment/moment'
import icon from '../images/cryptonews.jpg'
import icon2 from '../images/cryptologo.jpg'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const {Text, Title} = Typography;
const { Option } = Select;

const demoImage = icon;
const demoImage2 = icon2;

const News = ({ simplified }) => {
  const count = simplified ? 5 : 10;
  const { data: cryptoNews, isLoading, isError } = useGetCryptoNewsQuery({ count });

  if (isLoading) return 'Loading...';
  if (isError || !cryptoNews) return 'Error loading news data.';

  // Assuming cryptoNews is an object with a 'data' property containing the array
  const newsData = cryptoNews.data || [];

  return (
    <Row gutter={[24, 24]}>
      {newsData.map((news, i)=>(
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel="noreferrer">
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                {news.title}
                </Title>
                <img style={{maxWidth: '100px', maxHeight: '50px'}} src={news?.thumbnail?.url || demoImage} alt='news'/>
              </div>
              <p>
                {news.description > 100 ? `${news.description.substring(0.100)}...`
                  : news.description
                }
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={demoImage2} alt='news'/>
                </div>
                <Text>{moment(news.createdAt).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
