/**
 * DB storage存储
 * @author liyang
 * @date 2021/04/09
 */
 class DB {
  public static Store = {
    local: window.localStorage,
    session: window.sessionStorage
  }

  /**
   * 从缓存提取值
   *
   * @static
   * @param {string} key
   * @returns
   * @memberof DB
   */
  public static readonly get = (key: string, type = 'local') => {
    const store = DB.getRealStore(type)

    let value = store.getItem(key) as string;
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

  /**
   *
   * 写入缓存
   * @static
   * @param {string} key 键
   * @param {string} value 值
   * @memberof DB
   */
  public static readonly set = (key: string, value: any, type = 'local') => {
    const store = DB.getRealStore(type)
    if (typeof value == 'object') {
      store.setItem(key, JSON.stringify(value));
    } else {
      store.setItem(key, value);
    }
    if (value == undefined || value == null) {
      store.removeItem(key);
    }
  }
  /**
   *
   * 清除缓存
   * @static
   * @param {string} key 键
   * @param {string} value 值
   * @memberof DB
   */
  public static readonly remove = (key: string, type = 'local') => {
    const store = DB.getRealStore(type)
    store.removeItem(key);
  }

  public static readonly getRealStore = (type: string = 'local') => {
    return type === 'local' ? DB.Store.local : DB.Store.session;
  }

  public static readonly has = (key: string, type: string = 'local') => {
    const store = DB.getRealStore(type)
    return !!store.getItem(key);

  }

}

export default DB