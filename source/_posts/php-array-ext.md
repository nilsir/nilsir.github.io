---
title: php中扩展两个数组函数
date: 2018-09-05 14:11:03
tags:
- php
- array
categories:
- php
---
我们通常会去检测数组中是否存在某个元素,或者检测每个数组元素是否一致,为此扩展两个函数

<!--more-->


```php
<?php
/**
 *User: idoiwill
 *Email: xslt@idoiwill.com
 *Blog: http://www.idoiwill.com
 *DateTime: 2017/1/19 16:35
 */

/**
 * Callable typehints are only supported in php >= 5.4.
 * For PHP 5.3, remove callable typehint, use is_callable($callback) instead.
 */

/**
 * 如果数组中每个元素的值都是$callback,返回true
 * @param callable $callback
 * @param array    $arr
 * @return bool
 */
function array_every(callable $callback, array $arr)
{
    foreach ($arr as $element)
    {
        if (! $callback($element))
        {
            return false;
        }
    }

    return true;
}

/**
 * 如果数组中存在$callback这个元素,返回true
 * @param callable $callback
 * @param array    $arr
 * @return bool
 */
function array_some(callable $callback, array $arr)
{
    foreach ($arr as $element)
    {
        if ($callback($element))
        {
            return true;
        }
    }

    return false;
}

/**
 * Example usage:
 */
$all_foo = array('foo', 'foo', 'foo');
$some_foo = array('foo', 'foo', 'bar');
function is_foo($stringy)
{
    return $stringy == 'foo';
}

function is_bar($stringy)
{
    return $stringy == 'bar';
}

echo "Every \$all_foo element is 'foo': ";
var_dump(array_every("is_foo", $all_foo));
echo "Some  \$all_foo element is 'foo': ";
var_dump(array_some("is_foo", $all_foo));
echo "\n";
echo "Every \$all_foo element is 'bar': ";
var_dump(array_every("is_bar", $all_foo));
echo "Some  \$all_foo element is 'bar': ";
var_dump(array_some("is_bar", $all_foo));
echo "\n";
echo "Every \$some_foo element is 'foo': ";
var_dump(array_every("is_foo", $some_foo));
echo "Some  \$some_foo element is 'foo': ";
var_dump(array_some("is_foo", $some_foo));
echo "\n";
echo "Every \$some_foo element is 'bar': ";
var_dump(array_every("is_bar", $some_foo));
echo "Some  \$some_foo element is 'bar': ";
var_dump(array_some("is_bar", $some_foo));
```
