---
title: php生成无限级分类数据
date: 2018-09-29 22:03:11
tags:
- php
- nested sets
- tree
categories:
- php
---
>php生成树结构数据
<!--more-->
```php
<?php
$array = [
    ['id' => 1, 'pid' => 0, 'name' => '河北省'],
    ['id' => 2, 'pid' => 0, 'name' => '北京市'],
    ['id' => 3, 'pid' => 1, 'name' => '邯郸市'],
    ['id' => 4, 'pid' => 2, 'name' => '朝阳区'],
    ['id' => 5, 'pid' => 2, 'name' => '通州区'],
    ['id' => 6, 'pid' => 4, 'name' => '望京'],
    ['id' => 7, 'pid' => 4, 'name' => '酒仙桥'],
    ['id' => 8, 'pid' => 3, 'name' => '永年区'],
    ['id' => 9, 'pid' => 1, 'name' => '武安市'],
];

function getTree($array, $pid = 0, $level = 0)
{

    //声明静态数组, 避免递归调用时, 多次声明导致数组覆盖
    static $list = [];
    foreach ($array as $key => $value)
    {
        //找到父节点为根节点的节点 也就是pid=0的节点
        if ($value['pid'] == $pid)
        {
            //父节点为根节点的节点, 级别为0, 也就是第一级
            $value['level'] = $level;
            $value['name'] = str_repeat('--', $value['level']) . $value['name'];
            //把数组放到list中
            $list[] = $value;
            //把这个节点从数组中移除, 减少后续递归消耗
            unset($array[$key]);
            //开始递归,查找父ID为该节点ID的节点, 级别则为原级别+1
            getTree($array, $value['id'], $level + 1);

        }
    }

    return $list;
}

$array = getTree($array);
var_dump($array);
```
