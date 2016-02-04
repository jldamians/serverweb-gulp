	const xpath = '//title' ;

	var select = require('xpath.js') ;
	var dom = require('xmldom').DOMParser ;
	var xml =[
    			'<?xml version="1.0" encoding="UTF-8"?>',
				'<bookstore>',
					'<book category="COOKING">',
					  '<title lang="en">Everyday Italian</title>',
					  '<author>Giada De Laurentiis</author>',
					  '<year>2005</year>',
					  '<price>30.00</price>',
					'</book>',
					'<book category="CHILDREN">',
					  '<title lang="en">Harry Potter</title>',
					  '<author>J K. Rowling</author>',
					  '<year>2005</year>',
					  '<price>29.99</price>',
					'</book>',
					'<book category="WEB">',
					  '<title lang="en">XQuery Kick Start</title>',
					  '<author>James McGovern</author>',
					  '<author>Per Bothner</author>',
					  '<author>Kurt Cagle</author>',
					  '<author>James Linn</author>',
					  '<author>Vaidyanathan Nagarajan</author>',
					  '<year>2003</year>',
					  '<price>49.99</price>',
					'</book>',
					'<book category="WEB">',
					  '<title lang="en">Learning XML</title>',
					  '<author>Erik T. Ray</author>',
					  '<year>2003</year>',
					  '<price>39.95</price>',
					'</book>',
				'</bookstore>'
			] ;
    var doc = new dom().parseFromString(xml.join('')) ;
    var nodes = select(doc, xpath) ;

    nodes.forEach(function(element, index, array){
	    console.log(element.localName + ": " + element.firstChild.data) ;
	    console.log("node: " + element.toString() + "\n") ;
    }) ;