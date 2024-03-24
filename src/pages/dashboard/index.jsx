import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import {Button, Card, Col, Form, Input, Row, Table, theme} from 'antd';
import React from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */

const columns = [
  {
    title: 'Bộ phận',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Tác vụ',
    dataIndex: 'action',
    key: 'action',
  },
  {
    title: 'Thông tin chi tiết',
    dataIndex: 'details',
    key: 'details',
  },
]

const data = [
  {
    key: '1',
    department: 'Bộ phận A',
    action: 'Thực hiện',
    details: 'Chi tiết Bộ phận A',
  },
  {
    key: '2',
    department: 'Bộ phận B',
    action: 'Chỉnh sửa',
    details: 'Chi tiết Bộ phận B',
  },
  {
    key: '3',
    department: 'Bộ phận C',
    action: 'Xóa',
    details: 'Chi tiết Bộ phận C',
  },
];


const columnsTS = [
  {
    title: 'STT',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Tên tài sản',
    dataIndex: 'assetName',
    key: 'assetName',
  },
  {
    title: 'Đơn vị tính',
    dataIndex: 'unit',
    key: 'unit',
  },
  {
    title: 'Số lượng yêu cầu',
    dataIndex: 'quantityRequested',
    key: 'quantityRequested',
  },
  {
    title: 'Số lượng duyệt',
    dataIndex: 'quantityApproved',
    key: 'quantityApproved',
  },
  {
    title: 'Ngày cần',
    dataIndex: 'neededDate',
    key: 'neededDate',
  },
  {
    title: 'Thông số kỹ thuật',
    dataIndex: 'technicalSpecs',
    key: 'technicalSpecs',
  },
  {
    title: 'Hình ảnh (nếu có)',
    dataIndex: 'image',
    key: 'image',
    // render: () => (
    //   <img
    //     src='https://cdn-icons-png.freepik.com/256/2292/2292038.png'
    //     alt="asset"
    //     style={{ maxWidth: '100px', maxHeight: '100px' }}
    //   />
    // ),
  },
  {
    title: 'Mô tả về tài sản',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Đã & đang dùng ở TCI',
    dataIndex: 'usedAtTCI',
    key: 'usedAtTCI',
  },
  {
    title: 'Mục đích',
    dataIndex: 'purpose',
    key: 'purpose',
  },
  {
    title: 'Ghi chú',
    dataIndex: 'note',
    key: 'note',
  },
];

const dataTS = [
  {
    key: '1',
    index: 1,
    assetName: 'Asset 1',
    unit: 'Unit 1',
    quantityRequested: 5,
    quantityApproved: 3,
    neededDate: '2024-02-16',
    technicalSpecs: 'Specs 1',
    image: 'path/to/image1.jpg',
    description: 'Description 1',
    usedAtTCI: 'Yes',
    purpose: 'Purpose 1',
    note: 'Note 1',
  },
  // Add more data as needed
];

const formItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 12,
    },
    md: {
      span: 17,
    },
  },
};

const responsive = {
  xxl: 12,
  xl: 12,
  lg: 24,
  md: 24,
  sm: 24,
  xs: 24
}

const Index = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
          marginBottom: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <Row gutter={16} style={{marginBottom:20}}>
          <Col {...responsive}>
            <div
              style={{
                fontSize: '18px',
                color: token.colorTextHeading,
              }}
            >
              <b>Duyệt đề xuất</b>
            </div>
          </Col>
          <Col {...responsive}>
            <Row justify="end">
              <Button type="primary" style={{ marginRight: '10px' }}>Lưu</Button>
              <Button type="primary" style={{ marginRight: '10px' }}>Hoàn tất</Button>
              <Button type="default">Quay lại</Button>
            </Row>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col {...responsive}>
            <div
              style={{
                fontSize: '18px',
                color: token.colorTextHeading,
              }}
            >
              <b style={{
                fontSize: '18px',
                color: token.colorTextHeading,
              }}>DXKH20231211 - 1</b>
              <Form.Item
                {...formItemLayout}
                name="a"
                label="Cơ sở áp dụng"
              >
                <Input readOnly defaultValue="Công ty Cổ phần Y khoa & Thẩm mỹ Thu Cúc"/>
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                name="b"
                label="Bộ phận đề xuất"
              >
                <Input readOnly defaultValue="Bộ phận 1"/>
              </Form.Item>
            </div>
          </Col>
          <Col {...responsive}>
            <b style={{
              fontSize: '18px',
              color: token.colorTextHeading,
            }}>Chi tiết trạng thái duyệt</b>
            <Table columns={columns} dataSource={data} pagination={false} bordered={true} />
          </Col>
        </Row>
      </Card>
      <Card
        style={{
          borderRadius: 8,
          marginBottom: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
        >
          <Row gutter={16}>
            <Col {...responsive}>
              <div
                style={{
                  fontSize: '16px',
                  color: token.colorTextHeading,
                }}
              >
                <b>DANH MỤC TÀI SẢN</b>
              </div>
            </Col>
            <Col {...responsive}></Col>
          </Row>
          <Table columns={columnsTS} dataSource={dataTS} bordered={true} />
        </div>
      </Card>
    </PageContainer>
  );
};

export default Index;
