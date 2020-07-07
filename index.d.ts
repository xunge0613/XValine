/**
 * @author Tony.Xu
 * @desc 类型声明
 * @usage
 *    import Valine from 'xvaline'
 *    new Valine({options})
 */
declare module 'xvaline' {
  interface IValineProps {
    // 页面中 <div id="el"></div>
    el: string; 
    // 配置 Leancloud or Valine-Admin 的 app 信息
    appId: string;
    appKey: string;
    // other config
    [key: string]: any; 
  }
  
  class Valine {
    constructor(props: IValineProps);
  }
  
  export default Valine
}