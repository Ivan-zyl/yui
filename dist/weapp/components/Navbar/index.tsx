import Taro, { useState, useEffect, getCurrentPages } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import classNames from 'classnames'
import { NavbarProps } from '@/types/navbar'
import './index.scss'

export function Navbar (props: NavbarProps) {
  // @ts-ignore
  Navbar.externalClasses = ['class-name'] 

  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [canBack, setCanBack] = useState(false);

  useEffect(() => {
    Taro.getSystemInfo().then(res => {
      setStatusBarHeight(res.statusBarHeight);
    })
  })

  useEffect(() => {
    setCanBack(getCurrentPages().length > 1);
  })

  return (
    <View
      className={classNames('y-navbar', props.className, 'class-name')}
      style={props.style}
    >
      <View style={{ height: statusBarHeight }}/>
      <View className='titlebar'>
        {canBack && (
          <View
            className='back'
            onClick={this.handleBack}
          >
            <AtIcon value='iconfont icon-arrow-left' size='16'/>
          </View>
        )}
        <View className='extra-left'>{props.extraLeft}</View>
        <View className='title'>{props.title}</View>
        {canBack && ( <View className='back-fill'/> )}
        <View className='extra-right'>{this.props.extraRight}</View>
      </View>
    </View>
  );
}