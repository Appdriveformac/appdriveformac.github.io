import React, { useState, useEffect } from 'react';
import {Table, Button, Space, Modal, Form, Input, Radio, Tag, message, Upload, Image, Row} from 'antd';
import {PlusOutlined, EditOutlined, DeleteOutlined, LoadingOutlined, UploadOutlined} from '@ant-design/icons';
import {PageContainer, ProTable} from "@ant-design/pro-components";
import CategoryApi from "@/services/category";
import FormItem from "antd/es/form/FormItem";
import {DOMAIN_CDN, DOMAIN_FILE} from "@/utils/constant";
import UploadApi from "@/services/upload";
import ImgCrop from "antd-img-crop";

const { confirm } = Modal;


const CategoryManager = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  const initData = () => {
    setLoading(true)
    CategoryApi.onGetList({}).then((response) => {
      if (response && response.statusCode && response.statusCode === 200) {
        setCategories(response.data);
      } else {
        message.error(response.error ? response.error : response.data.message);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    initData();
  }, []);




  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      align: 'center',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Tên danh mục',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      render: (active) => (<b>{active}</b>),
    },
    {
      title: 'Kích hoạt',
      dataIndex: 'active',
      key: 'active',
      align: 'center',
      render: (active) => (active ?   <Tag color="green">Kích hoạt</Tag> : <Tag color="red">Khóa</Tag>),
    },
    {
      title: 'Chức năng',
      key: 'actions',
      align: 'center',
      render: (text, record) => (
        <Space>
          <Button type="primary" icon={<EditOutlined />} onClick={() => showEditModal(record)}>
            Sửa
          </Button>
          <Button type="primary" icon={<DeleteOutlined/>} onClick={() => confirmDelete(record)} danger>
            Xoá
          </Button>
        </Space>
      ),
    },
  ];

  const showEditModal = (record) => {
    form.setFieldsValue({...record})
    setInitialValues(record);
    setVisible(true);
  };

  const handleCreate = (values, resetForm, setLoading) => {
    form.resetFields();
    setVisible(true);
  };

  const handleCancel = async () => {
    form.resetFields();
    setVisible(false);
  };
  const handleSave = async () => {
    const data = await form.validateFields();
    CategoryApi.onCreate({...data}).then((response) => {
      if (response && response.statusCode && response.statusCode === 200) {
        message.success(response.data.message);
        initData();
      } else {
        message.error(response.error ? response.error : response.data.message);
      }
      setVisible(false);
    });
  };

  const confirmDelete = (record) => {
    confirm({
      title: 'Bạn có chắc chắn xoá nhóm này không?',
      okText: 'Có',
      okType: 'danger',
      cancelText: 'Không',
      onOk() {
        CategoryApi.onDelete({...record}).then((response) => {
          if (response && response.statusCode && response.statusCode === 200) {
            message.success(response.data.message);
            initData();
          } else {
            message.error(response.error ? response.error : response.data.message);
          }
        });
      },
    });
  };

  return (
    <PageContainer>
      <ProTable
        size={'small'}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          showTotal: (total, range) => (<div>{`${range[0]}-${range[1]} / Tổng số bản ghi : ${total}`}</div>),
        }}
        options={{
        reload: false,
        setting: false,
        density: false
      }} loading={loading}  tooltip={false} bordered={true} search={false} columns={columns} dataSource={categories} rowKey="id"
                toolBarRender={() => [
                  <Button key="3" style={{marginBottom: 10}} type="primary" icon={<PlusOutlined/>}
                          onClick={handleCreate}>
                    Thêm mới
                  </Button>
                ]}
      />
      <Modal
        visible={visible}
        title={initialValues ? 'Chỉnh sửa nhóm' : 'Thêm nhóm'}
        okText="Lưu"
        cancelText="Hủy"
        onCancel={() => {
          setVisible(false);
          setInitialValues(null);
        }}
        footer={true}
      >
        <Form form={form} layout="vertical">
          <Form.Item hidden name="id">
            <Input/>
          </Form.Item>
          <Form.Item name="name" label="Tên nhóm" rules={[{ required: true, message: 'Vui lòng nhập tên nhóm!' }]}>
            <Input />
          </Form.Item>
          <Form.Item initialValue={1} name="active" label="Kích hoạt">
            <Radio.Group defaultValue={1}>
              <Radio value={1}>Kích hoạt</Radio>
              <Radio value={0}>Khoá</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSave}>
              Lưu
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={handleCancel}>
              Huỷ
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>
  );
};


export default CategoryManager;
