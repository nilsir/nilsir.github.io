---
title: php simpleXMLElement与array的相互转换
date: 2018-09-05 18:23:28
tags:
- php
- xml
- array
categories:
- php
---
php simpleXMLElement与array的相互转换


<!--more-->


``` php
<?php
function xmlToArray($simpleXmlElement){
    $simpleXmlElement=(array)$simpleXmlElement;
    foreach($simpleXmlElement as $k=>$v){
        if($v instanceof SimpleXMLElement ||is_array($v)){
            $simpleXmlElement[$k]=xmlToArray($v);
        }
    }
    return $simpleXmlElement;
}
$simxml=simplexml_load_file('./01.xml');
//print_r(xmlToArray($simxml));
/*
 * 数组转化xml
 * parame 数组
 * $node  nodename 默认加在根节点
 */
function ArrayToxML($arr,$node='root'){
    if($node=='root'){
        $simpleXmlElemnet=new SimpleXMLElement('<?xml version="1.0" encoding="utf-8"?><root></root>');
    }else{
        $simpleXmlElemnet=$node;
    }
    foreach($arr as $k=>$v){
        if(is_array($v)){
            ArrayToxML($v,$simpleXmlElemnet->addChild($k));//创建节点 并加在他的后面
        }else{
            if(is_numeric($k)){
                $simpleXmlElemnet->addChild('item',$v);
            }else{
                $simpleXmlElemnet->addChild($k,$v);
            }
        }
    }
    return $simpleXmlElemnet;
}
$arr=array('人'=>'人民好','age'=>26,
        'job'=>array('title'=>'经理','salary'=>44444,
                'team'=>array('小红','小狗','小张')));
$xmlElement=ArrayToxML($arr);
header('Content-Type:text/xml');
echo $xmlElement->saveXML();
```
