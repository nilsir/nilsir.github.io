---
lang: zh-CN
title: MySQL in 查询的时候使用 in 数据排序
description: MySQL in 查询的时候使用 in 数据排序
---

# MySQL in 查询的时候使用 in 数据排序

## 采用 field 函数

### 示例 sql
```sql
select goods_id,goods_sn from goods where goods_sn in("DYHT00002003", "XXPD00640003", "XXPD00641004") order by FIELD(goods_sn, "DYHT00002003", "XXPD00640003", "XXPD00641004");
```

### 数据展示

|  goods_id   | goods_sn  |
|  ----  | ----  |
| 4356  | DYHT00002003 |
| 4206  | XXPD00640003 |
| 4233  | XXPD00641004 |

### 示例代码
```php
->whereIn('id', $ids)
->orderByRaw(DB::raw('FIELD(id,'.implode(',',$ids).')'))
```

## 采用 find_in_set 函数

### 示例 sql
```sql
explain select goods_id,goods_sn from goods where goods_sn in("DYHT00002003", "XXPD00640003", "XXPD00641004") order by FIND_IN_SET(goods_id, "DYHT00002003,XXPD00640003,XXPD00641004");
```

### 数据展示

|  goods_id   | goods_sn  |
|  ----  | ----  |
| 4356  | DYHT00002003 |
| 4206  | XXPD00640003 |
| 4233  | XXPD00641004 |

### 示例代码
```php
->whereIn('id', $ids)
->orderByRaw(DB::raw(sprintf("FIND_IN_SET(id, '%s')", join(',', $ids))))
```

## explain 分析
使用 explain 分析 与 得到的结果是一样的, 所以可以根据自己的习惯采用上边任意一种方式即可
