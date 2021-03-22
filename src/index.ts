import type from './externals/type'
export default class Tookits {
  public static readonly extends = (obj: Object) => {
    Object.assign(Tookits, obj)
  }
  //  类型判断
  public static type = type
}