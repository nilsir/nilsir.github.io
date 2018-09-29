---
title: fibonacci算法
date: 2018-09-29 20:19:23
tags:
- php
- fibonacci
- 算法
categories:
- php
---

> 求斐波那契有递归算法和非递归算法, 下边是两种算法的实现
<!--more-->

## 非递归算法
```php
function fibonacci($n)
{
    if ($n <= 0) {
        throw new \Exception('your input must > 0');
    }

    if ($n == 1 || $n == 2) {
        return 1;
    }

    $arr[1] = $arr[2] = 1;

    for ($i = 3; $i <= $n; $i++) {
        $arr[$i] = $arr[$i - 1] + $arr[$i - 2];
    }

    return $arr[$n];
}
```
## 递归算法
```php
function fibonacci($n)
{
    if ($n <= 0) {
        throw new \Exception('your input must > 0');
    }

    if ($n == 1 || $n == 2) {
        return 1;
    }

    return fibonacci($n - 1) + fibonacci($n - 2);
}
```
