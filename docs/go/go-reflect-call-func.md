---
lang: zh-CN
title: Go使用反射调用类的方法
description: Go使用反射调用类的方法
---

# Go使用反射调用类的方法

## php中调用示例

```php
<?php

class MyMath
{
    public function Add($num1, $num2)
    {
        return $num1+$num2;
    }
}
$className = "MyMath";
$methodName = "Add";

$class = new $className();
$num = call_user_func(array($class,$methodName), 1, 2);
var_dump($num);
```

## Go中调用示例

```go
package main

import (
	"fmt"
	"reflect"
)

type MyMath struct {
	num int
}

func (mm *MyMath) Add(num1 float64, num2 float64) float64 {
	reply := num1 + num2
	return reply
}

func main() {
	m := new(MyMath)
	add := reflect.ValueOf(m).MethodByName("Add")
	args := make([]reflect.Value, 2)
	args[0] = reflect.ValueOf(1.0)
	args[1] = reflect.ValueOf(2.0)
	ret := add.Call(args)
	fmt.Println(ret[0])
}
```

## 获取帮助

联系邮箱: nilsir@qq.com<br>
联系微信: xiaoshilitong
