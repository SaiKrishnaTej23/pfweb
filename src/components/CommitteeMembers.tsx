import { Avatar, Divider, List, Typography } from "antd";

const CommitteeMembers = () => {
    const data = [
        {
            title: 'Krishna Rao',
            role: 'General Secratery'
        },
        {
            title: 'P V Subrahmanyam',
            role: 'President'
        },
        {
            title: 'P V RAO',
            role: 'Tresurer'
        },
        {
            title: 'P Subramanyam',
            role: 'Organizer'
        },
    ];
    return <div>
        <Typography.Title level={3} style={{ margin: 0 }}>
            Committee Members
        </Typography.Title>
        <Divider />
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <List.Item key={item.title}>
                    <List.Item.Meta
                        avatar={<Avatar src={item.title} />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={item.role}
                    />
                </List.Item>
            )}
        />
    </div>;
}

export default CommitteeMembers;