const parser = new DOMParser();

const xmlList = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;

const xmlDOM = parser.parseFromString(xmlList, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
const list = [];

studentNode.forEach (elem => {
  const nameNode = elem.querySelector("name");
  const firstNameNode = elem.querySelector("first");
  const secondNameNode = elem.querySelector("second");
  const ageNode = elem.querySelector("age");
  const profNode = elem.querySelector("prof");
  const langAttr = nameNode.getAttribute('lang');
 
  const result = {
    name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
  }
  
  list.push(result);
})

console.log(list);