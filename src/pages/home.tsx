import { Col, Row } from 'antd';
import { EventCalendar } from '../components/eventCalendar';
import './home.css';
import CommitteeMembers from './../components/CommitteeMembers';
export function Home() {
    return <div className='home'>
        <Row>
            <Col span={18} md={18} xs={24}>Content</Col>
            <Col span={6} md={6} xs={24}>
                <EventCalendar />
                <CommitteeMembers />
            </Col>
        </Row>
    </div>;
}
