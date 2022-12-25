import React from 'react';
import { Divider, Tag, Timeline, Typography } from 'antd';

export function EventCalendar() {
  return <div>
     <Typography.Title level={3} style={{ margin: 0 }}>
      Upcoming Events
     </Typography.Title>
     <Divider />
    <Timeline>
      <Timeline.Item> <Tag color="blue">2015-09-01</Tag>Create a services site </Timeline.Item>
      <Timeline.Item> <Tag color="blue">2015-09-01</Tag>Solve initial network problems </Timeline.Item>
      <Timeline.Item> <Tag color="blue">2015-09-01</Tag>Technical testing </Timeline.Item>
      <Timeline.Item> <Tag color="blue">2015-09-01</Tag>Network problems being solved </Timeline.Item>
    </Timeline>
  </div>;
}
