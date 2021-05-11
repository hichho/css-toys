import React from "react";
import DocumentTitle from 'react-document-title';
import {ActivityIndicator} from "antd-mobile";
import styles from './index.less';
import Flex from "../Flex";

export default class PageContainer extends React.PureComponent {

  render() {
    const {title, loading = true} = this.props;
    return <DocumentTitle title={title}>
      <div style={{height: '100%'}}>
        {loading ? <Flex justify={"center"} alignItems={"center"} className={styles.loading}>
          <ActivityIndicator size={"large"}/>
        </Flex> : this.props.children}
      </div>
    </DocumentTitle>
  }
}





