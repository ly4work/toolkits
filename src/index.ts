/**
 * Tookits 
 * @author liyang
 * 2021/03/24
 */

import type from './enhance/type'
import Cookie from './core/cookie'
import DB from './core/db'
import test from './core/test'
export default class Tookits {
  /**
   * use 拓展中间件集成方法
   * @param object 中间件
   * @returns Tookits
   */
  public static readonly use = (object: Object) => {
    if (!Tookits.type.isObject(object)) {
      return Tookits
    }
    return Object.assign(Tookits, object)
  }
  //  类型判断类
  public static type = type
  //  检测类
  public static test = test
  //  Storage
  public static DB = DB.Store
  //  Cookie
  public static Cookie = Cookie
}