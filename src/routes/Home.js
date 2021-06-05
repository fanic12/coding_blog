import React from 'react'
import Youtube from '../components/Youtube'
import Href from '../components/Href'
import Comment from '../../src/components/Comment'
import image from '../../src/Html1.jpg'
import img from '../../src/Html.jpg'
import img2 from '../../src/Html2.jpg'
import Carousel from '../posts/Scrap'

function Home() {
  return (
    <>
      {/*<div className="item">
        <h3>html</h3>
        <Link to="/about"><li>br & p</li></Link>
        <Switch>
            <Route path="/about" component={About} />
        </Switch>
        <li>image</li>
        <li>link</li>
  </div>*/}
      <div className='BlogContent'>
        <Carousel
          introduction='1'
          sideintroduction='2'
          introduction1='3'
          sideintroduction1='4'
          introduction2='5'
          sideintroduction2='6'
          img={image}
          img1={img}
          img2={img2}
        />
        <h2>HELLO</h2>
        <Youtube title='CodingIntroduction' src='tZooW6PritE' />
        <p>
          코딩을 입문하러 오신 여러분들 환영합니다.
          <br />
          지금 여러분들은
          <Href title='web guide' url='https://ko.wikipedia.org/wiki/%EC%9B%B9'>
            web
          </Href>
          의 기본
          <br />
          <Href title='html5 guide' url='https://ko.wikipedia.org/wiki/HTML'>
            HTML
          </Href>
          ,
          <Href title='css guide' url='https://namu.wiki/w/CSS'>
            CSS
          </Href>
          ,
          <Href
            title='javascriptguide'
            url='https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'>
            javascript
          </Href>
          와 이것들을 활용하는 언어인
          <Href title='react guide' url='https://ko.reactjs.org/'>
            React
          </Href>
          를 배울겁니다.
          <br />
          이러한 것들을 활용하여 여러가지 방대한 웹사이트를 만드실수 있습니다.
          <br />
          이러한 수업들을 이어나가기에 앞서 먼저
          <br /> 여러분들에게 선택의 시간을 드리고 시작할려고합니다.
          <br /> 각각의 대주제에 들어가보셔서 어떠한 것들을 다루고
          <br /> 진정으로 자신에게 필요한 것은 무엇인지 찾아보시면 좋겠습니다.
          <br />
          또한 여러분들은 언어들을 배우고나서 실습해보고 끝이 아닌
          <br />
          여러분들이 스스로 배운 언어, 문법들을 사용해서 실적물을 만들어보고
          <br />또 실적물에 부족한 내용이나 오류가 생기는 내용들을 찾아보시면서
          <br />
          조금 더 자신에게 필요한 문법을 알아가시면 되겠습니다.
          <br />
          또한 이렇게 보고 그대로 사용해보는 것이 아닌
          <br />
          자신이 스스로 필요에 따라 학습을 하게 된다면
          <br />
          더욱 해당 언어에 대한 이해도가 높아지실 겁니다.
          <br />
          제일 추천드리는 방법은 가장 기본적인 언어인{' '}
          <Href title='html5 guide' url='https://ko.wikipedia.org/wiki/HTML'>
            html
          </Href>
          을 배우시고
          <br />그 후에{' '}
          <Href title='css guide' url='https://namu.wiki/w/CSS'>
            css
          </Href>
          ,{' '}
          <Href
            title='javascriptguide'
            url='https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'>
            javascript
          </Href>
          ,{' '}
          <Href title='react guide' url='https://ko.reactjs.org/'>
            reactjs
          </Href>
          와 같은 언어들로
          <br />
          살을 붙여 보시면 더욱 이해도가 높아지실 것입니다.
        </p>
        <h4>
          *앞으로 우리수업은{' '}
          <Href title='atom download guide' url='https://atom.io/'>
            atom
          </Href>
          이란 앱을 이용해서 할겁니다{' '}
          <Href title='atom download guide' url='https://atom.io/'>
            atom
          </Href>
          이 없으신 분들은 다운로드를 받아주세요.
          <br />
          부득이하게 다운로드를 받지 못하시는 경우에는 웹사이트 내에있는{' '}
          <Href title='codepen guide' url='https://codepen.io/your-work'>
            codepen
          </Href>
          으로 대신 체험을 해볼겁니다*
        </h4>
      </div>
      <Comment identifier='home' url='/' title='HOME' />
    </>
  )
}

export default Home
