const menu = {
    list() {
        return [{
            "backMenu": [{
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除"],
                    "appFrontIcon": "cuIcon-link",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "用户",
                    "menuJump": "列表",
                    "tableName": "yonghu"
                }],
                "menu": "用户管理"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "审核"],
                    "appFrontIcon": "cuIcon-rank",
                    "buttons": ["新增", "查看", "修改", "删除", "审核"],
                    "menu": "商家",
                    "menuJump": "列表",
                    "tableName": "shangjia"
                }],
                "menu": "商家管理"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "查看评论"],
                    "appFrontIcon": "cuIcon-vip",
                    "buttons": ["查看", "修改", "删除", "查看评论", "新增"],
                    "menu": "商品信息",
                    "menuJump": "列表",
                    "tableName": "shangpinxinxi"
                }],
                "menu": "商品信息管理"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除"],
                    "appFrontIcon": "cuIcon-pic",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "商品类型",
                    "menuJump": "列表",
                    "tableName": "shangpinleixing"
                }],
                "menu": "商品类型管理"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除"],
                    "appFrontIcon": "cuIcon-group",
                    "buttons": ["查看", "删除"],
                    "menu": "论坛交流",
                    "tableName": "forum"
                }],
                "menu": "论坛交流"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除"],
                    "appFrontIcon": "cuIcon-news",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "公告信息",
                    "tableName": "news"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除"],
                    "appFrontIcon": "cuIcon-news",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "公告信息分类",
                    "tableName": "newstype"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除"],
                    "appFrontIcon": "cuIcon-service",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "在线客服",
                    "tableName": "chat"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除"],
                    "appFrontIcon": "cuIcon-skin",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "轮播图管理",
                    "tableName": "config"
                }],
                "menu": "系统管理"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "发货", "物流", "核销"],
                    "appFrontIcon": "cuIcon-newshot",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "已支付订单",
                    "tableName": "orders/已支付"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "物流", "退货审核"],
                    "appFrontIcon": "cuIcon-keyboard",
                    "buttons": ["删除", "查看", "修改", "日销量", "月销量", "品销量", "日销额", "月销额", "品销额"],
                    "menu": "已完成订单",
                    "tableName": "orders/已完成"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额"],
                    "appFrontIcon": "cuIcon-explore",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "已取消订单",
                    "tableName": "orders/已取消"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "物流"],
                    "appFrontIcon": "cuIcon-flashlightopen",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "已退款订单",
                    "tableName": "orders/已退款"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "确认收货", "物流"],
                    "appFrontIcon": "cuIcon-attentionfavor",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "已发货订单",
                    "tableName": "orders/已发货"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额"],
                    "appFrontIcon": "cuIcon-time",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "未支付订单",
                    "tableName": "orders/未支付"
                }],
                "menu": "订单管理"
            }],
            "frontMenu": [{
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "审核"],
                    "appFrontIcon": "cuIcon-flashlightopen",
                    "buttons": ["查看"],
                    "menu": "商家列表",
                    "menuJump": "列表",
                    "tableName": "shangjia"
                }],
                "menu": "商家模块"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "查看评论"],
                    "appFrontIcon": "cuIcon-circle",
                    "buttons": ["查看"],
                    "menu": "商品信息列表",
                    "menuJump": "列表",
                    "tableName": "shangpinxinxi"
                }],
                "menu": "商品信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "管理员",
            "tableName": "users"
        }, {
            "backMenu": [],
            "frontMenu": [{
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "审核"],
                    "appFrontIcon": "cuIcon-flashlightopen",
                    "buttons": ["查看"],
                    "menu": "商家列表",
                    "menuJump": "列表",
                    "tableName": "shangjia"
                }],
                "menu": "商家模块"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "查看评论"],
                    "appFrontIcon": "cuIcon-circle",
                    "buttons": ["查看"],
                    "menu": "商品信息列表",
                    "menuJump": "列表",
                    "tableName": "shangpinxinxi"
                }],
                "menu": "商品信息模块"
            }],
            "hasBackLogin": "否",
            "hasBackRegister": "否",
            "hasFrontLogin": "是",
            "hasFrontRegister": "是",
            "roleName": "用户",
            "tableName": "yonghu"
        }, {
            "backMenu": [{
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "查看评论"],
                    "appFrontIcon": "cuIcon-vip",
                    "buttons": ["新增", "查看", "修改", "删除", "查看评论"],
                    "menu": "商品信息",
                    "menuJump": "列表",
                    "tableName": "shangpinxinxi"
                }],
                "menu": "商品信息管理"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "物流"],
                    "appFrontIcon": "cuIcon-flashlightopen",
                    "buttons": ["查看", "删除"],
                    "menu": "已退款订单",
                    "tableName": "orders/已退款"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "确认收货", "物流"],
                    "appFrontIcon": "cuIcon-attentionfavor",
                    "buttons": ["查看", "删除"],
                    "menu": "已发货订单",
                    "tableName": "orders/已发货"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额"],
                    "appFrontIcon": "cuIcon-time",
                    "buttons": ["删除", "查看"],
                    "menu": "未支付订单",
                    "tableName": "orders/未支付"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "发货", "物流", "核销"],
                    "appFrontIcon": "cuIcon-newshot",
                    "buttons": ["查看", "删除", "发货"],
                    "menu": "已支付订单",
                    "tableName": "orders/已支付"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额", "物流", "退货审核"],
                    "appFrontIcon": "cuIcon-keyboard",
                    "buttons": ["查看", "删除", "退货审核", "日销量", "月销量", "品销量", "日销额", "月销额", "品销额"],
                    "menu": "已完成订单",
                    "tableName": "orders/已完成"
                }, {
                    "allButtons": ["新增", "查看", "修改", "删除", "导出", "日销量", "月销量", "年销量", "品销量", "类销量", "日销额", "月销额", "年销额", "品销额", "类销额"],
                    "appFrontIcon": "cuIcon-explore",
                    "buttons": ["查看", "删除"],
                    "menu": "已取消订单",
                    "tableName": "orders/已取消"
                }],
                "menu": "订单管理"
            }],
            "frontMenu": [{
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "审核"],
                    "appFrontIcon": "cuIcon-flashlightopen",
                    "buttons": ["查看"],
                    "menu": "商家列表",
                    "menuJump": "列表",
                    "tableName": "shangjia"
                }],
                "menu": "商家模块"
            }, {
                "child": [{
                    "allButtons": ["新增", "查看", "修改", "删除", "查看评论"],
                    "appFrontIcon": "cuIcon-circle",
                    "buttons": ["查看"],
                    "menu": "商品信息列表",
                    "menuJump": "列表",
                    "tableName": "shangpinxinxi"
                }],
                "menu": "商品信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "是",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "商家",
            "tableName": "shangjia"
        }]
    }
}
export default menu;
