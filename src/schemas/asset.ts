import { z } from 'zod';

// {
//   "reqId":"xxx",
//   "address": xxxx,
//   "assets":[
//     {
//     "propId": "游戏道具id",
//     "quantity": 10
//     }
//   ]
// }

export const deleteAssetsSchema = z.object({
    reqId: z.string().optional(),
    address: z.string(),
    assets: z.array(
        z.object({
            propId: z.string(),
            quantity: z.number(),
        })
    ),
});

export const attrDefinitionRequestSchema = z.object({
    reqId: z.string(),
});

export const attrDefinitionResponseSchema = z.object({
    code: z.number(),
    data: z.object({
        category: z.enum(['City', 'Jungle', 'Ocean', 'Sky']),
        attrs: z.array(
            z.object({
                attr: z.string(),
                min: z.number(),
                max: z.number(),
                description: z.string(),
            })
        ),
    }),
    err: z.string(),
});

// 6.1.1.2.1 游戏获取用户所有nft总的加成
export const nftOverallPerformanceRequestSchema = z.object({
    address: z.string(),
    networkId: z.number(),
});

export const nftOverallPerformanceResponseSchema = z.object({
    code: z.number(),
    data: z.object({
        enhancedAttrs: z.array(
            z.object({
                enhancedPercentage: z.string(),
                enhancedVal: z.number(),
                id: z.number(),
                level: z.string(),
                name: z.string(),
                nfName: z.string(),
            })
        ),
    }),
    message: z.string(),
});

export const nftNotifyRequestSchema = z.object({
    reqId: z.string(),
    address: z.string(),
});

export const nftNotifyResponseSchema = z.object({
    code: z.number(),
    data: z.enum(['success', 'fail']),
    err: z.string(),
});

export const assetConfigRequestSchema = z.object({
    reqId: z.string(),
    operate: z.enum(['buy', 'sell']),
});

// 定义响应体的schema
export const assetConfigResponseSchema = z.object({
    code: z.number(),
    data: z.array(
        z.object({
            id: z.string(),
            value: z.number(),
        })
    ),
    err: z.string(),
});

export const queryStorageRequestSchema = z.object({
    reqId: z.string(),
    address: z.string(),
    operate: z.enum(['buy', 'sell']),
    queryIds: z.array(z.number()).optional(),
});

// 定义响应体的schema
export const queryStorageResponseSchema = z.object({
    code: z.number(),
    data: z.array(
        z.object({
            id: z.number(),
            name: z.string(),
            value: z.number(),
        })
    ),
    msg: z.string(),
});

// 3.3.1.4 检查是否还有库存支持导入
export const checkEnoughRequestSchema = z.object({
    reqId: z.string(),
    address: z.string(),
    operate: z.enum(['buy', 'sell']),
    assets: z.array(
        z.object({
            propId: z.string(),
            quantity: z.number(),
        })
    ),
});

export const checkEnoughResponseSchema = z.object({
    code: z.number(),
    data: z.object({
        enough: z.boolean(),
    }),
    err: z.string(),
});

// 3.3.1.5 新增玩家道具
export const increaseAssetRequestSchema = z.object({
    reqId: z.string(),
    address: z.string(),
    assets: z.array(
        z.object({
            propId: z.string(),
            quantity: z.number(),
        })
    ),
});

export const increaseAssetResponseSchema = z.object({
    code: z.number(),
    data: z.enum(['success', 'fail']),
    err: z.string(),
});

// 3.3.1.6 购买游戏内商品
export const buyMerchandiseRequestSchema = z.object({
    reqId: z.string(),
    address: z.string(),
    items: z.array(
        z.object({
            username: z.string(),
            id: z.number(),
            telephone: z.string(),
            remark: z.string().optional(),
            quantity: z.number(),
            deliveryAddress: z.string(),
        })
    ),
});

export const buyMerchandiseResponseSchema = z.object({
    code: z.number(),
    err: z.string(),
    data: z.string(),
});
