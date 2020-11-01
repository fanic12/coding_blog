import React from "react";

function Html() {
  return ( 
  <>
  <div>
    {/*<div className="item">
        <h3>html</h3>
        <li>br & p</li>
        <li>image</li>
        <li>link</li>
  </div>*/}
      <div className="BlogContent">
        <h2>HTML-introduce</h2>
        <iframe 
        title="htmlintroduce"
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/iRZJHhjh8DU" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen="true">
        </iframe>
      <p>여러분들 환영합니다 
      <br />지금 여러분들은 
      <a href = "https://ko.wikipedia.org/wiki/HTML"
      target="_blank" rel="noopener noreferrer"  title="html5 guide" className="SetColor">HTML</a>을 배우고 
      <br />이것을 기반으로 작동하는  
      <a href = "https://namu.wiki/w/CSS"
      target="_blank" rel="noopener noreferrer"  title="css guide" className="SetColor">CSS</a>와 
      <a href = "https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8"
      target="_blank" rel="noopener noreferrer"  title="js guide" className="SetColor">JAVARSCRIPT</a>를 배우실겁니다 <br />최종 목표는 이것들을 제외하고도 여러가지 언어를 배워 
      <br />여러분들이 
      <a href = "https://ko.reactjs.org/"
      target="_blank" rel="noopener noreferrer"  title="react guide" className="SetColor">REACT</a>등을 기반으로 자유자제로 웹을 개발하는 것입니다
      <br />이러한 것들을 활용하여 여러가지 방대한 웹사이트를 만드실수 있습니다
      <br />
      <a href = "https://ko.wikipedia.org/wiki/HTML"
      target="_blank" rel="noopener noreferrer"  title="html5 guide" className="SetColor">HTML</a>은 모든 웹의 기본이라고 할정도로 정말 기초의 단계입니다 
      <br />하지만 그만큼 이단계를 제대로 배우고 넘어가지 못하면 상당한 리스크가 생깁니다 
      <br />그러니 수업에 열심히 임해주시면 감사하겠습니다
      <br />이러한 수업들을 이어나가기에 앞서먼저
      <br /> 여러분들에게 조금 지식을알려드리고 시작할려고합니다 
      <br />앞으로 수업에 계속 나올 내용이므로 알고 계시면 수업내용을 이해하시기 편하실겁니다  
      <br />코드는 일반형과 축약형으로 나눌수 있습니다 
      <br />{"<>"}{"</>"}로 끝나는 일반형
      <br />{"< />"}만으로 끝나는 축약형이 있습니다
      <br />{"<>"}{"</>"}는 해당 태그 안에 있는 내용이 태그로 적용됩니다
      <br />{"< />"}는 해당태그가 그뒤에나오는 내용이 그대로 적용됩니다 반대로 끝이 없습니다
      <br />그래서 보통 코드를 불러오는등 {"<>"}{"</>"}형과{"< />"}형을 사용했을때 값이 같을때 사용합니다 
      <br />혹은 굳이 {"<>"}{"</>"}형으로 나눠서 쓸 필요 없는 br코드와 같은 코드를 사용할때도 씁니다
      </p>
      <iframe height="500" width="100%" scrolling="no" title="html guide" src="https://codepen.io/fanic12/embed/gOMeVdp?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/fanic12/pen/gOMeVdp'>html guide</a> by fanic12
  (<a href='https://codepen.io/fanic12'>@fanic12</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
      </div>
      </div>
  </>
  );
}

export default Html;
