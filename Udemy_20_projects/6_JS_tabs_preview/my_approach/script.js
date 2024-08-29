
const tabOne = document.querySelector(".react");
const tabTwo = document.querySelector(".vue");
const tabThree = document.querySelector(".angular");
const body = document.body;
const item = document.querySelectorAll(".item");
const icon = document.querySelector(".big-icon");
const active = document.querySelector(".active");
const info = document.querySelector(".info-text");

// Function to set tab and body colors
function setColors(tab, bgColor, iconClass, infoColor, infoTextHTML) {
    body.style.backgroundColor = bgColor;
    icon.innerHTML = `<i class="${iconClass}"></i>`;
    for (let i = 0; i < item.length; i++) {
      console.info(item[i])
      item[i].style.color = infoColor;
    }
    info.innerHTML = infoTextHTML;
  }
  


tabOne.addEventListener("click",()=>{
    setColors(
      tabOne,
      "#00d8ff",
      "fab fa-react",
      "#00d8ff",
      ` <h4> Pros </h4>
        <ol>
          <li>Easy to Learn and USe</li>
          <li>Creating Dynamic Web Applications Becomes Easier</li>
          <li>Reusable Components</li>
          <li>Performance Enhancement</li>
          <li>The Support of Handy Tools</li>
          <li>Known to be SEO Friendly</li>
          <li>The Benefit of Having JavaScript Library</li>
          <li>Scope for Testing the Codes</li>
        </ol>    
        <h4>Cons</h4>
        <ol>
          <li>The high pace of development</li>
          <li>Poor Documentation</li>
          <li>View Part</li>
          <li>JSX as a barrier</li>
        </ol>`
    );
    tabOne.classList.add("tabOne");
    tabTwo.classList.remove("tabOne");
    tabThree.classList.remove("tabOne");
})

tabTwo.addEventListener("click",()=>{
    setColors(
      tabTwo,
      "#42b883",
      "fab fa-vuejs",
      "#42b883",
      `<h4> Pros </h4>
       <ol>
        <li>Size</li>
        <li>Readability - Easy To Learn</li>
        <li>Virtual DOM Rendering & Performance</li>
        <li>Documentation</li>
        <li>Reactivity System & Data Binding Feature</li>
        <li>Vue Components - Building User Interfaces Made Easy</li>
        <li>support for Single File Components (SFC)</li>
        <li>Vue CLI 3, 4 & 5</li>
        <li>Flexibility</li>
        <li> TypeScript Support</li>
      </ol>    
      <h4>Cons</h4>
      <ol>
        <li>Small Community & Language Barrier Problems</li>
        <li>(Over-)Flexibility</li>
        <li>Limited Resources - Plugins, Libraries & Extensions</li>
      </ol>`
    );
    tabTwo.classList.add("tabOne");
    tabOne.classList.remove("tabOne");
    tabThree.classList.remove("tabOne");
})

tabThree.addEventListener("click",()=>{
    setColors(
      tabThree,
      "#b52e31",
      "fab fa-angular",
      "#b52e31",
      `<h4> Pros </h4>
       <ol>
        <li>Two-way data binding</li>
        <li>Dependency Injection</li>
        <li>Large Community</li>
        <li>MVC Architecture</li>
       </ol>    
       <h4> Cons </h4>
       <ol>
        <li>Steep Learning Curve</li>
        <li>Performance</li>
        <li>Complexity</li>
        <li>Compatibility</li>
       </ol>`
    );
    tabThree.classList.add("tabOne");
    tabTwo.classList.remove("tabOne");
    tabOne.classList.remove("tabOne");
})
    

setColors(
  tabOne,
  "#00d8ff",
  "fab fa-react",
  "#00d8ff",
  ` 
    <h4> Pros </h4>
    <ol>
      <li>Easy to Learn and USe</li>
      <li>Creating Dynamic Web Applications Becomes Easier</li>
      <li>Reusable Components</li>
      <li>Performance Enhancement</li>
      <li>The Support of Handy Tools</li>
      <li>Known to be SEO Friendly</li>
      <li>The Benefit of Having JavaScript Library</li>
      <li>Scope for Testing the Codes</li>
      <li>test</li>
    </ol>
    <h4> Cons </h4>
    <ol>
      <li>The high pace of development</li>
      <li>Poor Documentation</li>
      <li>View Part</li>
      <li>JSX as a barrier</li>
    </ol>
  `
);
tabOne.classList.add("tabOne");

