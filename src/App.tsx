import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Layout, Typography, Input, Button, Menu, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons'
function App() {
    return (
        <div className={styles.App}>
            <div>
                <Typography.Text>
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
                    icon={<GlobalOutlined/>}
                >
                    语言
                </Dropdown.Button>
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
            </div>
        </div>
    );
}

export default App;
