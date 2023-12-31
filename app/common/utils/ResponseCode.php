<?php

namespace app\common\utils;

/**
 * JSON响应Code
 */
class ResponseCode
{
    /**
     * 成功
     */
    const SUCCESS = 200;
    /**
     * 失败
     */
    const FAIL = 404;
    /**
     * 需要登录
     */
    const LOGIN = 600;
    /**
     * 删除客户端登录状态
     */
    const DELETE_LOGIN = 601;
    /**
     * 验证码错误
     */
    const CAPTCHA = 300;
    /**
     * 站点信息错误
     */
    const SITE_ERROR = 400;
    /**
     * 支付成功
     */
    const PAY_SUCCESS = 9000;
}
