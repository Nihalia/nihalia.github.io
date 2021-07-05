(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/react.1e35b665.svg"},101:function(e,t,a){e.exports=a.p+"static/media/selenium.d7b696ae.svg"},102:function(e,t,a){e.exports=a.p+"static/media/sql.f5835a70.svg"},103:function(e,t,a){e.exports=a.p+"static/media/mono.ced47ea8.svg"},104:function(e,t,a){e.exports=a.p+"static/media/typescript.2086ed17.svg"},105:function(e,t,a){e.exports=a.p+"static/media/unity.97bfcf35.svg"},108:function(e,t,a){e.exports=a(235)},113:function(e,t,a){},114:function(e,t,a){},117:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},229:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){},232:function(e,t,a){},233:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(80),o=a.n(r),c=(a(113),a(114),a(3)),s=a(5),l=a(7),m=a(6),u="https://filipwennerdahl-github-io.ey.r.appspot.com",d=37,p=39,h={INTRODUCTION:1,SKILLS:2,EXPERIENCE:3,GAMES:4,MISC:5},f=a(81),g=(a(117),function e(t,a,n){Object(c.a)(this,e),this.key=Math.random(),this.location=t,this.date=a,this.description=n}),v=[new g("DigiExam, Stockholm","Jan 2019 - Present",[{key:Math.random(),paragraph:"I am currently employed as a full stack developer where my assignments include everything from developing the front- and back-end of our web application as well as our native client applications."},{key:Math.random(),paragraph:"The front-end technologies are mainly comprised of JavaScript using a hybrid AngularJS/Angular app (we are currently in the process of moving to the latest version of Angular), the back-end of Go using App Engine and GCP as our host. The back-end work also includes maintaining and developing new REST APIs."},{key:Math.random(),paragraph:"Developing the native client applications includes working with C++, Objective-C++, Electron and chromeOS since we support Mac, PC, Chromebook and iOS. The latest addition is an Android app using Kotlin and several WebViews, this is a project where I lead research and specification."}]),new g("Kentor / Sopra Steria, Stockholm","Jun 2017 \u2013 Dec 2018",[{key:Math.random(),paragraph:"Employed as an IT consultant where my main assignment was located at Telia. At Telia my work included automated test framework development and management for browser and smartphone testing, development of test PoC\u2019s, automated test maintenance for the Telia Play+ service, etc."},{key:Math.random(),paragraph:"Outside of the Telia assignment I also worked on in house projects such as maintenance of a patient management system for dental care built with ASP.NET and assisting in R&D for VR/AR applications."}])],E=[new g("Bachelor\u2019s degree in Computer Science (180p), Stockholm University","Aug 2014 \u2013 Jun 2017",[{key:Math.random(),paragraph:"A 3 year program with focus on game development to learn the full process of creating a game from the design to release to end users."},{key:Math.random(),paragraph:"The majority of the courses had a focus on programming in Java and C++ as well as system science but also modeling through use case- and UML diagrams and SQL database management."},{key:Math.random(),paragraph:"The university education also provided experience of data structure- and algorithm analysis as well as test-driven development using Java, it consisted of unit-, integration- and systemtesting."}])],w=v.length%2===0?1:0,y=[new g("Portfolio, React","Jul 2020 - Ongoing project",[{key:Math.random(),paragraph:"This portfolio was an experiment by me to take on React, both to see it's potential but also to expand my toolbox. The backend is built using Golang and is hosted on GCP using App Engine and Firestore."},{key:Math.random(),paragraph:"If you are curious and want to check out the source you can find <a href='https://github.com/FilipWennerdahl/FilipWennerdahl.github.io' target='_blank'>the repository on my GitHub profile</a>. I try to keep it updated when I get a spark of inspiration or when there is new information to add."}])],C=E.length%2===0?1:0,b=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=v.map((function(t,a){return i.a.createElement("div",{key:t.key,className:"experience_content experienceSection experience_content-".concat(a%2===0?"left":"right")},i.a.createElement("div",{className:"experienceSection_header"},i.a.createElement("h5",null,t.location),i.a.createElement("h5",null,t.date)),i.a.createElement("div",{className:"experienceSection_content containerBGDown"},i.a.createElement("div",{className:"textContainer "+(e.props.currentPage===h.EXPERIENCE?"textContainer-visible":"")},t.description.map((function(e){return i.a.createElement("p",{key:e.key},e.paragraph)})))))})),a=E.map((function(t,a){return i.a.createElement("div",{key:t.key,className:"experience_content experienceSection experience_content-".concat(a%w===0?"left":"right")},i.a.createElement("div",{className:"experienceSection_header"},i.a.createElement("h5",null,t.location),i.a.createElement("h5",null,t.date)),i.a.createElement("div",{className:"experienceSection_content containerBGDown"},i.a.createElement("div",{className:"textContainer "+(e.props.currentPage===h.EXPERIENCE?"textContainer-visible":"")},t.description.map((function(e){return i.a.createElement("p",{key:e.key},e.paragraph)})))))})),n=y.map((function(t,a){return i.a.createElement("div",{key:t.key,className:"experience_content experienceSection experience_content-".concat(a%C===0?"left":"right")},i.a.createElement("div",{className:"experienceSection_header"},i.a.createElement("h5",null,t.location),i.a.createElement("h5",null,t.date)),i.a.createElement("div",{className:"experienceSection_content containerBGDown"},i.a.createElement("div",{className:"textContainer "+(e.props.currentPage===h.EXPERIENCE?"textContainer-visible":"")},t.description.map((function(e){return i.a.createElement("p",{key:e.key,dangerouslySetInnerHTML:{__html:e.paragraph}})})))))}));return i.a.createElement("div",{className:"experience content"},i.a.createElement("div",{className:"leftFlex"},i.a.createElement("h1",{className:"content_header"},"Experience")),i.a.createElement("div",{className:"experience_content experience_content-left"},i.a.createElement("h4",null,"Employment")),t,i.a.createElement("div",{className:"experience_content  experience_content-".concat(1===w?"left":"right")},i.a.createElement("h4",null,"Education")),a,i.a.createElement("div",{className:"experience_content  experience_content-".concat(1===C?"left":"right")},i.a.createElement("h4",null,"Projects")),n)}}]),a}(i.a.Component),N=a(18),k=a.n(N),S=(a(121),function e(t,a){Object(c.a)(this,e),this.title=t,this.paragraphs=a}),P=function e(t){Object(c.a)(this,e),this.key=Math.random(),this.text=t},x=new S("Space Game",[new P('"Have you ever wondered how a manually controlled spaceship would avoid collisions while accelerating to the speed of light? By using it\'s built in chrono-fluxometer of course! The chrono-fluxometer has the ability for slow down time for a short period and is connected to the ships near-collisions-detection system".'),new P('I made a small prototype as a proof of concept for an idea I had, what if I combined an endless runner with the "bullet time" mechanic from the Max Payne games. Well, this is the resault. <a href="https://github.com/FilipWennerdahl/MobileSpaceGame" target="_blank" rel="noopener noreferrer">The source code can be found here.</a>'),new P("You control the the ship with A (move left) and D (move right), the goal is to get as far as possible."),new P('Unfourtantly due to WebGL limitations, this in browser version of the game is not supported on mobile devices If you have an Android device you can <a href="https://rawgit.com/FilipWennerdahl/MobileSpaceGame/master/Game-Android/MobileSpaceGame.apk" target="_blank" rel="noopener noreferrer">download the game here (APK).</a>')]),I=new N.UnityContent("https://rawgit.com/FilipWennerdahl/MobileSpaceGame/master/Game-WebGL/Build/Game-WebGL.json","https://rawgit.com/FilipWennerdahl/MobileSpaceGame/master/Game-WebGL/Build/UnityLoader.js",{unityVersion:"2017.3.1"}),O=new S("Tower of Hanoi",[new P("This is a work sample I did for Toca Boca where I was asked to recreate the classic game Tower of Hanoi using Unity. All the original rules of the game had to be implemented as well as a win state and touch device support."),new P('The art assets was provided by and is property of Toca Boca. <a href="https://github.com/FilipWennerdahl/TowerOfHanoi" target="_blank" rel="noopener noreferrer">The source code can be found here.</a>'),new P('Unfourtantly due to WebGL limitations, this in browser version of the game is not supported on mobile devices. If you have an Android device you can <a href="https://rawgit.com/FilipWennerdahl/TowerOfHanoi/master/Game-Android/TowerOfHanoi.apk" target="_blank" rel="noopener noreferrer">download the game here (APK).</a>')]),_=new N.UnityContent("https://rawgit.com/FilipWennerdahl/TowerOfHanoi/master/Game-WebGL/Build/Game-WebGL.json","https://rawgit.com/FilipWennerdahl/TowerOfHanoi/master/Game-WebGL/Build/UnityLoader.js",{unityVersion:"2017.3.1"}),L=new S("Botson & FindOS",[new P('The biggest team project during my university studies was a several month long game development project. We ended up creating a 2 person coop puzzle game where the respective players movement was connected to the movement of enemies and traps. If you are on Windows you can <a href="https://drive.google.com/uc?export=download&id=154XUMaxtREeNQmJcEIOzmXhgOByljAOc" target="_blank" rel="noopener noreferrer">download and try the game with a friend here.</a>'),new P("The team consisted of three developers and two designers where my role as a developer included tasks such as: character movement, trap and item behaviour, physics enhancements, level design, general scripting and QA/bug fixing."),new P("Botson & FindOS was nominated for Best Execution in Design at Swedish Game Awards 2017.")]),T=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).loadSpaceGame=function(){n.state.spaceGameLoaded||n.setState({spaceGameLoaded:!0,spaceGameStyle:{height:document.getElementsByClassName("spaceGame").offsetHeight+"px",width:document.getElementsByClassName("spaceGame").offsetWidth+"px"}})},n.loadTowerOfHanoiGame=function(){n.state.towerOfHanoiLoaded||n.setState({towerOfHanoiLoaded:!0,towerOfHanoiStyle:{height:document.getElementById("towerOfHanoi").offsetHeight+"px",width:document.getElementById("towerOfHanoi").offsetWidth+"px"}})},n.state={spaceGameLoaded:!1,spaceGameStyle:{height:"70vh",width:"calc(70vh / 1.78)"},towerOfHanoiLoaded:!1,towerOfHanoiStyle:{height:"calc(var(--unity-container-width) / 1.78)",width:"var(--unity-container-width)"}},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){(this.state.spaceGameLoaded||this.state.towerOfHanoiLoaded)&&e.currentPage!==h.GAMES&&this.setState({spaceGameLoaded:!1,spaceGameStyle:{height:"70vh",width:"calc(70vh / 1.78)"},towerOfHanoiLoaded:!1,towerOfHanoiStyle:{height:"calc(var(--unity-container-width) / 1.78)",width:"var(--unity-container-width)"}})}},{key:"render",value:function(){var e=this,t=x.paragraphs.map((function(t,a){return i.a.createElement("div",{key:t.key,className:"gameText "+(0===a?"italic ":"")+(e.props.currentPage===h.GAMES?"gameText-visible":""),dangerouslySetInnerHTML:{__html:t.text}})})),a=O.paragraphs.map((function(t){return i.a.createElement("div",{key:t.key,className:"gameText "+(e.props.currentPage===h.GAMES?"gameText-visible":""),dangerouslySetInnerHTML:{__html:t.text}})})),n=L.paragraphs.map((function(t){return i.a.createElement("div",{key:t.key,className:"gameText "+(e.props.currentPage===h.GAMES?"gameText-visible":""),dangerouslySetInnerHTML:{__html:t.text}})}));return i.a.createElement("div",{className:"games content"},i.a.createElement("div",{className:"leftFlex"},i.a.createElement("h1",{className:"content_header"},"Games")),i.a.createElement("div",{className:"games_header games_header-left"},i.a.createElement("h4",null,x.title)),i.a.createElement("div",{className:"games_container games_container-left containerBGDown"},t),i.a.createElement("div",{className:"games_container games_container-center"},i.a.createElement("div",{id:"spaceGame",className:"unityContainer unityContainer-portrait "+(this.state.spaceGameLoaded?"":"unityContainer-unLoaded"),onClick:this.loadSpaceGame,style:this.state.spaceGameStyle},this.state.spaceGameLoaded?"":i.a.createElement("i",{className:"fa fa-play-circle-o","aria-hidden":"true"}),this.state.spaceGameLoaded?i.a.createElement(k.a,{unityContent:I}):"")),i.a.createElement("div",{className:"games_header games_header-right"},i.a.createElement("h4",null,O.title)),i.a.createElement("div",{className:"games_container games_container-right containerBGDown"},a),i.a.createElement("div",{className:"games_container games_container-center"},i.a.createElement("div",{id:"towerOfHanoi",className:"unityContainer unityContainer-landscape "+(this.state.towerOfHanoiLoaded?"":"unityContainer-unLoaded"),onClick:this.loadTowerOfHanoiGame,style:this.state.towerOfHanoiStyle},this.state.towerOfHanoiLoaded?"":i.a.createElement("i",{className:"fa fa-play-circle-o","aria-hidden":"true"}),this.state.towerOfHanoiLoaded?i.a.createElement(k.a,{unityContent:_}):"")),i.a.createElement("div",{className:"games_header games_header-left"},i.a.createElement("h4",null,L.title)),i.a.createElement("div",{className:"games_container games_container-left containerBGDown"},n),i.a.createElement("div",{className:"games_container games_container-center"},i.a.createElement("iframe",{id:"videoBotson",title:"Botson & FindOS",src:"https://www.youtube.com/embed/KT1SzL1UhQw?rel=0",vq:"hd1080",frameBorder:"0",allowFullScreen:!0})))}}]),a}(i.a.Component),G="casual",j="business",M=a(82),R=a.n(M),A=a(83),U=a.n(A),D=(a(122),function e(t){Object(c.a)(this,e),this.key=Math.random(),this.text=t}),B=function e(t,a){Object(c.a)(this,e),this.key=Math.random(),this.title=t,this.url=a},F=[new D("I'm a full stack developer and you've found my portfoilo."),new D("Here you can find my skills, experiences and some of the game projects I've worked on."),new D("You may also notice that I tried to let my love for nature shine through."),new D("Enjoy!")],H=[new B("React"),new B("React Unity WebGL","https://github.com/elraccoone/react-unity-webgl"),new B("React Color","https://casesandberg.github.io/react-color/"),new B("Universal Cookie","https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie"),new B("React Swipeable","https://github.com/FormidableLabs/react-swipeable")],W=[new B("Golang"),new B("App Engine"),new B("Firestore")],K=[new B("Responsive design"),new B("Selectable colour scheme"),new B("Persistent comment section")],J=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).flipPicture=function(e){n.setState({profilePicture:e})},n.state={profilePicture:G},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=F.map((function(t){return i.a.createElement("div",{key:t.key,className:"introductionText "+(e.props.currentPage===h.INTRODUCTION?"introductionText-visible":"")},t.text)})),a=H.map((function(e){return i.a.createElement("li",{key:e.key},!e.url&&i.a.createElement("div",null,e.title),e.url&&i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.title))})),n=W.map((function(e){return i.a.createElement("li",{key:e.key},!e.url&&i.a.createElement("div",null,e.title),e.url&&i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.title))})),r=K.map((function(e){return i.a.createElement("li",{key:e.key},!e.url&&i.a.createElement("div",null,e.title),e.url&&i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.title))}));return i.a.createElement("div",{className:"introduction content"},i.a.createElement("div",{className:"leftFlex"},i.a.createElement("h1",{className:"content_header"},"Introduction")),i.a.createElement("div",{className:"introduction_content"},i.a.createElement("div",{className:"introductionRow introductionRow-info introductionRow-mb"},i.a.createElement("div",{className:"introductionRow_intro"},i.a.createElement("h4",null,"Hi, I'm Filip!"),i.a.createElement("div",{className:"introductionRow_content containerBGRight"},t)),i.a.createElement("div",{className:"introductionRow_picture"},i.a.createElement("div",{className:"profilePictureContainer",onClick:function(){return e.flipPicture(e.state.profilePicture===G?j:G)}},i.a.createElement("div",{className:"profilePicture "+(this.state.profilePicture===j?"profilePicture-flipped":"")},i.a.createElement("img",{src:R.a,alt:"casual"}),i.a.createElement("img",{src:U.a,className:"profilePicture_business",alt:"business"}))),i.a.createElement("div",null,i.a.createElement("div",{className:"pictureButton "+(this.state.profilePicture===G?"pictureButton-selected":""),onClick:function(){return e.flipPicture(G)}},"Casual")," / ",i.a.createElement("div",{className:"pictureButton "+(this.state.profilePicture===j?"pictureButton-selected":""),onClick:function(){return e.flipPicture(j)}},"Business")))),i.a.createElement("div",{className:"introductionRow introductionRow-list"},i.a.createElement("h4",null,"Portfolio Info"),i.a.createElement("div",{className:"siteInfo containerBGDown"},i.a.createElement("h3",null,"Front-end Technologies"),i.a.createElement("ul",{className:"blinderEffect "+(this.props.currentPage===h.INTRODUCTION?"blinderEffect-active":"")},a)),i.a.createElement("div",{className:"siteInfo containerBGDown"},i.a.createElement("h3",null,"Back-end Technologies"),i.a.createElement("ul",{className:"blinderEffect "+(this.props.currentPage===h.INTRODUCTION?"blinderEffect-active":"")},n)),i.a.createElement("div",{className:"siteInfo containerBGDown"},i.a.createElement("h3",null,"Features"),i.a.createElement("ul",{className:"blinderEffect "+(this.props.currentPage===h.INTRODUCTION?"blinderEffect-active":"")},r)))))}}]),a}(i.a.Component),X=a(106),q=a(107),z=(a(229),function e(t,a,n,i){Object(c.a)(this,e),this.key=Math.random(),this.author=t,this.content=a,this.owner=n,this.created=new Date(i)}),Q=new q.a,V=[],Y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(c.a)(this,a),(n=t.call(this,e)).updateAppTheme=function(e,t,a){var n=e+","+t+","+a;document.documentElement.style.setProperty("--app-theme","rgba("+n+", 0.3)"),document.documentElement.style.setProperty("--app-theme-button","rgba("+n+", 0.15)"),document.documentElement.style.setProperty("--app-theme-button-hover","rgba("+n+", 0.27)"),document.documentElement.style.setProperty("--app-theme-border","rgba("+n+", 1)")},n.handleChangeColourComplete=function(e){n.setState({currentColour:{r:e.rgb.r,g:e.rgb.g,b:e.rgb.b,hex:e.hex}}),n.updateAppTheme(e.rgb.r,e.rgb.g,e.rgb.b),Q.set("app-theme",n.state.currentColour,{path:"/",maxAge:26e5,sameSite:!0})},n.postComment=function(){var e={author:n.state.newCommentAuthor,content:n.state.newComment,id:n.state.appUUID};fetch(u+"/api/comments",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){200===e.status&&e.json().then((function(e){V.unshift(new z(e.author,e.content,e.owner,e.created)),n.setState({commentOwner:e.owner})})).finally((function(){n.setState({newComment:"",newCommentAuthor:""})}))}))},n.deleteComment=function(){fetch(u+"/api/comments?"+new URLSearchParams({id:n.state.appUUID}),{method:"DELETE"}).then((function(){V=V.filter((function(e){return!e.owner})),n.setState({commentOwner:!1})}))};var i=Q.get("app-uuid"),r=Q.get("app-theme");return n.state={currentColour:r||{r:0,g:121,b:107,hex:"#00796b"},appUUID:i||n.generateUUID(),newCommentAuthor:"",newComment:"",commentsLoaded:!1},Q.set("app-uuid",n.state.appUUID,{path:"/",maxAge:16e6,sameSite:!0}),Q.set("app-theme",n.state.currentColour,{path:"/",maxAge:16e6,sameSite:!0}),n.updateAppTheme(n.state.currentColour.r,n.state.currentColour.g,n.state.currentColour.b),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchComments()}},{key:"generateUUID",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}},{key:"fetchComments",value:function(){var e=this;fetch(u+"/api/comments?"+new URLSearchParams({id:this.state.appUUID})).then((function(e){if(200===e.status)return e.json()})).then((function(t){t&&t.forEach((function(t){V.push(new z(t.author,t.content,t.owner,t.created)),t.owner&&e.setState({commentOwner:!0})})),e.setState({commentsLoaded:!0})}))}},{key:"render",value:function(){var e=this,t=V.map((function(t){return i.a.createElement("div",{key:t.key,className:"comments"},i.a.createElement("h5",{className:"comments_header"},i.a.createElement("div",null,t.author),i.a.createElement("div",null,t.created.toDateString())),i.a.createElement("div",{className:"comments_content miscContainer_content containerBGDown"+(e.props.currentPage===h.MISC?" comments_content-visible":"")},i.a.createElement("div",null,t.content),i.a.createElement("div",null,t.owner&&i.a.createElement("button",{className:"comments_button",onClick:e.deleteComment},"Delete Comment"))))}));return i.a.createElement("div",{className:"misc content"},i.a.createElement("div",{className:"leftFlex"},i.a.createElement("h1",{className:"content_header"},"Contact & Settings")),i.a.createElement("div",{className:"misc_content"},i.a.createElement("div",{className:"miscContainer"+(this.state.commentsLoaded?"":" miscContainer-hidden")},i.a.createElement("div",{className:"miscContainer_header"},i.a.createElement("h4",null,"Comments")),t,i.a.createElement("div",{className:"commentField miscContainer_content containerBGDown"+(this.state.commentOwner?" commentField-hidden":"")},i.a.createElement("div",{className:"commentField_content"+(this.props.currentPage===h.MISC?" commentField_content-visible":"")},i.a.createElement("div",null,"Name:",i.a.createElement("input",{type:"text",maxLength:"40",className:"commentField_name",value:this.state.newCommentAuthor,onChange:function(t){e.setState({newCommentAuthor:t.target.value})}})),i.a.createElement("div",{className:"commentRow"},i.a.createElement("textarea",{className:"commentRow_text",placeholder:"Leave a comment..",rows:"2",value:this.state.newComment,onChange:function(t){e.setState({newComment:t.target.value})}}),i.a.createElement("button",{className:"commentRow_button",onClick:this.postComment,disabled:!this.state.newComment||!this.state.newCommentAuthor},"Post Comment"))))),i.a.createElement("div",{className:"miscContainer"},i.a.createElement("div",{className:"miscContainer_header"},i.a.createElement("h4",null,"Contact Information")),i.a.createElement("div",{className:"miscContainer_content containerBGDown"},i.a.createElement("div",{className:"miscContainer_text "+(this.props.currentPage===h.MISC?"miscContainer_text-visible":"")},"Currently I'm mainly interested in fullstack work but I'd also like to expand my app development skills. I'm NOT interested in test automation or pure java development at this moment."),i.a.createElement("div",{className:"miscContainer_contactInfo "+(this.props.currentPage===h.MISC?"miscContainer_contactInfo-visible":"")},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),"Email:"),i.a.createElement("a",{href:"mailto:filipwennerdahl@hotmail.com"},"filipwennerdahl@hotmail.com")),i.a.createElement("div",{className:"miscContainer_contactInfo "+(this.props.currentPage===h.MISC?"miscContainer_contactInfo-visible":"")},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"}),"LinkedIn:"),i.a.createElement("a",{href:"https://www.linkedin.com/in/filip-wennerdahl/",target:"_blank",rel:"noopener noreferrer"},"https://www.linkedin.com/in/filip-wennerdahl/")),i.a.createElement("div",{className:"miscContainer_contactInfo "+(this.props.currentPage===h.MISC?"miscContainer_contactInfo-visible":"")},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"}),"GitHub:"),i.a.createElement("a",{href:"https://github.com/filipwennerdahl",target:"_blank",rel:"noopener noreferrer"},"https://github.com/filipwennerdahl")))),i.a.createElement("div",{className:"miscContainer"},i.a.createElement("div",{className:"miscContainer_header"},i.a.createElement("h4",null,"Colour Theme Picker")),i.a.createElement("div",{className:"miscContainer_content miscContainer_content-center miscContainer_content-disclaimer containerBGDown"},"In choosing a colour you accept to store a cookie with the app theme information."),i.a.createElement(X.a,{className:"miscContainer_content-center",width:"auto",height:"auto",color:this.state.currentColour.hex,onChangeComplete:this.handleChangeColourComplete}))))}}]),a}(i.a.Component),$=a(48),Z=a.n($),ee=a(88),te=a.n(ee),ae=a(89),ne=a.n(ae),ie=a(90),re=a.n(ie),oe=a(91),ce=a.n(oe),se=a(92),le=a.n(se),me=a(93),ue=a.n(me),de=a(94),pe=a.n(de),he=a(95),fe=a.n(he),ge=a(96),ve=a.n(ge),Ee=a(97),we=a.n(Ee),ye=a(98),Ce=a.n(ye),be=a(99),Ne=a.n(be),ke=a(100),Se=a.n(ke),Pe=a(101),xe=a.n(Pe),Ie=a(102),Oe=a.n(Ie),_e=a(103),Le=a.n(_e),Te=a(104),Ge=a.n(Te),je=a(105),Me=a.n(je),Re=(a(230),function e(t,a,n,i){Object(c.a)(this,e),this.key=Math.random(),this.name=t,this.icon=a,this.usingFa=n,this.iconStyling=i}),Ae=[new Re("JavaScript",we.a,!1),new Re("HTML5","html5",{fontSize:"2em",marginLeft:"0.3em"}),new Re("CSS","css3",!0),new Re("Java",ve.a,!1),new Re("Golang",fe.a,!1),new Re("C#",re.a,!1),new Re("SQL",Oe.a,!1),new Re("C++",ne.a,!1),new Re("Objective-C","apple",!0),new Re("TypeScript",Ge.a,!1,{height:"1.4em"})],Ue=[new Re("AngularJS",Z.a,!1),new Re("Git",pe.a,!1),new Re("Appium",te.a,!1,{height:"1.4em"}),new Re("Selenium",xe.a,!1),new Re("Google Cloud Platform",ue.a,!1),new Re("Google App Engine",le.a,!1),new Re("Node.js",Ne.a,!1),new Re("jQuery",Ce.a,!1,{height:"1.4em"}),new Re("elasticsearch",ce.a,!1,{height:"1.5em"}),new Re("Angular",Z.a,!1),new Re("React",Se.a,!1),new Re("Mono framework",Le.a,!1),new Re("Unity",Me.a,!1)],De=[new Re("Windows","windows",!0,{fontSize:"1.4em"}),new Re("macOS","apple",!0),new Re("Chromebook","chrome",!0),new Re("iOS","apple",!0),new Re("Android","android",!0),new Re("Linux","linux",!0)],Be=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=De.map((function(e){return i.a.createElement("div",{key:e.key,className:"skill",title:e.name},i.a.createElement("div",{className:"skill_text"},e.name),e.usingFa&&i.a.createElement("i",{className:"fa fa-".concat(e.icon),style:e.iconStyling,"aria-hidden":"true"}),!e.usingFa&&i.a.createElement("img",{src:e.icon,alt:e.name,style:e.iconStyling}))})),t=Ue.map((function(e){return i.a.createElement("div",{key:e.key,className:"skill",title:e.name},i.a.createElement("div",{className:"skill_text"},e.name),e.usingFa&&i.a.createElement("i",{className:"fa fa-".concat(e.icon),style:e.iconStyling,"aria-hidden":"true"}),!e.usingFa&&i.a.createElement("img",{src:e.icon,alt:e.name,style:e.iconStyling}))})),a=Ae.map((function(e){return i.a.createElement("div",{key:e.key,className:"skill",title:e.name},i.a.createElement("div",{className:"skill_text"},e.name),e.usingFa&&i.a.createElement("i",{className:"fa fa-".concat(e.icon),style:e.iconStyling,"aria-hidden":"true"}),!e.usingFa&&i.a.createElement("img",{src:e.icon,alt:e.name,style:e.iconStyling}))}));return i.a.createElement("div",{className:"skills content"},i.a.createElement("div",{className:"leftFlex"},i.a.createElement("h1",{className:"content_header"},"Skills")),i.a.createElement("div",{className:"skillType"},i.a.createElement("div",{className:"skillType_header"},i.a.createElement("h3",null,i.a.createElement("i",{className:"fa fa-code","aria-hidden":"true"}),"Languages")),i.a.createElement("div",{className:"skillList"},i.a.createElement("div",{className:"skillList_description"},"During my time as a developer I've used several different languages both professionally and in hobby projects."),i.a.createElement("div",{className:"skillList_container bold blinderEffect "+(this.props.currentPage===h.SKILLS?"blinderEffect-active":"")},a))),i.a.createElement("div",{className:"skillType"},i.a.createElement("div",{className:"skillType_header"},i.a.createElement("h3",null,i.a.createElement("i",{className:"fa fa-microchip","aria-hidden":"true"}),"Technologies")),i.a.createElement("div",{className:"skillList"},i.a.createElement("div",{className:"skillList_description skillList_description-right"},"Building websites, applications and games requires a wide array tools and frameworks."),i.a.createElement("div",{className:"skillList_container bold blinderEffect "+(this.props.currentPage===h.SKILLS?"blinderEffect-active":"")},t))),i.a.createElement("div",{className:"skillType"},i.a.createElement("div",{className:"skillType_header"},i.a.createElement("h3",null,i.a.createElement("i",{className:"fa fa-laptop","aria-hidden":"true"}),"Platforms")),i.a.createElement("div",{className:"skillList"},i.a.createElement("div",{className:"skillList_description"},"My expeirence of developing cross platform applications and setting up CI has exposed me to most of the major platforms."),i.a.createElement("div",{className:"skillList_container bold blinderEffect "+(this.props.currentPage===h.SKILLS?"blinderEffect-active":"")},e))))}}]),a}(i.a.Component),Fe=(a(231),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).previousPage=null,e.newPage=e.props.currentPage,e}return Object(s.a)(a,[{key:"shouldComponentUpdate",value:function(e){return e.currentPage!==this.props.currentPage&&(this.previousPage=this.props.currentPage,this.newPage=e.currentPage,!0)}},{key:"render",value:function(){return i.a.createElement("div",{className:"mainContent"},i.a.createElement("div",{className:"mainContent_edge"}),i.a.createElement("div",{className:"mainContent_middle"},i.a.createElement("div",{className:"contentContainer "+(this.newPage>h.INTRODUCTION?"contentContainer-left ":"")+(this.newPage<h.INTRODUCTION?"contentContainer-right ":"")+(this.newPage===h.INTRODUCTION?"contentContainer-current ":"")+(this.previousPage>h.INTRODUCTION?"contentContainer-wasLeft ":"")+(this.previousPage<h.INTRODUCTION?"contentContainer-wasRight ":"")},i.a.createElement(J,{currentPage:this.props.currentPage})),i.a.createElement("div",{className:"contentContainer "+(this.newPage>h.SKILLS?"contentContainer-left ":"")+(this.newPage<h.SKILLS?"contentContainer-right ":"")+(this.newPage===h.SKILLS?"contentContainer-current ":"")+(this.previousPage>h.SKILLS?"contentContainer-wasLeft ":"")+(this.previousPage<h.SKILLS?"contentContainer-wasRight ":"")},i.a.createElement(Be,{currentPage:this.props.currentPage})),i.a.createElement("div",{className:"contentContainer "+(this.newPage>h.EXPERIENCE?"contentContainer-left ":"")+(this.newPage<h.EXPERIENCE?"contentContainer-right ":"")+(this.newPage===h.EXPERIENCE?"contentContainer-current ":"")+(this.previousPage>h.EXPERIENCE?"contentContainer-wasLeft ":"")+(this.previousPage<h.EXPERIENCE?"contentContainer-wasRight ":"")},i.a.createElement(b,{currentPage:this.props.currentPage})),i.a.createElement("div",{className:"contentContainer "+(this.newPage>h.GAMES?"contentContainer-left ":"")+(this.newPage<h.GAMES?"contentContainer-right ":"")+(this.newPage===h.GAMES?"contentContainer-current ":"")+(this.previousPage>h.GAMES?"contentContainer-wasLeft ":"")+(this.previousPage<h.GAMES?"contentContainer-wasRight ":"")},i.a.createElement(T,{currentPage:this.props.currentPage})),i.a.createElement("div",{className:"contentContainer "+(this.newPage>h.MISC?"contentContainer-left ":"")+(this.newPage<h.MISC?"contentContainer-right ":"")+(this.newPage===h.MISC?"contentContainer-current ":"")+(this.previousPage>h.MISC?"contentContainer-wasLeft ":"")+(this.previousPage<h.MISC?"contentContainer-wasRight ":"")},i.a.createElement(Y,{currentPage:this.props.currentPage}))),i.a.createElement("div",{className:"mainContent_edge"}))}}]),a}(i.a.Component)),He=(a(232),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={topOfPage:!0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(){window.pageYOffset<10?e.setState({topOfPage:!0}):e.setState({topOfPage:!1})}}},{key:"componentWillUnmount",value:function(){window.onscroll=null}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"topBar "+(this.state.topOfPage?"":"topBar-floating")},i.a.createElement("div",{className:"topBar_container"},i.a.createElement("div",{className:"icon "+(this.props.currentPage===h.INTRODUCTION?"icon-selected":""),onClick:function(){return e.props.setCurrentPage(h.INTRODUCTION)},title:"Introcution"},i.a.createElement("i",{className:"fa fa-user-circle-o icon_small","aria-hidden":"true"})),i.a.createElement("div",{className:"icon "+(this.props.currentPage===h.SKILLS?"icon-selected":""),onClick:function(){return e.props.setCurrentPage(h.SKILLS)},title:"Skills"},i.a.createElement("i",{className:"fa fa-check-square icon_small","aria-hidden":"true"})),i.a.createElement("div",{className:"icon "+(this.props.currentPage===h.EXPERIENCE?"icon-selected":""),onClick:function(){return e.props.setCurrentPage(h.EXPERIENCE)}},i.a.createElement("i",{className:"fa fa-list icon_small","aria-hidden":"true"})),i.a.createElement("div",{className:"icon "+(this.props.currentPage===h.GAMES?"icon-selected":""),onClick:function(){return e.props.setCurrentPage(h.GAMES)}},i.a.createElement("i",{className:"fa fa-gamepad icon_gamepad","aria-hidden":"true"})),i.a.createElement("div",{className:"icon "+(this.props.currentPage===h.MISC?"icon-selected":""),onClick:function(){return e.props.setCurrentPage(h.MISC)}},i.a.createElement("i",{className:"fa fa-circle-thin icon_circle","aria-hidden":"true"}),i.a.createElement("i",{className:"fa fa-ellipsis-h icon_small","aria-hidden":"true"}))))}}]),a}(i.a.Component)),We=(a(233),Object.values(h).sort()[0]),Ke=Object.values(h).sort()[Object.values(h).length-1],Je=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleKeyUp=function(e){switch(e.keyCode){case d:n.scrollLeft();break;case p:n.scrollRight()}},n.scrollLeft=function(){n.state.currentPage-1>=We&&n.setCurrentPage(n.state.currentPage-1)},n.scrollRight=function(){n.state.currentPage+1<=Ke&&n.setCurrentPage(n.state.currentPage+1)},n.setCurrentPage=function(e){n.setState({currentPage:e}),window.scrollTo({top:0,behavior:"smooth"})},n.state={currentPage:h.INTRODUCTION},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp),fetch(u+"/api/visit",{method:"POST"})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){return i.a.createElement(f.a,{className:"appContainer",style:this.appHeight,onSwipedLeft:this.scrollRight,onSwipedRight:this.scrollLeft},i.a.createElement(He,{currentPage:this.state.currentPage,setCurrentPage:this.setCurrentPage}),i.a.createElement(Fe,{currentPage:this.state.currentPage}))}}]),a}(i.a.Component);a(234);var Xe=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(Je,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,a){e.exports=a.p+"static/media/angular.5b2ffffd.svg"},82:function(e,t,a){e.exports=a.p+"static/media/casual-picture.a5e7c65d.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/profile-picture.eec65c64.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/appium.13cbf98b.svg"},89:function(e,t,a){e.exports=a.p+"static/media/c-plus-plus.dc8249ba.svg"},90:function(e,t,a){e.exports=a.p+"static/media/csharp.8e953d44.svg"},91:function(e,t,a){e.exports=a.p+"static/media/elasticsearch.63ca3b83.svg"},92:function(e,t,a){e.exports=a.p+"static/media/google-app-engine.1879f3a4.svg"},93:function(e,t,a){e.exports=a.p+"static/media/google-cloud-platform.4ba681eb.svg"},94:function(e,t,a){e.exports=a.p+"static/media/git.24649669.svg"},95:function(e,t,a){e.exports=a.p+"static/media/go.99736a7e.svg"},96:function(e,t,a){e.exports=a.p+"static/media/java.ce92ce4a.svg"},97:function(e,t,a){e.exports=a.p+"static/media/javascript.9a05d9db.svg"},98:function(e,t,a){e.exports=a.p+"static/media/jquery.7c4aefc4.svg"},99:function(e,t,a){e.exports=a.p+"static/media/node.16a3218a.svg"}},[[108,1,2]]]);
//# sourceMappingURL=main.adc761e0.chunk.js.map