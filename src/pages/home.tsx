import { Col, Row } from 'antd';
import { EventCalendar } from '../components/eventCalendar';
import './home.css';
import CommitteeMembers from './../components/CommitteeMembers';
export function Home() {
    return <div className='home'>
        <Row>
            <Col span={18}>Content</Col>
            <Col span={6}>
                <EventCalendar />
                <CommitteeMembers />
            </Col>
        </Row>
    </div>;
}
