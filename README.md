# Airbnb 및 실리콘밸리에서 개발하는 노하우 배우기

## Currying & HOC

중복 코드를 제거하기 위해 Currying 과 HOC 개념을 자주 사용한다.

## 배열 함수

## Context API & Redux

Modal, Form 과 같이 하나의 단위(?) 컴포넌트에서는 Context API를 주로 사용하고 비동기 통신에 의한 데이터 처리 및 관리는 Redux Store를 이용한다.

## CSS in Javascript 기법을 이용한다.

css 관리하기도 힘들고, 인수인계 할 때에도 js, css를 인수인계 해야하니 보통 까다로운 일이 아니다. 또한, 중복 안되는 클래스명을 생각하는 것도 쉬운 작업이 아니다.

## 테마를 지정한다

디자인 가이드를 보고, `color`, `size`, `font-weight` 와 같은 속성들을 미리 지정해 놓는다.

> [Material Ui Theme Object](*https://material-ui.com/customization/default-theme/*) 를 참고하면 테마를 구성하는 도움을 받을 수 있다.

## 컴포넌트 작은 단위부터 개발한다

Atomic 디자인 관점으로 봤을 때 Atom 을 우선적으로 개발한다.

해당 프로젝트에서 구현할 컴포넌트는 아래와 같다.

- Button

- Card

- Form

  - FormItem

- Heading

- InlineList

- Input

- Option

- Select

- Spacing

- Table

  - TableBody
  - TableCell
  - TableHead
  - TableRow

- Text

- Toast

## 스토리북을 이용한다.

스토리북을 이용해 컴포넌트를 테스트 할 수 있으며, props에 따른 컴포넌트 변화를 바로 확인 할 수 있다.
