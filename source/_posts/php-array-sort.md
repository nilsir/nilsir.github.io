---
title: php二维数组排序---支持单条件或多条件
date: 2018-09-05 15:11:03
tags:
- php
- array
- sort
categories:
- php
---
php二维数组排序---支持单条件或多条件
可以查询array_multisort,以便更清楚的了解排序逻辑,


<!--more-->

## 函数方法
```php
<?php
/**
 *User: idoiwill
 *Email: xslt@idoiwill.com
 *Blog: http://blog.idoiwill.com
 *DateTime: 2017/5/19 12:51
 */

/**
 * @function 二维数组排序,支持多条件
 * @param        $array,待排序数组
 * @param        $sortRule,多条件排序规则
 * @param string $order,单条件排序规则
 * @return mixed
 */
function arraySort($array,$sortRule,$order="asc"){
    /**
     * $array = [
     *              ["book"=>10,"version"=>10],
     *              ["book"=>19,"version"=>30],
     *              ["book"=>10,"version"=>30],
     *              ["book"=>19,"version"=>10],
     *              ["book"=>10,"version"=>20],
     *              ["book"=>19,"version"=>20]
     *      ];
     */
    if(is_array($sortRule)){
        /**
         * $sortRule = ['book'=>"asc",'version'=>"asc"]; 条件支持N多个
         */
        usort($array, function ($a, $b) use ($sortRule) {
            foreach($sortRule as $sortKey => $order){
                if($a[$sortKey] == $b[$sortKey]){continue;}
                return (($order == 'desc')?-1:1) * (($a[$sortKey] < $b[$sortKey]) ? -1 : 1);
            }
            return 0;
        });
    }else if(is_string($sortRule)){
        /**
         * $sortRule = "book";
         * $order = "asc";
         */
        usort($array,function ($a,$b) use ($sortRule,$order){
            if($a[$sortRule] == $b[$sortRule]){
                return 0;
            }
            return (($order == 'desc')?-1:1) * (($a[$sortRule] < $b[$sortRule]) ? -1 : 1);
        });
    }
    return $array;

}

```

## 函数使用
```php
<?php
/**
 *User: idoiwill
 *Email: xslt@idoiwill.com
 *Blog: http://blog.idoiwill.com
 *DateTime: 2017/5/19 12:51
 */


$array = [
    ["book"=>10,"version"=>10],
    ["book"=>19,"version"=>30],
    ["book"=>10,"version"=>30],
    ["book"=>19,"version"=>10],
    ["book"=>10,"version"=>20],
    ["book"=>19,"version"=>20]
];

//单条件
$array = arraySort($array,'book','asc');
var_dump[$array];


//多条件
arraySort($array,['book'=>"asc",'version'=>"asc"]);
var_dump[$array];
```
