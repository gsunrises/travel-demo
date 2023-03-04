import React from "react";
import styles from './Header.module.css';
import logo from '../../assets/logo.svg'
import { GlobalOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Layout, Menu, Typography } from "antd";


export const Header: React.FC = () => {
    return (
        <div>
            <div className={styles["top-header"]}>
                <Typography.Text style={{ marginLeft: 30, marginRight: 20 }}>
                    让旅游更幸福
                </Typography.Text>
                <Dropdown.Button
                    className={styles['header-title']}
                    overlay={
                        <Menu
                            items={
                                [{ key: 1, label: '中文' },
                                { key: 2, label: 'English' }]
                            }
                        />
                    }
                    icon={<GlobalOutlined />}
                >
                    语言
                </Dropdown.Button>
                <Button.Group className={styles["button-group"]}>
                    <Button>注册</Button>
                    <Button>登录</Button>
                </Button.Group>
            </div>
            <div className={styles["App-header"]}>
                <Layout.Header className={styles["main-header"]}>
                    <img src={logo} alt="" className={styles["App-logo"]} />
                    <Typography.Title level={3} className={styles.title}>
                        React 旅游网
                    </Typography.Title>
                    <Input.Search
                        placeholder={'请输入目的地、主题'}
                        className={styles["search-input"]}
                    ></Input.Search>
                </Layout.Header>

                <Menu mode={"horizontal"}
                    className={styles["main-menu"]}
                    items={[
                        { key: 1, label: '旅游首页' },
                        { key: 2, label: '酒店' },
                        { key: 3, label: '机票' },
                        { key: 4, label: '火车票' },
                        { key: 5, label: '旅游' },
                        { key: 6, label: '攻略·景点' },
                        { key: 7, label: '汽车·船票' },
                        { key: 8, label: '门票·活动' },
                        { key: 9, label: '用车' },
                        { key: 10, label: '全球购' },
                        { key: 11, label: '礼品卡' },
                        { key: 12, label: '企业商旅' },
                        { key: 13, label: '旅游金融' },
                    ]}
                >
                </Menu>
            </div>
        </div>
    )
}
