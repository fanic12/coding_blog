import React from 'react'
import Youtube from '../../components/Youtube'
import Href from '../../components/Href'

function Props() {
  return (
    <div className='BlogContent'>
      <h2>REACTJS-props</h2>
      <Youtube title='props introduce' src='pPCC2JWbPgk' />
      <p>
        이번에 배워볼 props라는 것은{' '}
        <Href
          title='jsx guide'
          url='https://ko.reactjs.org/docs/introducing-jsx.html'>
          jsx
        </Href>
        의 문법입니다
        <br />
        props를 배우기 전에 하나 알아야 하실 점이 있습니다
        <br />
        props는 Component를 가져오는 거라고 생각 하시면 됩니다
        <br />
        그런데 이때 Component가 한 파일에 여러개일 경우
        <br />
        최상위 태그는 항상 같은 태그 여야 한다는 겁니다
        <br />
        div라면 div, h1이라면 h1으로 항상 맞춰줘야 합니다
        <br />
        또한 무조건 class Component 끼리만 props가 사용 가능하기 때문에
        <br />
        무조건 같은 곳에서 사용해야 합니다
        <br />
        다른 function과 같은 곳에서 사용하면 인식이 안됩니다
        <br />
        지금부터 props를 배워보도록 하겠습니다
        <h4>
          *아래에 Both를 누르시면 코드가 실시간으로 적용되는 웹을 보실수
          있습니다*
        </h4>
        <iframe
          title='props guide'
          width='100%'
          height='500px'
          src='https://stackblitz.com/edit/props-guide?embed=1&file=src/App.js'></iframe>
        <Href
          title='jsx guide'
          url='https://ko.reactjs.org/docs/introducing-jsx.html'>
          jsx
        </Href>
        의 문법이 왜{' '}
        <Href title='react guide' url='https://ko.reactjs.org/'>
          Reactjs
        </Href>
        수업에서 나오냐고 묻는 분들이 많겠죠
        <br />
        <Href title='react guide' url='https://ko.reactjs.org/'>
          Reactjs
        </Href>
        안에는{' '}
        <Href title='html5 guide' url='https://ko.wikipedia.org/wiki/HTML'>
          html
        </Href>
        ,{' '}
        <Href title='css guide' url='https://namu.wiki/w/CSS'>
          css
        </Href>
        ,{' '}
        <Href
          title='javarscript guide'
          url='https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'>
          javarscript
        </Href>
        이외에도
        <br />
        <Href
          title='jsx guide'
          url='https://ko.reactjs.org/docs/introducing-jsx.html'>
          jsx
        </Href>
        ,{' '}
        <Href title='jquery guide' url='https://ko.wikipedia.org/wiki/JQuery'>
          jquery
        </Href>
        등 여러가지 언어와 라이브러리가 사용되기 때문입니다
        <br />
        그렇기 때문에 정말{' '}
        <Href title='react guide' url='https://ko.reactjs.org/'>
          Reactjs
        </Href>
        에서 사용하면 유용한 props라는 것을 배워볼겁니다
        <br />
        props는 우리가 항상 React에서 하는 import랑 상당히 비슷합니다
        <br />
        import는 파일을 주로 불러오죠?
        <br />
        props는 명령어 즉 우리가 지정한 함수의 값을 불러옵니다
        <br />
        0즉 우리가 a 태그에 넣은 title값 className값들을 불러오게 해주는 겁니다
        <br />
        기본적인 형태는 {'{'}this.props.불러오고자 하는 이름{'}'}입니다
        <br />
        이것을 그냥 하면 작동을 안합니다
        <br />
        Component불닭
        <br />
        (편의상 불닭이라는 수식어를 붙여 구분하기 편하게 하기 위함입니다)
        <br />를 만들어서 그 안에 {'{'}this.props.불러오고자 하는 이름{'}'}를
        넣고
        <br />
        해당 componen불닭를 실행시키고자하는
        <br />
        Component매워
        <br />
        (편의상 매워라는 수식어를 붙여 구분하기 편하게 하기 위함입니다)
        <br />
        안에 {'<'}Component명{'>'}
        {'<'}/Component명{'>'}이라고 넣는 거죠
        <br />
        이때 열고있는 componenet매워안의 값들을 수정하는 겁니다
        <br />
        {'<'}compoenent명 title="불닭에 치즈 넣어 먹으니까 덜 맵다"{'>'}
        {'<'}/Component명{'>'}이렇게 말이죠
        <br />
        그러면 다른 compoenet매워안에 존재하는
        <br />
        title값은 원래 있는 Component불닭의 title이 됩니다
        <br />
        그렇게 되면 title값도 정해졌겠다
        <br />
        원래의 Component불닭이 {'{'}this.props.title{'}'}로
        <br />
        title의 값인 불닭에 치즈 넣어 먹으니까 덜맵다를 불러오는 겁니다
        <br />
        이때 (Component)라고 import하는 이유는 React내의 문법을 사용한다는
        의미입니다
      </p>
    </div>
  )
}

export default Props
