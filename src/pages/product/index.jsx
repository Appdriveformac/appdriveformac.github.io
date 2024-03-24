import React, { useState, useEffect } from 'react';
import {
  Table,
  Button,
  Space,
  Modal,
  Form,
  Input,
  Radio,
  Tag,
  message,
  InputNumber,
  Image,
  Row,
  Upload,
  Select
} from 'antd';
import {PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined} from '@ant-design/icons';
import {PageContainer, ProTable} from "@ant-design/pro-components";
import ProductApi from "@/services/product";
import {DOMAIN_CDN} from "@/utils/constant";
import FormItem from "antd/es/form/FormItem";
import ImgCrop from "antd-img-crop";
import UploadApi from "@/services/upload";
import CategoryApi from "@/services/category";

const { confirm } = Modal;


const TableManager = () => {
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  const [visible, setVisible] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [crop, setCrop] = useState({ aspect: 1 / 1 });

  const initData = () => {
    setLoading(true);
    ProductApi.onGetList({}).then((response) => {
      if (response && response.statusCode && response.statusCode === 200) {
        setProduct(response.data);
      } else {
        message.error(response.error ? response.error : response.data.message);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    initData();
    CategoryApi.onGetList({}).then((response) => {
      if (response && response.statusCode && response.statusCode === 200) {
        setCategories(response.data);
      } else {
        message.error(response.error ? response.error : response.data.message);
      }
      setLoading(false);
    });
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
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      render: (active) => (<b>{active}</b>),
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      align: 'center',
      render: (text, record, index) => (
        <Image
          width={100}
          style={{ borderRadius: '10%', boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)' }} // Thêm border cong
          src={DOMAIN_CDN + record.image}
        />
      ),
    },
    {
      title: 'Danh mục',
      dataIndex: 'categoryName',
      key: 'categoryName',
      align: 'center',
    },
    {
      title: 'Mô tả gọn',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
    },
    {
      title: 'Kích hoạt',
      dataIndex: 'active',
      key: 'active',
      align: 'center',
      render: (active) => (active ?   <Tag color="green">Kích hoạt</Tag> : <Tag color="red">Khóa</Tag>),
    },
    {
      title: 'Thứ tự sắp xếp',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      align: 'center',
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
          <Button type="primary" icon={<DeleteOutlined />} onClick={() => confirmDelete(record)} danger>
            Xoá
          </Button>
        </Space>
      ),
    },
  ];

  const showEditModal = (record) => {
    form.setFieldsValue({...record})
    setImage(record.image)
    setInitialValues(record);
    setVisible(true);
  };

  const handleCreate = (values, resetForm, setLoading) => {
    form.resetFields();
    setImage(undefined);
    setVisible(true);
  };

  const handleCancel = async () => {
    form.resetFields();
    setVisible(false);
  };
  const handleSave = async () => {
    const data = await form.validateFields();
    ProductApi.onCreate({...data}).then((response) => {
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
      title: 'Bạn có chắc chắn xoá sản phẩm này không?',
      okText: 'Có',
      okType: 'danger',
      cancelText: 'Không',
      onOk() {
        ProductApi.onDelete({...record}).then((response) => {
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

  const onUploadImage = ({ file }) => {
    if(file.status === "done") {
      UploadApi.uploadImage(file.originFileObj).then(response => {
        if (response && response.statusCode === 200) {
          setImage(response.data.url);
          form.setFieldsValue({ image: response.data.url });
        } else {
          message.error(response.data.message);
        }
        setLoading(false);
      })
    }
  }

  return (
    <PageContainer>
      <ProTable
        size={'small'}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          showTotal: (total, range) => (<div>{`${range[0]}-${range[1]} / Tổng số bản ghi : ${total}`}</div>),
        }}
        loading={loading} options={{
        reload: false,
        setting: false,
        density: false
      }}  tooltip={false} cardBordered={true} search={false} columns={columns} bordered={true} dataSource={product} rowKey="id"
                toolBarRender={() => [
                  <Button key="3" style={{marginBottom: 10}} type="primary" icon={<PlusOutlined/>}
                          onClick={handleCreate}>
                    Thêm mới
                  </Button>
                ]}
      />
      <Modal
        visible={visible}
        title={initialValues ? 'Chỉnh sửa thông tin' : 'Thêm sản phẩm'}
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
          <Form.Item name="name" label="Tên sản phẩm" rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="categoryId" label="Danh mục" rules={[{ required: true, message: 'Vui lòng danh mục' }]}>
            <Select>
              {categories.map(option => (
                <Select.Option key={option.id} value={option.id}>{option.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="image" rules={[{ required: true, message: 'Hãy upload image' },]} label="Tải ảnh">
            <div style={{ height: '100%', width: 'auto' }} id={image ? "banner-image" : ''}>
              <Row>
                <ImgCrop>
                  <Upload name="image" accept="image/*" showUploadList={false} onChange={onUploadImage}>
                    <Button icon={<UploadOutlined />}>Chọn</Button>
                  </Upload>
                </ImgCrop>
              </Row>
              {image ? <Image
                  width={200}
                  style={{ marginTop:5, borderRadius: '10%', boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)' }}
                  src={DOMAIN_CDN + image}
                />
                : <></>}
              <p style={{ color: 'blue' }}><b>Chú ý : Dung lượng tối đa cho phép là 1MB</b></p>
            </div>
          </Form.Item>
          <Form.Item name="description" label="Mô tả gọn">
            <Input/>
          </Form.Item>
          <Form.Item initialValue={0} name="price" label="Giá">
            <InputNumber defaultValue={0}/>
          </Form.Item>
          <Form.Item initialValue={0} name="orderNumber" label="Thứ tự sắp xếp">
            <InputNumber defaultValue={0}/>
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


export default TableManager;
