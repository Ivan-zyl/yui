import Nerv from "nervjs";
import Taro, { getSystemInfo as _getSystemInfo } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import classNames from 'classnames';
import './index.scss';
export class YNavbar extends Taro.Component {
  render() {
    const props = this.props;

    // @ts-ignore
    YNavbar.externalClasses = ['class-name'];
    const [statusBarHeight, setStatusBarHeight] = Taro.useState(0);
    const [canBack, setCanBack] = Taro.useState(false);
    Taro.useEffect(() => {
      _getSystemInfo().then(res => {
        setStatusBarHeight(res.statusBarHeight);
      });
    });
    Taro.useEffect(() => {
      setCanBack(Taro.getCurrentPages().length > 1);
    });
    const handleBack = () => {
      Taro.navigateBack();
    };
    return <View className={classNames('y-navbar', props.className, 'class-name')} style={props.style}>
      <View style={{ height: statusBarHeight }} />
      <View className="titlebar">
        {canBack && <View className="back" onClick={handleBack}>
            <AtIcon value="iconfont icon-arrow-left" size="16" />
          </View>}
        <View className="extra-left">{props.extraLeft}</View>
        <View className="title">{props.title}</View>
        {canBack && <View className="back-fill" />}
        <View className="extra-right">{this.props.extraRight}</View>
      </View>
    </View>;
  }

}