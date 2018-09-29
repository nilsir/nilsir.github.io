---
title: php常用排序算法
date: 2018-09-29 21:53:49
tags:
- sort
- php
categories:
- php
---
>php常用的四种排序算法, $arr = [43, 54, 72, 21, 66, 1, 32, 55, 11, 78, 36, 76, 39, 88];
<!--more-->
## 冒泡排序
```php
function bubbleSort($arr)
{
    $len = count($arr);
    for ($i = 1; $i < $len; $i++) {
        for ($k = 0; $k < $len - $i; $k++) {
            if ($arr[$k] > $arr[$k + 1]) {
                $tmp = $arr[$k + 1];
                $arr[$k + 1] = $arr[$k];
                $arr[$k] = $tmp;
            }
        }
    }

    return $arr;
}
```
## 快速排序
```php
function quickSort($arr)
{
    if (count($arr) > 1) {
        //获取一个用于分割的关键字，一般是首个元素
        $mid = $arr[0];
        $leftArray = [];
        $rightArray = [];
        $size = count($arr);
        for ($i = 1; $i < $size; $i++) {
            if ($arr[$i] < $mid) {
                //把比$mid小的数放到一个数组里
                $leftArray[] = $arr[$i];
            } elseif ($arr[$i] > $mid) {
                //把比$mid大的数放到另一个数组里
                $rightArray[] = $arr[$i];
            }
        }
        $leftArray = quickSort($leftArray);
        $rightArray = quickSort($rightArray);

        return array_merge($leftArray, [$mid], $rightArray);
    } else {
        return $arr;
    }
}
```
## 选择排序
```php
function selectSort($arr)
{
    //双重循环完成，外层控制轮数，内层控制比较次数
    $len = count($arr);
    for ($i = 0; $i < $len - 1; $i++) {
        //先假设最小的值的位置
        $p = $i;

        for ($j = $i + 1; $j < $len; $j++) {
            //$arr[$p] 是当前已知的最小值
            if ($arr[$p] > $arr[$j]) {
                //比较，发现更小的,记录下最小值的位置；并且在下次比较时采用已知的最小值进行比较。
                $p = $j;
            }
        }
        //已经确定了当前的最小值的位置，保存到$p中。如果发现最小值的位置与当前假设的位置$i不同，则位置互换即可。
        if ($p != $i) {
            $tmp = $arr[$p];
            $arr[$p] = $arr[$i];
            $arr[$i] = $tmp;
        }
    }

    //返回最终结果
    return $arr;
}
```
## 插入排序
```php
function insertSort($arr)
{
    //插入排序法
    $len = count($arr);
    for ($i = 1; $i < $len; $i++) {
        //获得当前需要比较的元素值。
        $tmp = $arr[$i];
        //内层循环控制 比较 并 插入
        for ($j = $i - 1; $j >= 0; $j--) {
            //$arr[$i];//需要插入的元素;$arr[$j];//需要比较的元素
            if ($tmp < $arr[$j]) {
                //发现插入的元素要小,交换位置
                //将后边的元素与前面的元素互换
                $arr[$j + 1] = $arr[$j];
                //将前面的数设置为当前需要交换的数
                $arr[$j] = $tmp;
            } else {
                //如果碰到不需要移动的元素
                //由于是已经排序好是数组, 则前面的就不需要再次比较了
                break;
            }
        }
    }
    //将这个元素插入到已经排序好的序列内
    //返回
    return $arr;
}
```
