# HTML

## 웹 브라우저 : 인터넷 화면을 보여주는 프로그렘

-Chrome, Fire Fox, Safari, Opera, Edge, Brave ..
-사용자가 사용하는 브라우저는 정해져 있지 않으며
 브라우저마다 화면이 다르게 출력이 될 수 있으니
 브라우저마다 테스트를 하면서 수정
 => 크로스 브라우징
 
 ## 웹 페이즈 개발 방법

- 구조(Structure) : HTML
- 표현(Presentation) : CSS
- 동적(Begavior) : JavaScript

## HTML(Hype Text Markup Language)

- 웹 문서 / HTML 문서 / HTML 페이지

## 웹 페이지 생성

- 확장자는 .html 또는 .htm
- 처음 보여주는 화면의 파일 이름은 "index.html"

## main page, sub page

- main page : index.html
- sub page : index.html 제외 파일명 .html 파일들

## 태그

```
<태그명 속성="값"> </태그명> 
```

1. "<" 와 ">" 사이에 명령어(tag,element) 작성
2. 시작태크와 종료태크로 구성
3. 종료태그가 없는 태그들(img,br,hr,meta,input)
4. 태그는 중첩이 가능하며 종료태그는 나중에 작성한 태그 먼저 작성
5. 가급적 모든 태그와 속성은 소문자로 작성

## 속성의 특징

1. 태그와 속성, 속성과 속성은 공백으로 구분

```html
<a href="#">  </a>
```

2. 여러 개의 속성을 사용할 수 있다.

```html
<img src ="/" width= "100">
```

3. 하나의 속성에는 값을 하나만 지정 가능하다.

```html
<img src ="/" width= "100">
<!-- 작성 불가 -->
```

4. 속성값은 원랙 이흠이 한글인 경우가 아경우가 아니면 사용 불가응하다

```html
<img src="/" width="삼백">
<!-- 작성 불가 -->
<meta name = "keywords" content = "영화,한국영화, 외국영화">
<!-- 예외적인 경우 -->
```

## HTML 기본 문서 구조

```html
<!DOCTYPE html>
<html>
    <head> </head>
    <body> </body>
</html>
```

- !DOCTYPE html : 현재 문서가 HTML 언어로 작성된 웹 문서
- html : 웹 문서의 시작과 끝
- head : 웹 문서의 정보
- body : 실체 웹 브라우저에 나타날 내용

## head에 많이 쓰는 태그

1. title : 문서의 제목
2. meta : 문서의 속성

## meta 태그

```html
<meta charset = "UTF-8"> <!-- 문자 세트 지정 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0"><!-- 모바일 기기 -->
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<!-- 인터넷 익스플로어 브라우저 -->

<!-- 검색 엔진 -->
<meta name="keywords" content="키워드1, 키워드2">
<meta name="description" content= "문서설명">
<meta name="author" content="문서 작성자">
```
