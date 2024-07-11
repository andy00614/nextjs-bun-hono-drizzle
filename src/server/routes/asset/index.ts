import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';

import {
    assetConfigRequestSchema,
    assetConfigResponseSchema,
    attrDefinitionRequestSchema,
    attrDefinitionResponseSchema,
    buyMerchandiseRequestSchema,
    buyMerchandiseResponseSchema,
    checkEnoughRequestSchema,
    checkEnoughResponseSchema,
    deleteAssetsSchema,
    increaseAssetRequestSchema,
    increaseAssetResponseSchema,
    nftNotifyRequestSchema,
    nftNotifyResponseSchema,
    nftOverallPerformanceRequestSchema,
    nftOverallPerformanceResponseSchema,
    queryStorageRequestSchema,
    queryStorageResponseSchema,
} from '@/schemas/asset';

export const assetApp = new OpenAPIHono()
    .openapi(
        createRoute({
            method: 'post',
            path: '/increaseAsset',
            tags: ['玩家道具'],
            summary: '新增玩家道具',
            request: {
                body: {
                    content: {
                        'application/json': {
                            schema: increaseAssetRequestSchema,
                        },
                    },
                    required: true,
                },
            },
            responses: {
                200: {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: increaseAssetResponseSchema,
                        },
                    },
                },
                401: { description: '未授权' },
                500: { description: '错误' },
            },
        }),
        async c => {
            const body = await c.req.valid('json');

            // 实现新增玩家道具的逻辑

            return c.json({
                code: 200,
                data: 'success',
                err: '',
            });
        }
    )
    .openapi(
        createRoute({
            method: 'post',
            path: '/deleteAsset',
            tags: ['玩家道具'],
            summary: '删除玩家道具',
            request: {
                body: {
                    description: 'Request body',
                    content: {
                        'application/json': {
                            schema: deleteAssetsSchema.openapi('DeleteAsset', {
                                example: {
                                    reqId: '1720684970863',
                                    address: '0xA34357486224151dDfDB291E13194995c22Df505',
                                    assets: [
                                        {
                                            propId: '1',
                                            quantity: 10,
                                        },
                                    ],
                                },
                            }),
                        },
                    },
                    required: true,
                },
            },
            responses: {
                200: {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: z.object({
                                code: z.number(),
                                data: z.string(),
                                err: z.string(),
                            }),
                        },
                    },
                },
            },
        }),
        async c => {
            await c.req.valid('json');
            return c.json({
                code: 200,
                data: 'success',
                err: '',
            });
        }
    )
    .openapi(
        createRoute({
            method: 'post',
            path: '/assetConfig',
            tags: ['游戏配置'],
            summary: '查询玩家可以导入导出的配置',
            request: {
                body: {
                    content: {
                        'application/json': {
                            schema: assetConfigRequestSchema.openapi('AssetConfigRequest', {
                                example: {
                                    reqId: '1234567890',
                                    operate: 'buy',
                                },
                            }),
                        },
                    },
                    required: true,
                },
            },
            responses: {
                200: {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: assetConfigResponseSchema.openapi('AssetConfigResponse', {
                                example: {
                                    code: 200,
                                    data: [
                                        {
                                            id: '游戏道具id',
                                            value: 10,
                                        },
                                    ],
                                    err: '',
                                },
                            }),
                        },
                    },
                },
                401: {
                    description: '未授权',
                },
                500: {
                    description: '错误',
                },
            },
        }),
        async c => {
            const body = await c.req.valid('json');

            const responseData = [
                {
                    id: '游戏道具id',
                    value: 10,
                },
            ];

            return c.json({
                code: 200,
                data: responseData,
                err: '',
            });
        }
    )
    .openapi(
        createRoute({
            method: 'post',
            path: '/queryStorage',
            tags: ['玩家道具'],
            summary: '查询玩家游戏道具库存',
            request: {
                body: {
                    content: {
                        'application/json': {
                            schema: queryStorageRequestSchema.openapi('QueryStorageRequest', {
                                example: {
                                    reqId: '1234567890',
                                    address: '0x1234567890123456789012345678901234567890',
                                    operate: 'buy',
                                    queryIds: [1, 2, 3],
                                },
                            }),
                        },
                    },
                    required: true,
                },
            },
            responses: {
                200: {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: queryStorageResponseSchema.openapi('QueryStorageResponse', {
                                example: {
                                    code: 200,
                                    data: [
                                        {
                                            id: 1,
                                            name: '道具1',
                                            value: 100,
                                        },
                                        {
                                            id: 2,
                                            name: '道具2',
                                            value: 200,
                                        },
                                    ],
                                    msg: '',
                                },
                            }),
                        },
                    },
                },
                401: {
                    description: '未授权',
                },
                500: {
                    description: '错误',
                },
            },
        }),
        async c => {
            await c.req.valid('json');

            const responseData = [
                {
                    id: 1,
                    name: '道具1',
                    value: 100,
                },
                {
                    id: 2,
                    name: '道具2',
                    value: 200,
                },
            ];

            return c.json({
                code: 200,
                data: responseData,
                msg: '',
            });
        }
    )
    .openapi(
        createRoute({
            method: 'post',
            path: '/checkEnough',
            tags: ['玩家道具'],
            summary: '检查是否还有库存支持导入',
            request: {
                body: {
                    content: {
                        'application/json': {
                            schema: checkEnoughRequestSchema,
                        },
                    },
                    required: true,
                },
            },
            responses: {
                200: {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: checkEnoughResponseSchema,
                        },
                    },
                },
                401: { description: '未授权' },
                500: { description: '错误' },
            },
        }),
        async c => {
            const body = await c.req.valid('json');

            // 实现检查库存的逻辑

            return c.json({
                code: 200,
                data: { enough: true },
                err: '',
            });
        }
    )

    // 3.3.1.5 新增玩家道具

    // 3.3.1.6 购买游戏内商品
    .openapi(
        createRoute({
            method: 'post',
            path: '/callback/buyMerchandise',
            tags: ['游戏周边'],
            summary: '购买游戏内商品',
            request: {
                body: {
                    content: {
                        'application/json': {
                            schema: buyMerchandiseRequestSchema,
                        },
                    },
                    required: true,
                },
            },
            responses: {
                200: {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: buyMerchandiseResponseSchema,
                        },
                    },
                },
                401: { description: '未授权' },
                500: { description: '错误' },
            },
        }),
        async c => {
            const body = await c.req.valid('json');

            // 实现购买游戏内商品的逻辑

            return c.json({
                code: 200,
                err: '',
                data: 'success',
            });
        }
    )
    .openapi(
        createRoute({
            method: 'post',
            path: '/nftNotify',
            tags: ['NFT 集成'],
            summary: '接受 magape nft 变更的回调函数',
            request: {
                body: {
                    content: {
                        'application/json': {
                            schema: nftNotifyRequestSchema.openapi('NftNotifyRequest', {
                                example: {
                                    reqId: '1234567890',
                                    address: '0x1234567890123456789012345678901234567890',
                                },
                            }),
                        },
                    },
                    required: true,
                },
            },
            responses: {
                200: {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: nftNotifyResponseSchema.openapi('NftNotifyResponse', {
                                example: {
                                    code: 200,
                                    data: 'success',
                                    err: '',
                                },
                            }),
                        },
                    },
                },
                401: { description: '未授权' },
                500: { description: '错误' },
            },
        }),
        async c => {
            await c.req.valid('json');

            // 这里应该添加签名验证的逻辑

            // TODO: 实现 NFT 变更通知的处理逻辑
            // 例如：调用 magape 接口拉取最新的 nft 列表，并更新游戏内的相关数据

            return c.json({
                code: 200,
                data: 'success',
                err: '',
            });
        }
    )
    .openapi(
        createRoute({
            method: 'post',
            path: '/attrDefinition',
            tags: ['游戏配置'],
            summary: '获取游戏支持的属性',
            request: {
                body: {
                    content: {
                        'application/json': {
                            schema: attrDefinitionRequestSchema.openapi('AttrDefinitionRequest', {
                                example: {
                                    reqId: '1234567890',
                                },
                            }),
                        },
                    },
                    required: true,
                },
            },
            responses: {
                200: {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: attrDefinitionResponseSchema.openapi('AttrDefinitionResponse', {
                                example: {
                                    code: 200,
                                    data: {
                                        category: 'City',
                                        attrs: [
                                            {
                                                attr: 'A1',
                                                min: 10,
                                                max: 100,
                                                description: 'Power Enhancement',
                                            },
                                        ],
                                    },
                                    err: '',
                                },
                            }),
                        },
                    },
                },
                401: { description: '未授权' },
                500: { description: '错误' },
            },
        }),
        async c => {
            const body = await c.req.valid('json');

            // TODO: 实现获取游戏支持的属性的逻辑

            return c.json({
                code: 200,
                data: {
                    category: 'City',
                    attrs: [
                        {
                            attr: 'A1',
                            min: 10,
                            max: 100,
                            description: 'Power Enhancement',
                        },
                    ],
                },
                err: '',
            });
        }
    )

    // 6.1.1.2.1 游戏获取用户所有nft总的加成
    .openapi(
        createRoute({
            method: 'post',
            path: '/api/v1/nft/overallPerformance',
            tags: ['NFT 集成'],
            summary: '获取用户所有 NFT 总的加成',
            request: {
                body: {
                    content: {
                        'application/json': {
                            schema: nftOverallPerformanceRequestSchema.openapi(
                                'NftOverallPerformanceRequest',
                                {
                                    example: {
                                        address: '0x1234567890123456789012345678901234567890',
                                        networkId: 56,
                                    },
                                }
                            ),
                        },
                    },
                    required: true,
                },
            },
            responses: {
                200: {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: nftOverallPerformanceResponseSchema.openapi(
                                'NftOverallPerformanceResponse',
                                {
                                    example: {
                                        code: 200,
                                        data: {
                                            enhancedAttrs: [
                                                {
                                                    enhancedPercentage: '80',
                                                    enhancedVal: 16.84,
                                                    id: 6,
                                                    level: 'Common',
                                                    name: 'A6',
                                                    nfName: 'Mappy #106',
                                                },
                                            ],
                                        },
                                        message: 'success',
                                    },
                                }
                            ),
                        },
                    },
                },
                401: { description: '未授权' },
                500: { description: '错误' },
            },
        }),
        async c => {
            // TODO: 实现获取用户所有nft总的加成的逻辑

            return c.json({
                code: 200,
                data: {
                    enhancedAttrs: [
                        {
                            enhancedPercentage: '80',
                            enhancedVal: 16.84,
                            id: 6,
                            level: 'Common',
                            name: 'A6',
                            nfName: 'Mappy #106',
                        },
                    ],
                },
                message: 'success',
            });
        }
    );
