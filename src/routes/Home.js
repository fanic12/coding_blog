import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
  <div>
    {/*<div className="item">
        <h3>html</h3>
        <Link to="/about"><li>br & p</li></Link>
        <Switch>
            <Route path="/about" component={About} />
        </Switch>
        <li>image</li>
        <li>link</li>
  </div>*/}
      <div className="BlogContent">
        <h2>HELLO</h2>
      <iframe 
      title="CodingIntroduction"
      width="100%" 
      height="380px" 
      src="https://www.youtube.com/embed/tZooW6PritE" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen="true">
      </iframe>
      <p>코딩을 입문하러 오신 여러분들 환영합니다
      <br />지금 여러분들은 
      <a href ="https://ko.wikipedia.org/wiki/%EC%9B%B9"
      target="_blank" rel="noopener noreferrer" title="web guide">web</a>의 기본<br /> 
      <a href = "https://ko.wikipedia.org/wiki/HTML"
      target="_blank" rel="noopener noreferrer" title="html5 guide">HTML</a>, 
      <a href = "https://namu.wiki/w/CSS"
      target="_blank" rel="noopener noreferrer" title="css guide">CSS</a>, 
      <a href = "https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8"
      target="_blank" rel="noopener noreferrer" title="js guide">JS</a>
      와 이것들을 활용하는 언어인 
      <a href = "https://ko.reactjs.org/"
      target="_blank" rel="noopener noreferrer" title="react guide">React</a>를 배울겁니다<br />
      이러한 것들을 활용하여 여러가지 방대한 웹사이트를 만드실수 있습니다
      <br />이러한 수업들을 이어나가기에 앞서 먼저
      <br /> 여러분들에게 선택의 시간을
       드리고 시작할려고합니다
       <br /> 각각의 대주제에 들어가보셔서 
       어떠한 것들을 다루고
       <br /> 진정으로 자신에게 필요한 것은 무엇인지 찾아보시면 좋겠습니다
       <br />또한 여러분들은 언어들을 배우고나서 실습해보고 끝이 아닌
       <br />여러분들이 스스로 배운 언어, 문법들을 사용해서 실적물을 만들어보고
       <br />또 실적물에 부족한 내용이나 오류가 생기는 내용들을 찾아보시면서 
       <br />조금 더 자신에게 필요한 문법을 알아가시면 되겠습니다
       <br />또한 이렇게 보고 그대로 사용해보는 것이 아닌 
       <br />자신이 스스로 필요에 따라 학습을 하게 된다면
       <br />더욱 해당 언어에 대한 이해도가 높아지실 겁니다
       <br />제일 추천드리는 방법은 가장 기본적인 언어인 html을 배우시고
       <br />그 후에 css, javarscript, reactjs와 같은 언어들로 
       <br />살을 붙여 보시면 더욱 이해도가 높아지실 것입니다
      </p>
      </div>
      </div>
  </>
  );
}

export default Home;
