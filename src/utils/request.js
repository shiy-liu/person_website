import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';
export default class Request {

  /**
   * @Description: 请求接口的方法
   * @Param: url: 接口地址
   *         jsonData: {} 形式的请求参数，没有可不传
   *         method: 请求方式，默认 get
   * @Return: 接口返回结果
   * @Author: A.L
   */
  static async fetch(url, jsonData = {}, method = 'get', responseType) {
    let baseUrl;

    if (/^\/api/.test(url)) {
      baseUrl = isProd ? '' : 'http://localhost:8080';
    } else if (/^\/wx/.test(url)) {
      //微信登录
      baseUrl = 'http://localhost';
    }

    let config = {
      baseURL: baseUrl,
      method: method,
      timeout: 15000,
    };
    config = Object.assign(config, responseType); //设置返回的数据类型
    if (method === 'get') {
      config = {params: jsonData, ...config};
    } else {
      config = {data: jsonData, ...config}
    }
    return axios(url, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return {
          status: 500,
          statusText: error.message || "network error",
          data: {status: 500, msg: error.message || "network error"},
        }
      });
  }
}
