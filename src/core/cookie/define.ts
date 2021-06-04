/**
 * SSOLoginConfig
 * @author liyang
 * @date 2021/03/30
 */
 export interface SSOLoginConfig {
    //  调用环境
    env: EnvType
  
    //  cookie域名写入，勿传，仅供调试用
    domain?: string;
  
    //  jsApiList 调用钉钉免密时必传
    jsApiList?: Array<string>
  }
  
  /**
   * EnvType 环境枚举
   * @author liyang
   * @date 2021/04/07
   */
  export enum EnvEnum {
    Local = 'local',
    Dev = 'dev',
    Test = 'test',
    Uat = 'uat',
    Prod = 'prod'
  }
  export type EnvType = 'local' | 'dev' | 'test' | 'uat' | 'prod'
  
  /** 
   * Cookie类 接口
   * @author liyang
   * @date 2021/04/08
   */
  export interface CookieParam {
    //  cookie key
    key: string;
    //  cookie value
    value: string;
    //  cookie expire，单位为天
    day?: number;
    //  cookie path
    path?: string;
    //  cookie 域名domain
    domain?: string;
  }