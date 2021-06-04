
/**
 * Cookie 类
 * @author liyang
 * @date 2021/04/08
 */

 import { CookieParam } from "./define";

 export default class Cookie {
   /**
    * set 设置cookie
    * @param params { key, value, day, path, domain }
    * @author liyang
    * @date 2021/04/08
    */
   public static readonly set = ({ key, value, day, path, domain }: CookieParam) => {
     // 1.处理默认保存的路径
     path = path || '/';
     // 2.处理默认保存的domain
     domain = domain || document.domain;
     // 3.处理默认的过期时间
     day = day || 3
     const date = new Date();
     date.setDate(date.getDate() + day);
 
     document.cookie =
       key +
       "=" +
       value +
       ";expires=" +
       date.toUTCString() +
       ";path=" +
       path +
       ";domain=" +
       domain +
       ";";
   }
 
   /**
    * get 读取cookie
    * @param key string
    * @returns string
    * @author liyang
    * @date 2021/04/08
    */
   public static readonly get = (key: string) => {
     const res = document.cookie.split(";");
     let len = res.length
     for (let i = 0; i < len; i++) {
       let temp = res[i].split("=");
       if (temp[0].trim() === key) {
         return temp[1];
       }
     }
   }
 
   /**
    * get 读取cookie
    * @param key string cookie-key
    * @param path string cookie-path
    * @description 默认情况下只能删除默认路径中保存的cookie, 如果想删除指定路径保存的cookie, 那么必须在删除的时候指定路径才可以
    * @returns string
    * @author liyang
    * @date 2021/04/08
    */
   public static readonly remove = (key: string, params?: { path?: string, domain?: string }) => {
     Cookie.set({
       key,
       value: Cookie.get(key) as string,
       day: -1,
       path: params?.path,
       domain: params?.domain
     });
   }
 }
 